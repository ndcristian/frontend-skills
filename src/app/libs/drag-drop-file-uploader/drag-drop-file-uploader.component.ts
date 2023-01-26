import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnInit,
} from '@angular/core';
import {
  interval,
  map,
  noop,
  Observable,
  ReplaySubject,
  Subject,
  takeUntil,
  takeWhile,
} from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpEventType,
  HttpHeaderResponse,
  HttpHeaders,
  HttpProgressEvent,
  HttpResponse,
  HttpSentEvent,
  HttpUserEvent,
} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
const I18N_COMP_PREFIX = 'FILE_UPLOAD';

export type ResponseObj =
  | HttpSentEvent
  | HttpHeaderResponse
  | HttpResponse<Object>
  | HttpProgressEvent
  | HttpUserEvent<Object>;

@Component({
  selector: 'app-drag-drop-file-uploader',
  templateUrl: './drag-drop-file-uploader.component.html',
  styleUrls: ['./drag-drop-file-uploader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DragDropFileUploaderComponent implements OnInit {
  @Input() maxHeight: string = '20rem';
  @Input() maxWidth: string = '100%';

  editMode = true;

  showDropzone: boolean = false;

  public stopDownloadSubject: Subject<void> = new Subject<void>();

  isFileUploadedFailed = false;
  uploadPercent: number = 0;
  file: File;
  isUploading = false;
  isMockEnabled: boolean;

  constructor(
    public activatedRoute: ActivatedRoute,
    public _el: ElementRef,
    private http: HttpClient,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}
  get fileUploadUrl() {
    return '/api/v1/images';
  }

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    console.log($event);
    const file = $event[0];
    this.file = file;
    this.processFile(file);
  }
  cancelUpload() {
    this.stopDownloadSubject.next();
    this.isUploading = false;
    this.isFileUploadedFailed = false;
    this.resetUploadStatus();
  }
  private resetUploadStatus() {
    this.uploadPercent = 0;
    this.changeDetector.detectChanges();
  }
  private processFile(file: File) {
    this.isUploading = false;
    this.isFileUploadedFailed = false;
    this.uploadPercent = 0;

    const fileUploadUrl = this.fileUploadUrl;
    if (fileUploadUrl) {
      this.changeDetector.detectChanges();
      this.isUploading = true;
      const formData = new FormData();
      formData.append('file', file);
      let observable: Observable<ResponseObj> = this.http.post(
        fileUploadUrl,
        formData,
        {
          reportProgress: true,
          observe: 'events',
        }
      );
      if ((this.isMockEnabled = false)) {
        observable = this.simulateFileDownloadObservable();
      }
      observable.pipe(takeUntil(this.stopDownloadSubject)).subscribe(
        (resp: ResponseObj) => {
          console.log('resp', resp);
          if (resp.type === HttpEventType.Response) {
            if (resp.status === 201 && resp.headers.has('location')) {
              // this.isUploading = false;
              const imageUrl = resp.headers.get('location');
            } else {
              this.isFileUploadedFailed = true;
              this.resetUploadStatus();
              this.changeDetector.detectChanges();
            }
          }
          if (resp.type === HttpEventType.UploadProgress) {
            this.uploadPercent = Math.round((100 * resp.loaded) / resp.total);
            this.changeDetector.detectChanges();
          }
        },
        (error: HttpErrorResponse) => {
          this.resetUploadStatus();
          this.isFileUploadedFailed = true;
          this.uploadPercent = 0;
          this.changeDetector.detectChanges();
        }
      );
    }
  }
  private simulateFileDownloadObservable(): Observable<ResponseObj> {
    const sub = new ReplaySubject<ResponseObj>();
    const resp: ResponseObj = {
      type: HttpEventType.UploadProgress,
      total: 100,
      loaded: 0,
    };
    interval(500)
      .pipe(
        map((i) => i * 10),
        takeWhile((x) => x <= 100),
        takeUntil(this.stopDownloadSubject),
        tap((i) => {
          resp.loaded = i;
          sub.next(resp);
          if (i == 100) {
            let headers = new HttpHeaders();
            headers = headers.append('location', 'file');
            const respCreated: ResponseObj = {
              type: HttpEventType.Response,
              headers,
              body: null,
              status: 201,
              statusText: 'OK',
              url: '',
              ok: true,
              clone: null,
            };
            sub.next(respCreated);
          }
        })
      )
      .subscribe(noop);
    return sub.asObservable();
  }
  getI18nComponentPrefix(): string {
    return I18N_COMP_PREFIX;
  }
}
