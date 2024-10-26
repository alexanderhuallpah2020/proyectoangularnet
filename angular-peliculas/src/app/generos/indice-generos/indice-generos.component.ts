import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { GenerosService } from '../generos.service';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-indice-generos',
  standalone: true,
  imports: [RouterLink, MatButtonModule],
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css'
})
export class IndiceGenerosComponent {

  generosService = inject(GenerosService)

  constructor(){
    this.generosService.obtenerTodos().subscribe(generos => {
      console.log(generos);
    })
    // const generos = this.generosService.obtenerTodos();
    // console.log(generos);
  }

}
