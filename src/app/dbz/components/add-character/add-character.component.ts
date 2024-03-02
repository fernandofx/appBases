import { Component, EventEmitter, Output } from "@angular/core";
import { Character } from "../../interfaces/character.interface";
import {v4 as uuid } from 'uuid';


@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']  
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    id: '',
    name:'',
    power:0
  }

  emmitCharacter(): void {
    console.log(this.character)
    if(this.character.name.length === 0) return;

    let p = this.onNewCharacter.emit({id: uuid(), name:this.character.name, power:this.character.power});
      this.character.id = ''
      this.character.name = ''
      this.character.power = 0

  }


  

}
