import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

export interface DownloadApi {
  download(url: string, response: "response"):Observable<any>
}

@Component({
  selector: 'etx-interface-impl',
  templateUrl: './interface-impl.component.html',
  styleUrls: ['./interface-impl.component.scss']
})
export class InterfaceImplComponent implements OnInit {

  downloadOpt: DownloadApi = {
    download(url, response) {
        return new Observable;
    },
  };

  constructor() { }

  ngOnInit(): void {
    this.downloadOpt.download("url", "response").subscribe((item)=>{
      console.log(item)
    })
  }

}
