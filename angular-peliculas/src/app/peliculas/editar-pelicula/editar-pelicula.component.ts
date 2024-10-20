import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { actorAutoCompleteDTO } from '../../actores/actores';

@Component({
  selector: 'app-editar-pelicula',
  standalone: true,
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  @Input({transform: numberAttribute})
  id!: number

  pelicula: PeliculaDTO = { id: 1, titulo: 'Spider-Man', trailer: 'ABC', fechaLanzamiento: new Date('2018-07-25'), poster: 'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832' };

  generosSeleccionados: SelectorMultipleDTO[] = [
    { llave: 2, valor: 'Acción' }
  ];

  generosNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Drama' },
    { llave: 3, valor: 'Comedia' }
  ];


  cinesSeleccionados: SelectorMultipleDTO[] = [
    { llave: 2, valor: 'Blue Mall' }
  ];

  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Agora Mall' },
    { llave: 3, valor: 'Acropolis' }
  ];

  actoresSeleccionados: actorAutoCompleteDTO[] = [
    {id: 1, nombre: 'Tom Holland', personaje: 'Forrest gump', foto: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQxjGyv75mIabHjZS8sAsiOQn0YGeaVkIZyM1BR6l63VH9e7C_W'}
  ]



  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log('editando película', pelicula);
  }


}
