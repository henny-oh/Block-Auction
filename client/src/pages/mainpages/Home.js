import React from 'react';
import '../../App.css';
import AdSlider from '../../components/AdSlider';
import Category from '../../components/categories/Category';
import PlusButton from '../../components/PlusButton';
import Top5 from '../../components/Top5';

class Home extends React.Component {
    render(){
      return (
        <div className="App">
          <header className="App-header" />
          <body>
            <AdSlider/>
            <Top5/>
            <Category/>
            <PlusButton/>
          </body>
        </div>
      );
    }
  }
  
  
  export default Home;
  