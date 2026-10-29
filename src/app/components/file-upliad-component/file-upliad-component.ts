import { Component } from '@angular/core';
import { FilesService } from '../../services/files.service';
import { File } from '../../models/file';

@Component({
  selector: 'app-file-upliad-component',
  standalone: false,
  styleUrl: './file-upliad-component.css',
  templateUrl: './file-upliad-component.html',
})
export class FileUpliadComponent {
  constructor(private _filesService: FilesService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = async () => {
      const fileContent = (reader.result as string).split(',')[1];
      const fileToUpload = new File(file.name, fileContent);
      try {
        const response = await this._filesService.postFile(fileToUpload);
        console.log('File uploaded successfully:', response);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    };
    reader.readAsDataURL(file);
  }
}
