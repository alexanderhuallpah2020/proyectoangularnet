import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { actorAutoCompleteDTO } from '../actores';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-autocomplete-actores',
  standalone: true,
  imports: [ MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, FormsModule,MatTableModule, MatInputModule, DragDropModule],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent {
  control = new FormControl();
  actores: actorAutoCompleteDTO[] = [
  {
    id: 1, nombre: 'Tom Holland', personaje: '', foto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxjGyv75mIabHjZS8sAsiOQn0YGeaVkIZyM1BR6l63VH9e7C_W'
  },
  {
    id: 2, nombre: 'Tom Hanks', personaje: '', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmrFzNFM4Yg3kKE7GLkOB3Lih00-Qa8x7RB4awO6QY71fe-LAq'
  },
  {
    id: 3, nombre: 'Samuel L Jackson', personaje: '', foto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQMYfcBLlhgizPF017p6cbAnAk6uDITSLkIqWg6IBt1qWg2I8dZ'
  }]


  @Input({required: true})
  actoresSeleccionados: actorAutoCompleteDTO[] = [];

  columnasAMostrar = ['imagen','nombre','personaje','acciones']

  @ViewChild(MatTable) table!: MatTable<actorAutoCompleteDTO>;

  actorSeleccionado(event: MatAutocompleteSelectedEvent) {
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');

    if (this.table != undefined)
      this.table.renderRows();
  }

  finalizarArrastre(event: CdkDragDrop<any[]>) {
    const indicePrevio = this.actoresSeleccionados.findIndex(actor => actor === event.item.data);
    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
    this.table.renderRows();
  }


  eliminar(actor: actorAutoCompleteDTO) {
    const indice = this.actoresSeleccionados.findIndex((a: actorAutoCompleteDTO) => a.id === actor.id);
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }

}
