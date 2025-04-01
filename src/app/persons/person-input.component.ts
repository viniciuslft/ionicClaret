import { Component, EventEmitter, Output } from "@angular/core";
import { Event } from "ionicons/dist/types/stencil-public-runtime";

@Component({
  selector: 'app-person-input',
  standalone:false,
  templateUrl:'./person-input.component.html',
  styleUrl:'./person-input.component.scss'
})
export class PersonInputComponent {
  @Output() personCreate = new EventEmitter<{ name: string}>();
  enteredPersonName = '';

  onCreatePerson() {
    console.log('Person created:', {
      name: this.enteredPersonName
    });
    this.personCreate.emit({
      name: this.enteredPersonName
    });
    // Limpar os campos após enviar
    this.enteredPersonName = '';
  }
}
