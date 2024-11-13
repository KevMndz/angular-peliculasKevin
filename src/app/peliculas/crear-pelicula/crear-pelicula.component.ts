import { Component } from '@angular/core';
import { PeliculasCreacionDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { ActorAutocompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-crear-pelicula',
  standalone: true,
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-pelicula.component.html',
  styleUrl: './crear-pelicula.component.css'
})
export class CrearPeliculaComponent {

  generosSeleccionados: SelectorMultipleDTO[] = [];

  generosNoSeleccionados: SelectorMultipleDTO[] = [
    {llave:1, valor:'Comedía'},
    {llave:2, valor:'Anime'},
    {llave:3, valor:'Drama'},
  ];

  cinesSeleccionados: SelectorMultipleDTO[] = [];

  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    {llave:1, valor:'Agora mall'},
    {llave:2, valor:'Blue mall'},
    {llave:3, valor:'Acropolis'},
  ];

  actoresSeleccionados: ActorAutocompleteDTO[] = [];

  guardarCambios(pelicula: PeliculasCreacionDTO){
    console.log('creando película', pelicula);
  }
}
