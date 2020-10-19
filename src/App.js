import React from 'react';

// import './User.css';
import Avatar1 from './Images/person1.jpeg';
import Avatar2 from './Images/person2.jpeg';
import Avatar3 from './Images/person3.jpeg';
import User from './components/User.js';



class App extends React.Component {
    // FUNCTIONS NEED TO GO HERE AT THE TOP - INSIDE THE CLASS


    //  STATE GOES AT THE TOP TOO
      state = {     // THIS IS LIKE SETTING UP WHAT THE ORIGINAL LOOK IS...
        myText:"My Original Text",   // THIS IS WHAT THE PAGE WILL ORIGINALLY SHOW
        likes: 0,
        persons: [
            {name: "John", city: "London"},
            {name: "Peter", city: "Manchester"},
            {name: "Adam", city: "Bolton"}
         ]
      }


    changeText = () => {
        this.setState({                 // RE-SETTING THE STATE
            myText: "My Updated Text"   // THIS IS WHAT WILL SHOW ONCE BUTTON IS CLICKED
        })
    }

    increaseLikes = () => {
        this.setState({
            likes: this.state.likes+1   //  WE INCREASE THE LIKES BY 1
        })
    }
     
    //////////////////////////////////////////////////
    changeName = () => {
      const updatedPersons = [ ...this.state.persons ]
        // SPREAD OPERATOR - MAKES A COPY OF PERSONS

        updatedPersons[0].name = "Oliver";

        this.setState({
          persons: updatedPersons
        })
    }
    ////////////////////////////////////////////////////////

    
  render() {
    return (
        <>
            <h1>{this.state.myText}</h1>   
            <button onClick={this.changeText}>Click Me!</button>
            <h1>Number of Likes: {this.state.likes}</h1>
            <button onClick={this.increaseLikes} >Like!</button>



           <User 
              userImage={Avatar1}
              name = {this.state.persons[0].name} 
              city = {this.state.persons[0].city}/>
              <button onClick={this.changeName}>Change Name</button>


           <User 
              userImage={Avatar2}
              name = {this.state.persons[1].name} 
              city = {this.state.persons[1].city}/>

           <User 
              userImage={Avatar3}
              name = {this.state.persons[2].name} 
              city = {this.state.persons[2].city}/>

        </>
    )
  }
}

export default App;

