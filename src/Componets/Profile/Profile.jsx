import React, { Component } from 'react'
import { AiFillClockCircle } from 'react-icons/ai';
import'./Profile.css';

export default class Profile extends Component {
    constructor(props){
        super (props)
        this.state={
          experience :"", name:"",domaine:'', count:0,interval:null
          
        }
        
        
    }
    handleChange =(event)=>{
      this.setState({experience :event.target.value})

    }
    hdChange =(event) =>{
this.setState({domaine : event.target.value})
    }
    hdName =(event)=>{
      this.setState({name : event.target.value})
    }
    componentDidMount (){
     this.setState({
       interval:setInterval(()=>{
         this.setState({
          count: this.state.count+1
         })
       },1000)
     })
    }
    componentWillUnmount(){
      clearInterval(this.state.interval)
    }
  render() {
    const{fullName,img,bio,profission, handleClick}=this.props
    return (
      <div>
      
       
        <h1><AiFillClockCircle/>{this.state.count}</h1>
       
       <section className='form'>
       <img  src ={img} alt="img"/>
        <input className='in' type="text" placeholder='enter your name' onChange={ this.hdName}/>
      
        <input className='in' type ="text" placeholder='enter domaine' onChange={this.hdChange}/> 
        <input className='in' type ="text" placeholder='enter your experience' onChange={this.handleChange} />
        </section>
        <button className='clik' onClick={handleClick}> click me</button>
        <h1>hello my name is {this.state.name}, my domain{this.state.domaine},My experience{this.state.experience}</h1>
        <h1>{`I am a ${profission}`}</h1>
         <h1>{fullName}</h1>
         <h1>{bio}</h1>
         
        
          

        
      </div>
    )
  }
}
