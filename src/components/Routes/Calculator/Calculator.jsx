import React from "react";
import { useState } from "react";

function Calculator() {
    return (
        <React.Fragment>
            <h1>Calculator</h1>
            <div className="Calc">
                <input type="text" readOnly></input>
            </div>
        </React.Fragment>
    );
}

export default Calculator;
