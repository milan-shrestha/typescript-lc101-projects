import { Payload } from './Payload';
import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';

export class Rocket {

    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number) {

        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass (items: Payload[]): number {

        let sumOfItems: number = 0;

        for (let i:number = 0; i < items.length; i++) {
            sumOfItems += items[i].massKg;
        }
        return sumOfItems;
    }

    currentMassKg(): number {

        let sumOfCargoItems: number = this.sumMass(this.cargoItems);
        let sumOfAstronauts: number = this.sumMass(this.astronauts);

        return sumOfCargoItems + sumOfAstronauts;
    }

    canAdd (item: Payload): boolean {

        let totalMassKg: Number = this.currentMassKg() + item.massKg;

        if (totalMassKg <= this.totalCapacityKg) {
            return true;
        }
    }

    addCargo (cargo: Cargo): boolean {

        if (this.canAdd(cargo)) {
            this.cargoItems.push(cargo);
            return true;
        } else {
            return false;
        }
    }

    addAstronaut (astronaut: Astronaut): boolean {
        
        if (this.canAdd(astronaut)) {
            this.astronauts.push(astronaut);
            return true;
        } else {
            return false;
        }
    }
} 