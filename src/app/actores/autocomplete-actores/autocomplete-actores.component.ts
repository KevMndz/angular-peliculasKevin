import { Component, Input, ViewChild } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable, MatTableModule } from '@angular/material/table';
import { ActorAutocompleteDTO } from '../actores';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-autocomplete-actores',
  standalone: true,
  imports: [MatAutocompleteModule, ReactiveFormsModule, MatFormFieldModule, MatIconModule, FormsModule, MatTableModule, MatInputModule,
    DragDropModule],
  templateUrl: './autocomplete-actores.component.html',
  styleUrl: './autocomplete-actores.component.css'
})
export class AutocompleteActoresComponent {

control = new FormControl();

actores: ActorAutocompleteDTO[] = [{
  id: 1, nombre: 'Tom Holland', personaje: '', foto: '//upload.wikimedia.org/wikipedia/commons/thumb/3/36/Tom_Holland_at_KCA_2022.jpg/220px-Tom_Holland_at_KCA_2022.jpg'
},
{
  id: 2, nombre: 'Tom Hanks', personaje: '', foto: '//upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Tom_Hanks_at_the_Elvis_Premiere_2022.jpg/220px-Tom_Hanks_at_the_Elvis_Premiere_2022.jpg'
},
{
  id: 3, nombre: 'Samuel L. Jackson', personaje: '', foto: '//upload.wikimedia.org/wikipedia/commons/thumb/2/29/SamuelLJackson.jpg/250px-SamuelLJackson.jpg'
}]

@Input({required: true})
actoresSeleccionados:ActorAutocompleteDTO[] = [];

columnasAMostrar = ['imagen','nombre','personaje','acciones']

@ViewChild(MatTable) table!: MatTable<ActorAutocompleteDTO>

actorSeleccionado(event:MatAutocompleteSelectedEvent){

  const indice = this.actoresSeleccionados.findIndex((a:ActorAutocompleteDTO) => a.id === event.option.value.id);
  this.control.patchValue('');
  
  if(indice >= 0){
    return;
  }

  this.actoresSeleccionados.push(event.option.value);

  if(this.table != undefined){
    this.table.renderRows();
  }
}

finalizarArrastre(event: CdkDragDrop<any[]>){
  const indicePrevio = this.actoresSeleccionados.findIndex(actor => actor === event.item.data);
  moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);
  this.table.renderRows();
}

eliminar(actor: ActorAutocompleteDTO){
  const indice = this.actoresSeleccionados.findIndex((a:ActorAutocompleteDTO) => a.id === actor.id);
  this.actoresSeleccionados.splice(indice,1);
  this.table.renderRows();
}

}
