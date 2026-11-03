import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Equipo } from '../../models/equipo';
import { EquiposService } from '../../services/equipos.service';

@Component({
  selector: 'app-equipo-component',
  standalone: false,
  styleUrl: './equipo-component.css',
  templateUrl: './equipo-component.html',
})
export class EquipoComponent implements OnInit {
  public equipos!: Array<Equipo>;

  constructor(
    private _cdr: ChangeDetectorRef,
    private _service: EquiposService,
  ) {}

  async ngOnInit(): Promise<void> {
    this.equipos = await this._service.getEquipos();
    this._cdr.detectChanges();
  }
}
