import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { v4 as uuid} from 'uuid';

@Injectable({
    providedIn: "root"
})

export class DbzService {

    listCharacter: Character[] = [
        {id:uuid(), name: 'Hoku', power:3000},
        {id:uuid(), name: 'Vegeta', power: 4500},
        {id:uuid(), name: 'Peraltes', power: 2500}
    ]
    

    addCharacter(character: Character):void{
        this.listCharacter.push(character);
    }

    onDeleteCharacter(id: string):void{

        this.listCharacter = this.listCharacter.filter(val => val.id !== id)

    }

}