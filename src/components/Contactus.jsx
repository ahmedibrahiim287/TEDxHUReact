import React, {Component} from "react";
import axios from 'axios';
import { Fragment } from "react";

export class Contactus extends Component {

  constructor(props){
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeSubject = this.onChangeSubject.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {name:'', email:'', subject:'', message:''}
 }

 onChangeName(e){
    this.setState({name : e.target.value});
 }
 onChangeEmail(e){
    this.setState({email : e.target.value});
 }
 onChangeSubject(e){
    this.setState({subject : e.target.value});
 }
 onChangeMessage(e){
    this.setState({message : e.target.value});
 }
 onSubmit(e){
    e.preventDefault();

    const obj = {
       name: this.state.name,
       email: this.state.email,
       subject: this.state.subject,
       message: this.state.message
    };

    axios.post('http://localhost/TEDX/Insert.php', obj)
    .then(res => console.log(res.data));

   /* console.log(obj) */

   this.setState({name:'', email:'', subject:'', message:''})

 }

  render() {
  return (
   <Fragment>



   </Fragment>
   
  );
}
}
export default Contactus;
