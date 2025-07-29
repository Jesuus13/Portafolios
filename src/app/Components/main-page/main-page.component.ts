import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  imports: [],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {



  linkedInButton() {
    window.open('https://www.linkedin.com/in/jes%C3%BAs-sanchez-villarrubia-9b540336a/');
  }

  gitHubButton() {
    window.open('https://github.com/Jesuus13');
  }


  scrollToSection(sectionId: string) {
    const valor = document.getElementById(sectionId)
    if (valor) valor.scrollIntoView({ behavior: 'smooth'});
  }

}