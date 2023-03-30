import {Component} from 'react';
export class Result extends Component{
    constructor(props){
        super(props);
    }
   // const {} = props;
    render(){
        return(
            <div>
                <p>First Name : {this.props.info.firstName}</p>
                <p>Middle Name : {this.props.info.middleName}</p>
                <p>Last Name : {this.props.info.lastName}</p>
                <p>Date Of Birth : {this.props.info.dateofbirth}</p>
                <p>Gender : {this.props.info.gender}</p>
                <p>Education : {this.props.info.Education}</p>           
            </div>
        )
    }
}