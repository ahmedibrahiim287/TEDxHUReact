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
 };


  render() {
  return (
  
<div className="container">
       <div className="row " id="contatti">
    <div className="container mt-5 " >
    
        <div class="row" style={{height:550}}>
         
          <div className="thanks-photo lefti">
            <h2 className="text-uppercase mt-3 font-weight-bold text-black">Contact Us</h2>
            <form action="">
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                  <label class="prod-form" for="name">Your Name</label>
                    <input type="text" className="form-control mt-2" placeholder="Name" 
                     required value={this.state.name}  onChange={this.onChangeName}/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                  <label class="prod-form" for="Email">Email address</label>
                    <input type="email" className="form-control mt-2" placeholder="Email" 
                    required value={this.state.email} onChange={this.onChangeEmail}/>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="text" className="form-control mt-2" placeholder="subject" 
                      required  value={this.state.subject}
                      onChange={this.onChangeSubject}/>
                  </div>
                </div>
                
                <div className="col-lg-6">
                  <div className="form-group">
                    <input type="phone" className="form-control mt-2" placeholder="phone number" required/>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="your massage" rows="3" required
                   value={this.state.message} onChange={this.onChangeMessage} ></textarea>
                  </div>
                </div>

                <div className="wrapper col-6">
                  <a href=""><button type="submit" className=" btn--border btn-read btn--animated"onClick={e => this.onSubmit(e)} >SUBMIT</button></a>
                </div>    

            </div>
            </form>
            </div> 
            
          <div className=" thanks-photo righti " >
            {/* <img  src="/img/clipart-phone-black-and-white-9.png" alt="contact-us" width="500" height="600"/> */}

            <div classNameName="wrapper row">
        <a onClick={alert("")}><button type="button" className=" btn--border btn-read btn--animated">volanter</button></a>
        <a onClick={alert("")}><button type="button" className=" btn--border btn-read btn--animated">speaker</button></a>
      </div>
     
              
            

            
            <div className="brief-container">
               <br/>
            <h2 className="text-uppercase mt-4 font-weight-bold">find us</h2>
            <div className="my-4">
                <a href=" https://www.facebook.com/TEDxHUni/"><i class="fab fa-facebook fa-3x"></i></a>
                <a href="https://www.linkedin.com/company/tedxhuni/"><i class="fab fa-linkedin fa-3x"></i></a>
                {/* <a href=""><i class="fab fa-instagram-square "></i></a>  */}
                <a href="https://www.youtube.com/user/TEDxTalks/videos"><i class="fab fa-youtube fa-3x"></i></a>
                <a href="https://www.instagram.com/TEDxHUni/"><i class="fab fa-instagram fa-3x"></i></a>
                </div>
            <i className="fas fa-phone mt-3"></i> <a href="tel:+">+201158567766</a><br/>
            <i className="fa fa-envelope mt-3"></i> <a href="Tedxhelwanuniversity@gmail.com">Tedxhelwanuniversity@gmail.com</a><br/>
          
            </div> </div> </div>
              <br/>
       <br/> <br/> <br/> <br/> <br/> <br/> <br/>
      </div> 
       </div></div>
  );
}
}
export default Contactus;
