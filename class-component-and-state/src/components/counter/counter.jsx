import {Component} from 'react'
import './index.css'
class Counter extends Component{
   state = {count : 0};
   onIncreament = () => {
     this.setState( prevCount => ({count : prevCount.count + 1}))
    
   }

   onDecreament = () => {
    this.setState( prevCount => ({count : prevCount.count - 1}))
   }

    render(){
       const {count} = this.state;

        return(
            <div className="counter-container">
                <h1 className="heading">Counter</h1>
                <p className="counter-value">{count}</p>
                <div className="button-container">
                    <button onClick={this.onIncreament} className="count-button">Increase</button>
                    <button onClick={this.onDecreament}  className="count-button">Decrease</button>
                </div>
            </div>
        )
    }
}


export default Counter;