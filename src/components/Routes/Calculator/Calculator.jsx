import React, { Component } from "react";
import "./Calculator.css";
export class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            previous: ""
        };
    }
    SubmitHandler = e => {
        console.log(eval(this.state.input));
        let value = eval(this.state.input);
        this.setState({
            input: value
        });
        e.preventDefault();
    };
    CalcHandler = event => {
        this.setState({
            input: event.target.value
        });
    };
    ClickHandler = event => {
        let prev = this.state.input;
        this.setState({
            previous: prev,
            input: prev + event.target.value
        });
    };
    ClearHandler = event => {
        this.setState({
            input: ""
        });
    };
    delHandler = event => {
        this.setState({ input: this.state.previous });
    };
    render() {
        return (
            <React.Fragment>
                Calculator
                <div className="calc">
                    <form onSubmit={this.SubmitHandler}>
                        <input type="text" value={this.state.input} onChange={this.CalcHandler} />
                        <br />
                        <input type="button" value="1" onClick={this.ClickHandler} />
                        <input type="button" value="2" onClick={this.ClickHandler} />
                        <input type="button" value="3" onClick={this.ClickHandler} />
                        <input type="button" value="+" onClick={this.ClickHandler} />
                        <br />
                        <input type="button" value="4" onClick={this.ClickHandler} />
                        <input type="button" value="5" onClick={this.ClickHandler} />
                        <input type="button" value="6" onClick={this.ClickHandler} />
                        <input type="button" value="-" onClick={this.ClickHandler} />
                        <br />
                        <input type="button" value="7" onClick={this.ClickHandler} />
                        <input type="button" value="8" onClick={this.ClickHandler} />
                        <input type="button" value="9" onClick={this.ClickHandler} />
                        <input type="button" value="*" onClick={this.ClickHandler} />
                        <br />
                        <input type="button" value="/" onClick={this.ClickHandler} />
                        <input type="button" value="0" onClick={this.ClickHandler} />
                        <input type="button" value="." onClick={this.ClickHandler} />
                        <button type="button" onClick={this.delHandler}>
                            {"<--"}
                        </button>
                        <br />
                        <button type="submit">=</button>
                        <button type="button" onClick={this.ClearHandler}>
                            Clear
                        </button>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default Calculator;
