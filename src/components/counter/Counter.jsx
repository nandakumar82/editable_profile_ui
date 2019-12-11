import React, {Component} from "react"
import './Counter.css'
import PropTypes from 'prop-types'

class CounterButton extends Component {
    //Define the initial state in a constructor
    //state => counter 0
    constructor() {
        super();
        this.state = {
            counter: 0,
            secondCounter:100
        }
        this.increment = this.increment.bind(this);
    }

    render = () => {
        const style = {fontSize : "50px", padding: "15px 30px"};
        return (
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <span className="count" style={style}>{this.state.counter}</span>
            </div>
        );
    }

   /* render() {
        return (
            <div className="counter">
                <button onClick={this.increment}>+1</button>
                <span className="count">{this.state.counter}</span>
                <span className="count">{this.state.secondCounter}</span>

            </div>
        );
    }*/

    increment()  {
        // console.log('increment')
        //     this.state.counter++;
        this.setState({
            counter: this.state.counter + this.props.by,
            secondCounter: this.state.secondCounter + 1
        });
    }

}

CounterButton.defaultProps = {
    by : 1
}

CounterButton.propTypes = {
    by : PropTypes.number
}
export default CounterButton