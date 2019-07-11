import React, {Component} from 'react';


class App extends Component{

  constructor(props){
    super(props)
    this.state={
      ticker: 0,
      increase: true
    }
  }



  setTicker =() => {
    let newTicker = this.state.ticker;
    return newTicker + 1;
  }

 
  
  componentDidMount(){
    console.log('[App.js] componenetDidMount')
    let counter = this.state.ticker; 
    (this.state.increase)? (setInterval(()=>(
        this.setState({
          ticker: this.state.ticker + 1
        })
      ), 1000)): console.log('this is another thing');
    
    console.log(counter) ; 
  }

  shouldComponentUpdate(nextProps, nextState){
    
    if(nextState.ticker % 3 === 0) return true;
    else return false;
  }

  tickReset(){

    this.setState({
      ticker: 0
    })
  
  }

  tickPause(){
    
   this.setState({
     increase: !this.state.increase 
   })

  }


  render(){
      return <div className="App">
        ticker: {this.state.ticker}
        <br/>
        <button onClick={()=>this.tickReset()}>Reset</button>
        <button onClick={()=>this.tickPause()}>Pause</button>
        {/* <button onClick>increase 3 times</button>  */}

        </div>
    
  }
  
}

export default App;
