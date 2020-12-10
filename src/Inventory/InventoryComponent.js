import React, {Component} from 'react';
import './InventoryComponent.css';

class InventoryComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        startingCount: this.props.startingCount,
        Reset: this.props.Reset,
        Props: ''
    }

    this.addNumber = this.addNumber.bind(this);
    this.minusNumber = this.minusNumber.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleChange = this.handleChange.bind(this);
    }

     addNumber() {
        this.setState({
            startingCount: this.state.startingCount + 1
        });
    }

     minusNumber() {
         this.setState({
             startingCount: this.state.startingCount - 1
         });
     }

     handleReset() {
        this.setState({
         startingCount: this.state.Reset
        });
     }

     handleChange() {
         this.setState({
            Props: this.state.Props + this.state.startingCount
         });
     }

     componentDidMount() {
         console.log("clicked!", this.state.startingCount)
     }
     componentDidUpdate() {
         console.log("updated ", this.state.Reset)
     }

    render() {
        return(
            <div className = "container">
                <h1> Item:<br/> {this.props.item}</h1>
                <button onClick = {() => this.addNumber()}> + </button>
                <button onClick = {() => this.minusNumber()}> - </button>
                <button onClick = {() => this.handleReset()}> Reset </button>
                <h3>startingCount: {this.state.startingCount} </h3>
                <lable>Props: <input type="number" onChange = {() => this.state.Props}></input></lable>
            </div>
        );
    }
}

export default InventoryComponent;