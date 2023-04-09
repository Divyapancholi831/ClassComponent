import { Component } from "react";
import Pet from "./Pet";
import { PetContext } from "./ThemeContext";

export class ResultPets extends Component{
    static contextType = PetContext;
    render(){
        // const pets = this.props.pet;
        const pets = this.context[0];
        console.log("pets",pets);
        if(!pets.length){
            return <h1>No pets found...!</h1> 
        }
        return(
            <div>
                {pets.map((pet) => 
                  <Pet 
                  key = {pet.id}
                  name = {pet.name}
                  breed = {pet.breed}
                  animal = {pet.animal}
                  images = {pet.images}
                  id = {pet.id}
                  location = {`${pet.city},${pet.state}`}
                  />)}
            </div>
        )
    }
}