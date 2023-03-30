import { Component } from "react";
import Pet from "./Pet";

export class ResultPets extends Component{
    render(){
        console.log(this.props)
        const pets = this.props.pet;
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