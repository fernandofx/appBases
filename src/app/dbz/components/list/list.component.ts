
import {  Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html', 
  styleUrls: ['./list.component.css'],
  
})
export class ListComponent { 

    @Input()
    listCharacter: Character[] = [{
      id: '',
      name: 'Chiri',
      power:1000                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    }]

    @Output()
    public onDeleteEmitter : EventEmitter<string> = new EventEmitter();

    onDeleteCharacterT(id?:string):void {
      console.log(id)
      this.onDeleteEmitter.emit(id)
    } 

}
