import { Component } from '@angular/core';
import { jsPDF } from 'jspdf';
import { autoTable } from 'jspdf-autotable';

@Component({
  selector: 'app-informes-pdf-component',
  standalone: false,
  styleUrl: './informes-pdf-component.css',
  templateUrl: './informes-pdf-component.html',
})
export class InformesPdfComponent {
  generarDocumentos(): void {
    let document: jsPDF = new jsPDF();
    document.setFontSize(20);
    document.text('Informe de Ventas', 20, 20);
    document.setFontSize(12);
    document.text('Este es un informe de ventas generado con jsPDF.', 20, 30);

    const headers = ['Producto', 'Cantidad', 'Precio'];
    const data = [
      ['Producto A', '10', '$100'],
      ['Producto B', '5', '$50'],
      ['Producto C', '8', '$80'],
    ];

    autoTable(document, {
      head: [headers],
      body: data,
      startY: 40,
    });

    document.save('informe_ventas.pdf');
  }
}
