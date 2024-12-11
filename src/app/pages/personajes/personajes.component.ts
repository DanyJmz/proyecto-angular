import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {

}
