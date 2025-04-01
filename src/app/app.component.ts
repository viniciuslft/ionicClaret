import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false
})
export class AppComponent {
  // Lista agora armazenará objetos com nome, email e telefone
  persons: { name: string}[] = [
    { name: 'Max'},
  ];

  // Método atualizado para lidar com nome, email e telefone
  onPersonCreate(person: { name: string}) {
    if (person.name.trim() !== '') {
      this.persons.push(person); // Adiciona o objeto com nome, email e telefone à lista
      console.log('Updated persons list:', this.persons); // Exibe a lista atualizada no console
    }
  }
}
