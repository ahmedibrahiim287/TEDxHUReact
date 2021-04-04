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
 };


  render() {
  return (
 
<div className="container">
<br/> <br/> <br/> <br/> <br/> <br/> <br/>
<div class="contact-shape">
<div class="top-border left"></div>
<div class="top-border semi"></div>
<h1>CONTACT US</h1>
<p>We'd love to hear from you so please dont hesitate to contact us ! </p>
{/*  eslint-disable-next-line  */}
  <a>CONTACT US</a>
</div>
<div >  
<form id="contact" action="" method="post">
  <h3>Contact <span class="color-con">Us</span></h3>
    <img className="img-responsive" src="/img/clipart-phone-black-and-white-9.png" alt="phone call" title="phone call"/>
    <div>
  <fieldset>
    <input placeholder="Your name" value={this.state.name}  onChange={this.onChangeName} type="text" tabindex="1" required autoFocus/>
  </fieldset>
  <fieldset>
    <input placeholder="Your Email Address" value={this.state.email} onChange={this.onChangeEmail} type="email" tabindex="2" required/>
  </fieldset>
  <fieldset>
    <input placeholder="Your Phone Number (optional)" type="tel" tabindex="3" required/>
  </fieldset>
  <fieldset>
    <input placeholder="Your Web Site (optional)" value={this.state.subject}   onChange={this.onChangeSubject} type="url" tabindex="4" required/>
  </fieldset>
  <fieldset>
    <textarea placeholder="Type your message here...." value={this.state.message} onChange={this.onChangeMessage} tabindex="5" required></textarea>
  </fieldset>
  <fieldset>
  <div className="wrapper col-6">
    {/*  eslint-disable-next-line  */}
   <a ><button type="submit" className=" btn--border btn-read btn--animated"onClick={e => this.onSubmit(e)} >SUBMIT</button></a>
                </div>    

  </fieldset>
  </div>
</form>
</div>
</div>
  );
}
}
export default Contactus;
