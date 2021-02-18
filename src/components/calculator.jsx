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
            <div className="form-container">
                <form className="calculator-form">
                    <label className="calculator-label">
                        <h2 className="calculator-title">Loan Amount</h2>
                        <input type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="calculator-input amount-input"
                        />
                        <span className="dollar-sign">&#36;</span>
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
                    <h2 className="calculator-title">Or</h2>
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
                            className="calculator-input rate-input"
                        />
                        <span className="percent-sign">&#37;</span>
                    </label>
                    <input type="submit" 
                        value="Calculate"
                        className={amount >= 1000 ? 'calculate-btn' : 'calculate-btn-inactive'}
                        />
                </form>
            </div>
            <div className="results-container">
                <div className="monthly-container">
                    <h1 className="monthly-header">Monthly Payments</h1>
                    <h2 className="monthly-amount">&#36; {(total).toFixed(2)}</h2>
                </div>
                <div className="principal-container">
                    <p className="principal-header">Total Principal Paid</p>
                    <p className="principal-amount">&#36; {Math.round(amount)}</p>
                </div>
                <div className="interest-container">
                    <p className="interest-header">Total Interest Paid</p>
                    <p className="interest-amount">&#36; {((total * months) - amount).toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

export default Calculator;