import React, { useState } from 'react';

const Calculator = (props) => {
    const [amount, setAmount] = useState(5000);
    const [years, setYears] = useState(5);
    const [months, setMonths] = useState(60);
    const [rate, setRate] = useState(4.5);
    const interestPerMonth = (rate / 100) / 12;
    const calcInterest = (1 + interestPerMonth) ** months;
    const total = amount / ((calcInterest - 1) / (interestPerMonth * calcInterest));

    return (
        <div className="calculator-container">
            <h1 className="main-title">Loan Calculator</h1>
            <div className="form-container">
                <form className="calculator-form">
                    <label className="calculator-label">
                        <h2 className="calculator-title">Loan Amount</h2>
                        <input type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="calculator-input"
                        />
                        <span>&#36;</span>
                    </label>
                    <label className="calculator-label">
                        <h2 className="calculator-title">Loan Term in Years</h2>
                        <input type="number" 
                            value={years}
                            maxLength="2"
                            onChange={(e) => setYears(e.target.value)}
                            className="calculator-input"
                        />
                    </label>
                    <h2>Or</h2>
                    <label className="calculator-label">
                        <h2 className="calculator-title">Loan Term in Months</h2>
                        <input type="number" 
                            value={months}
                            maxLength="3"
                            onChange={(e) => setMonths(e.target.value)}
                            className="calculator-input"
                        />
                    </label>
                    <label className="calculator-label">
                        <h2 className="calculator-title">Interest Rate Per Year</h2>
                        <input type="number" 
                            value={rate}
                            onChange={(e) => setRate(e.target.value)}
                            className="calculator-input"
                        />
                        <span>&#37;</span>
                    </label>
                    <input type="submit" 
                        value="Calculate"
                        className={amount >= 1000 ? 'calculate-btn' : 'calculate-btn-inactive'}
                        />
                </form>
            </div>
            <div>
                <h1>Monthly Payments</h1>
                <h2><span>&#36;</span> {(total).toFixed(2)}</h2>
                <div>
                    <p>Total Principal Paid</p>
                    <p><span>&#36;</span> {Math.round(amount)}</p>
                </div>
                <div>
                    <p>Total Interest Paid</p>
                    <p><span>&#36;</span> {((total * months) - amount).toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default Calculator;