import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculasCreacionDTO, PeliculasDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";

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

  guardarCambios(pelicula: PeliculasCreacionDTO){
    console.log('editando pelicula', pelicula);
  }

}
