import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  standalone:false
})
export class PersonsComponent {
  @Input() personList: string[] = []; // Recebe a lista de pessoas do componente pai
}
