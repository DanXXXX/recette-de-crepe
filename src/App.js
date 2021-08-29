import React from 'react';
import Recipe from './data/Recipe';
import Header from './components/includes/Header';
import Ingredients from './components/includes/Ingredients';
import Steps from './components/includes/Steps';
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/styles/main.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
      
          <div className="recipes">
              <Header />
              <Ingredients/>
              <Steps/>
          </div>
      
    );
  }
}
 
export default App;