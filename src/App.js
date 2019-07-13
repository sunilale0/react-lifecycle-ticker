import React, { Component } from 'react';
import TickField from './tickField';
import './App.css';


class App extends Component{

  constructor(props){
    super(props)
    this.state={
      ticker: 0,
      tickState: 'Pause',
      setIntID: '',
      runSetInt: true
    }
  }


  tickReset=()=>{

    this.setState({
      ticker: 0
    })
  
  }

  componentDidMount() {

    this.state.setIntID = setInterval(()=>
      this.setState({
          ticker: this.state.ticker + 1
        }), 1000
    )
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.ticker % 3 === 0) return true;
  //   else return false;
  // }


  tickToggle = () => {
    console.log('[App.js] TickToggle');
    console.log('Previous state: ')
    console.log('runSetInt value : ', this.state.runSetInt);
    console.log('tickState vaule : ', this.state.tickState);
    if (!this.state.runSetInt) {
      this.setState({
        tickState: 'Pause',
        runSetInt: true,
        setIntID: setInterval(() =>
          this.setState({
              ticker: this.state.ticker +1
          }), 1000)
      })
    } else {
      clearInterval(this.state.setIntID);
      this.setState({
        runSetInt: false,
        tickState: 'Play'
      })
      }
    
    console.log('[App.js][tickToggle()] Successful TickToggle');
    console.log('New State'); // it seems that the new state is not generated till now
    console.log('runSetInt value : ', this.state.runSetInt);
    console.log('tickState vaule : ', this.state.tickState);
    console.log('--------------------------------------')
    console.log()
    
  }

  setTickStyle = () => {
    const style1 = {
      color:'red'
    }
    const style2 = {
      color:'green'
    }
     return (!this.state.runSetInt) ?  style1: style2;
  }


  render() {
    

    

    

    return (this.state.setIntID != '') ? <div className="App">
      <h1 >TICKER</h1>
      <TickField>
      <h1 style={this.setTickStyle()}>ticker: {this.state.ticker}</h1>
      <br />
      <button onClick={() => this.tickReset()}>Reset</button>
      <button onClick={() => this.tickToggle()}>{this.state.tickState}</button>
      {/* <button onClick>increase 3 times</button>  */}
      </TickField>
      </div> : null;

    
  }
  
}

export default App;



// shouldComponentUpdate(nextProps, nextState){
    
  //   // if(nextState.ticker % 3 === 0) return true;
  //   // else return false;

  //   // if (nextState.tickState === 'Play') {
  //   //   return true;
  //   // }

  //   if (nextState.tickState === 'Play') return false;
  //   else return true

  // }


       
  //   this.state.setInt = setInterval(
  //     this.setState({
  //       ticker: ++this.state.ticker
  //     })
  //   );

  //   if (this.state.increase) {
  //     console.log('setInt inside componentDidMount')
      
  //     await this.setInt(this.tickTicker, 1000);
  //     console.log(this.state.ticker);
  //  }
  //   console.log(this.state.ticker)
  //   // while (!this.state.increase) {
  //   //   clearInterval(setInt)
  //   //   break;
  //   // }
    

  

  // async setInt (adder, timer){return await setInterval(adder, timer)};
 
//   play = () => {
//     this.state.setIntID = setInterval(this.tickTicker, 1000);
//  }


    // let setSt = (this.state.tickState === 'Pause') ? 'Play' : 'Pause';
    
    //   this.setState({
    //     tickState: setSt,
    //     setIntID: ''
    //   })