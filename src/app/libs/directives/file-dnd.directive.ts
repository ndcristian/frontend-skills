import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from "@angular/core";

@Directive({
  selector: "[zfCsDnd]",
})
export class FileDndDirective {
  @Input() fileOver: boolean;
  @Output() fileOverChange = new EventEmitter<boolean>();

  @Output() fileDropped = new EventEmitter<any>();

  // Dragover listener
  @HostListener("dragover", ["$event"]) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = true;
    this.fileOverChange.emit(this.fileOver);
  }

  // Dragleave listener
  @HostListener("dragleave", ["$event"])
  public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    this.fileOverChange.emit(this.fileOver);
  }

  // Drop listener
  @HostListener("drop", ["$event"])
  public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    this.fileOver = false;
    this.fileOverChange.emit(this.fileOver);
    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
