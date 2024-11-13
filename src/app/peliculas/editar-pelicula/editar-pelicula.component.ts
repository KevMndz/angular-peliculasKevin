import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculasCreacionDTO, PeliculasDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { ActorAutocompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-editar-pelicula',
  standalone: true,
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {

  @Input({transform: numberAttribute})
  id!: number;

  pelicula: PeliculasDTO = {id:1, titulo:'Spider-Man', trailer:'aquí va el trailer', fechaLanzamiento: new Date('2024-08-28'), poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832'};

  generosSeleccionados: SelectorMultipleDTO[] = [
    {llave:2, valor:'Anime'},
  ];

  generosNoSeleccionados: SelectorMultipleDTO[] = [
    {llave:1, valor:'Comedía'},
    {llave:3, valor:'Drama'},
  ];

  cinesSeleccionados: SelectorMultipleDTO[] = [
    {llave:2, valor:'Blue mall'},
  ];

  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    {llave:1, valor:'Agora mall'},
    {llave:3, valor:'Acropolis'},
  ];

  actoresSeleccionados: ActorAutocompleteDTO[] = [
    {id: 2, nombre: 'Tom Hanks', personaje: 'Forest Gump', foto: '//upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Tom_Hanks_at_the_Elvis_Premiere_2022.jpg/220px-Tom_Hanks_at_the_Elvis_Premiere_2022.jpg'}
  ];
  
  guardarCambios(pelicula: PeliculasCreacionDTO){
    console.log('editando pelicula', pelicula);
  }

}
