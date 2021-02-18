import React from 'react';

const Calculator = (props) => {
    return (
        <div>
            <h1>Loan Calculator</h1>
            <form>
                <label>
                    <h2>Loan Amount</h2>
                    <input type="text"/>
                </label>
                <label>
                    <h2>Loan Term in Years</h2>
                    <input type="text" />
                </label>
                <h2>Or</h2>
                <label>
                    <h2>Loan Term in Months</h2>
                    <input type="text" />
                </label>
                <label>
                    <h2>Interest Rate Per Year</h2>
                    <input type="text" />
                </label>
                <input type="submit" value="Calculate" />
            </form>
        </div>
    )
}

export default Calculator;