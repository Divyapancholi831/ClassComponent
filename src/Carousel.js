import { Component } from "react";

export class Carousel extends Component{
    state = {
        active : 0,
    }
    static defaultProps = {
        images : ["https://pets-images.dev-apis.com/pets/none.jpg"]
    };
    
    handleIndexClick = (index) => {
        this.setState({
            active : index
        })
    } 

    render(){
        const {images} = this.props;
        const {active} = this.state;
        console.log("imgs",images);
        return(
            <div>
                <img src={images[active]} alt="animal" height="120" width="120"/>
                <div>
                    {images?.map((img,index) => 
                    <img
                    src = {img}
                    alt = "animal thumbnail"
                    onClick = {() => this.handleIndexClick(index)}
                    height = "100" width="100"
                    />)}
                </div>
            </div>
        )
    }
}
