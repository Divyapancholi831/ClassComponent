import { Component } from "react";
import { ResultPets } from "./ResultPets";
import {ThemeContext,PetContext} from "./ThemeContext";

class SearchParams extends Component{
    state = {
        animal : "",
        breedList : [],
        breed : "",
        location : "",
    }
    

    requestPets = async () =>  {
        const updatePet = this.context;
        const res = await fetch(`http://pets-v2.dev-apis.com/pets?animal=${this.state.animal}&location=${this.state.location}&breed=${this.state.breed}`);
        const json = await res.json();
        console.log("json",json);
        updatePet[1]([...json.pets]);
        // this.setState({...this.state,pet : json.pets});
    }

    static contextType = PetContext;
    async componentDidMount(){    
    this.requestPets();
    }
    
    requestBreedList = async () => {
        
        const res = await fetch(`http://pets-v2.dev-apis.com/breeds?animal=${this.state.animal}`);
        const json = await res.json();
        console.log("json",json.breeds);
        this.setState({...this.state,breedList : json.breeds})
       
    }

    
    componentDidUpdate(previousProps,previousState){
        if(previousState.animal !== this.state.animal)
            this.requestBreedList();
       
        console.log("state",this.state);
        console.log("previousState",previousState);
        
    }
    
    

    render(){
        const ANIMALS = ["dog","bird","cat","rabbit","reptile"];
        // const BREEDS = useBreedList(this.state.animal);
        const COLORS = ["Darkblue","peru","Red","Green","Yellow","Orange"];
        // console.log(this.state.pet);
        
        return(
            <div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.requestPets();
                }}>

                    <label>
                        Animal:
                        <select value={this.state.animal} onChange={(e)=>this.setState({...this.state,animal : e.target.value})}>
                            {ANIMALS.map((animal,index)=><option key={index} value={animal}>{animal}</option>)}
                        </select>
                    </label>

                    <label>
                        Breed:
                        <select value={this.state.breed} onChange={(e)=>this.setState({...this.state,breed : e.target.value})}>
                            <option></option>
                            {this.state.breedList.map((breed,index)=><option key={index} value={breed}>{breed}</option>)}
                        </select>
                    </label>

                    <label>
                        Location:
                        <input value={this.state.location} onChange={(e)=>this.setState({...this.state,location : e.target.value})}/>
                    </label>

                    <label>
                        Theme:
                        <ThemeContext.Consumer>
                        {([theme,setTheme]) => 
                        <select value={theme} onChange={(e)=> setTheme(e.target.value)} >
                            {COLORS.map((color,index)=>
                            <option key={index} value={color}>{color}</option>
                            )}
                        </select>
                        }
                        </ThemeContext.Consumer>
                    </label>

                    <label>
                        <ThemeContext.Consumer>
                            {([theme])=> ( <button style={{backgroundColor : theme}}>Submit</button>)}
                        </ThemeContext.Consumer>
                    </label>
                </form>
        
                <ResultPets/>
               
            </div>
        )
    }
}

export default SearchParams;