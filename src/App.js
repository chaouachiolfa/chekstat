
import './App.css';

import { BiShow } from 'react-icons/bi';
import React, { Component } from 'react'

import Profile from './Componets/Profile/Profile';


export default class App extends Component {
  constructor(){
    super()
    this.state={
      show : true
    }
  }
  hdChow =()=>{
    this.setState({
      show : ! this.state.show
     
    })
  }
  handleClick = ()=>{
    alert('hello i am olfa');
  };
  render()  {
    let img ="https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Eohmymag.2Ecom.2Fs3.2Ffromm.2Fbeaute.2Fdefault_2021-07-08_3fffd612-8fb5-4e01-a15a-9de8c3a2dbfa.2Ejpeg/480x270/quality/80/cette-petite-fille-a-ete-elue-plus-belle-petite-fille-du-monde.jpg";
   
    return (
      <div>
       <button onClick={ this.hdChow}><BiShow/>show</button> 
       {
         this.state.show ? ( <Profile  
          fullName="olfa"
          bio ="etudiante"
          profission ="devloper"
          img ={img}
          handleClick={this.handleClick}
           />) : null
           
       }
        
      
  
      </div>
    )
  }
}

