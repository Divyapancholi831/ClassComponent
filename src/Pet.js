import { Component } from "react";
import {Link} from "react-router-dom";

class Pet extends Component{
    render(){
        const {name,animal,breed,location,images,id} = this.props;
        return(
           <Link to ={`/detail/${id}`}>
            <div><img src={images[0]} alt={name} height="100" width="100"/></div>
            <div>
            <h1>{name}</h1>
            <h2> {animal} - {breed} - {location}</h2>
            </div>
            </Link>
        )

    }
}
export default Pet;