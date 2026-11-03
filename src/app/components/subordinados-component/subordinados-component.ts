import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Empleado } from '../../models/empleado';
import { EmpleadosService } from '../../services/empleados.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-subordinados-component',
  standalone: false,
  styleUrl: './subordinados-component.css',
  templateUrl: './subordinados-component.html',
})
export class SubordinadosComponent implements OnInit {
  public subordinados: Empleado[] = [];

  constructor(
    private _empleadosService: EmpleadosService,
    private _authService: AuthService,
    private _cdr: ChangeDetectorRef,
  ) {}
  ngOnInit(): void {
    this._empleadosService.getSubordinados().then((subordinados) => {
      this.subordinados = subordinados;
      this._cdr.detectChanges();
    });
  }
}
