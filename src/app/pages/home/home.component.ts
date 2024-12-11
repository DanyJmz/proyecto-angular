import { Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  email:string = '';
  password:string = '';

  constructor(private router: Router) {}

  onLogin(){
    if(this.email === 'daniel.jimenez1439@alumnos.udg.mx' && this.password === '123'){
      this.router.navigate(['dashboard']);
    }else{
      alert('Usuario No Valido!');
    }
  }

}













