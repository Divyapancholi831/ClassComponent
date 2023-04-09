import react,{Component} from 'react';
import { Result } from './Result';
import {ThemeContext} from './ThemeContext';
class Register extends Component{
    //EDUCATIONS = ['Pre school','High school','Diploma','Bachelor Degree','Master Degree','Phd'];
    state = {
        firstName : " ",
        middleName : " ",
        lastName : " ",
        dateofbirth : ' ',
        gender : " ",
        Education : " ",
        show : false,
    }

    changefirstName = (e) => {
        this.setState({
            ...this.state,
            firstName : e.target.value,
        });
    };

    changemiddleName = (e) => {
        this.setState(
            {
                ...this.state,
                middleName : e.target.value,
            }
        );
    };

    changelastName = (e) => {
        this.setState({
            ...this.state,
            lastName : e.target.value,
        })

    }


    changeGender = (e) => {
        this.setState(
            {
                ...this.setState,
                gender : e.target.value,
            }
        )

    }

    render(){  
        const EDUCATIONS = ['Pre school','High school','Diploma','Bachelors Degree','Masters Degree','Phd'];
        //const GENDERS = ['Male','Female','Transgender','N/A'];
        return (
            <div>
                <label>
                    First Name : 
                    <input value={this.state.firstName} onChange={this.changefirstName}/>
                </label>
                <br/>

                <label>
                    Middle Name :
                    <input value={this.state.middleName} onChange={this.changemiddleName}/>
                </label>
                <br/>

                <label>
                    Last Name :
                    <input value={this.state.lastName} onChange={this.changelastName}/>
                </label>
                <br/>

                <label>
                    Date Of Birth :
                    <input type="date" value={this.state.dateofbirth} onChange={(e) => this.setState({dateofbirth : e.target.value})}/>
                </label>
                <br/>

                <label>
                    Gender :
                    <input type="radio" name="gender" value="Male" onChange={this.changeGender}/>Male
                    <input type="radio" name="gender" value="Female" onChange={this.changeGender}/>Female
                    <input type="radio" name="gender" value="Transgender" onChange={this.changeGender}/>Transgender
                    <input type="radio" name="gender" value="N/A" onChange={this.changeGender}/>N/A 

                    {/* {GENDERS.map((gander)=>
                        <input type="radio" value={gander}/>,{gander}
                    )} */}
                </label>
                <br/>

                <label>
                    Education :
                    <select value={this.state.Education} onChange={(e) => this.setState({Education : e.target.value})}>
                        {EDUCATIONS.map((Education,index)=>
                        <option key={index} value={Education}>{Education}</option>
                        )}
                    </select>
                </label>
                <br/>
                <br/>

                <label>
                    <ThemeContext.Consumer>
                        {([theme]) => <button style={{backgroundColor : theme}} onClick={()=>this.setState({show : !this.state.show})}>Submit</button>}
                    </ThemeContext.Consumer>
                </label>
                <br/>
                <br/>

               

        {this.state.show ? (
             <Result info={this.state}/>
                // <div>
                // <p>First Name : {this.state.firstName}</p>
                // <p>Middle Name : {this.state.middleName}</p>
                // <p>Last Name : {this.state.lastName}</p>
                // <p>Date Of Birth : {this.state.dateofbirth}</p>
                // <p>Gender : {this.state.gender}</p>
                // <p>Education : {this.state.Education}</p>           
                // </div>   
        )         
         : null }

            </div>
        )
    }
}

export default Register 