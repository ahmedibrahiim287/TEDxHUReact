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
      <div class="form-group">
    <form className="forrm">
     
         <div class="form-inline">
            <h2 class="ted-color"> Contact Us </h2>
         

             <label> Name  </label>
           {/* <i class=" fas fa-user "></i> */}
            <input type="text" name="name" placeholder="Your name"
            value={this.state.name}
            onChange={this.onChangeName}/>
         
         
         
            {/* <i  class="far fa-envelope" ></i>  */}
         <label> E-mail  </label> 
         <input type="email" name="email" placeholder=" email@server.com"
           value={this.state.email}
           onChange={this.onChangeEmail} />
         
        
          
         {/* <i  class="fas fa-align-left" ></i> */}
         <label >Subject  </label> 
         <input type="text" name="subject" placeholder="Message Subject"
           value={this.state.subject}
           onChange={this.onChangeSubject} />
         
         
         
         <label>Message Content   </label>
         <input type="text" name="message" placeholder=" Type your Message here "
           value={this.state.message}
           onChange={this.onChangeMessage} />
         
         
         <div>
            <button class=" " type="submit" onClick={e => this.onSubmit(e)}>SEND!</button>
         </div>
         </div>
         <div class="brief-container"></div>
   </form>
   <div class="sections">
  <img  alt=" contact us" src="img\clipart-phone-black-and-white-9.png" style={{width:500,height:500,float:'right',padding:10,margintop:30,alignContent:'right'}}/>
  </div>
</div>
<br/>
       <br/> <br/> <br/> <br/> <br/> <br/> <br/>
    </div>
  );
}
}
export default Contactus;
