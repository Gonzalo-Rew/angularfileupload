import { Component, ElementRef, ViewChild, ChangeDetectorRef } from '@angular/core';
import { FilesService } from '../../services/files.service';
import { File } from '../../models/file';

@Component({
  selector: 'app-file-upliad-component',
  standalone: false,
  styleUrl: './file-upliad-component.css',
  templateUrl: './file-upliad-component.html',
})
export class FileUpliadComponent {
  mensaje!: string;
  urlFile!: string;
  @ViewChild('cajafile') fileInput!: ElementRef;

  constructor(private _filesService: FilesService,
    private _cdr: ChangeDetectorRef
  ) {}

  uploadFile(): void {
    let file = this.fileInput.nativeElement.files[0];
    let miPath = this.fileInput.nativeElement.value.split('\\');
    let filename = miPath[2];
    const reader = new FileReader();

    reader.onload = async () => {
      let buffer: ArrayBuffer;
      buffer = reader.result as ArrayBuffer;
      let base64: string = btoa( new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));
      let fileToUpload = new File(filename, base64);
      this._filesService.postFile(fileToUpload).then((response) => {
        this.mensaje = response.mensaje;
        this.urlFile = response.urlFile;
        this._cdr.detectChanges();
      });
    };
    reader.readAsArrayBuffer(file);
  }
}
