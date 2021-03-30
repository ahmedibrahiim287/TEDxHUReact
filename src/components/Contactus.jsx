import React, {Component} from "react";
import axios from 'axios';

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
    <div class="container">
       <br/>
       <br/>
       <br/> <br/> <br/> <br/> <br/> <br/> <br/>
       <br/>
       <div class="container mt-5" id="sdc">
    <form method="Post" action="">
        <div class="form-group">
            <label class="prod-form" for="name">Your Name</label>
            <input name="userName" type="text" class="form-control" id="name" placeholder="Enter your Name"
                required value={this.state.name}
                onChange={this.onChangeName}/>
        </div>
        
        <div class="form-group">
            <label class="prod-form" for="Email">Email address</label>
            <input name="Email" type="email" class="form-control" id="Email" placeholder="Enter your email"
                required value={this.state.email}
                onChange={this.onChangeEmail}/>
        </div>
        <div class="form-group">
            <label class="prod-form" for="date">Date</label>
            <input type="date" class="form-control" id="date" name="Date1" placeholder="YYYY-MM-DD" required
                pattern="(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])/(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])/(?:30))|(?:(?:0[13578]|1[02])-31))"
                title="Enter a date in this format YYYY/MM/DD" />
        </div>
        <div class="form-group">
            <label class="prod-form" for="text">Subject</label>
            <input name="Num" type="text" class="form-control" id="phonenum" placeholder="Enter the subject "
                required  value={this.state.subject}
                onChange={this.onChangeSubject}/>
        </div>
         <div class="form-group">
        <label  class="prod-form" for="text">Message Content   </label>
         <input  type="text" name="message"  class="form-control" placeholder=" Type your Message here "
           value={this.state.message}
           onChange={this.onChangeMessage} />
         </div>
<br/>
         <div class="row justify-content-center eee p-4">
            <a href="" class="neewwww"> 
            <button type="submit" class="btn btn-outline-success order-btt"  onClick={e => this.onSubmit(e)} >Submit</button>
            </a>
        </div>
         <div class="brief-container"></div>
   </form>
   
</div>
<div class="sections">
  <img  alt=" contact us" src="img\clipart-phone-black-and-white-9.png" style={{width:500,height:500,float:'right',padding:10,margintop:30,alignContent:'right'}}/>
  </div>
<br/>
       <br/> <br/> <br/> <br/> <br/> <br/> <br/>
       
</div>
  );
}
}
export default Contactus;
