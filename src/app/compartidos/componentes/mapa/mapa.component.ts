import { Component } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';

(window as any).global = window;

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.css'
})
export class MapaComponent {

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
        maxZoom: 18,
        attribution: '...'
        })
    ],
    zoom: 14,
    center: latLng(25.67835046273144, -100.31411062695982)
  }

}
