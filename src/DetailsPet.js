import { Component } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from "./Carousel";
import ThemeContext from "./ThemeContext";

class DetailsPet extends Component{
      state = {
        pet : {},
    }
    requestpetId = async () => {
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`);
        const json = await res.json();
        console.log("json",json);
        this.setState({...this.state,pet : json.pets[0]})
    }

    componentDidMount(){
        this.requestpetId();
    }

    render(){
    const {name,animal,breed,city,state,images,id,description} = this.state.pet;
    console.log(this.props);
    console.log(this.state.pet);
    console.log("pet img",images);
       return(
        <div>
            <div>
                <Carousel images = {images}/>
            </div>
            <h1>{name}</h1>
            <h2>
                {animal} - {breed} - {city} - {state}
            </h2>
            <ThemeContext.Consumer>
                {([theme])=> (<button style={{backgroundColor : theme}}>Adopt {name}</button>)} 
            </ThemeContext.Consumer>
            
            <p>{description}</p>
        </div>
       );

        
    }
}
const  Detail = () => {
    const params = useParams();

    return(
        <DetailsPet params = {params}/>
    );
}

export default Detail;