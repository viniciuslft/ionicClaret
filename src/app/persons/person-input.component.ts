import { Component, EventEmitter, Output } from "@angular/core";
import { Event } from "ionicons/dist/types/stencil-public-runtime";

@Component({
  selector: 'app-person-input',
  standalone:false,
  templateUrl:'./person-input.component.html',
  styleUrl:'./person-input.component.scss'
})
export class PersonInputComponent {
  @Output() personCreate = new EventEmitter<{ name: string, email: string, number: string}>();
  enteredPersonName = '';
  enteredEmail = '';
  enteredNumber = '';

  onCreatePerson() {
    console.log('Person created:', {
      name: this.enteredPersonName,
      email: this.enteredEmail,
      number: this.enteredNumber
    });
    this.personCreate.emit({
      name: this.enteredPersonName,
      email: this.enteredEmail,
      number: this.enteredNumber
    });
    // Limpar os campos após enviar
    this.enteredPersonName = '';
    this.enteredEmail = '';
    this.enteredNumber = '';
  }
}
