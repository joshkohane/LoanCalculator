import React from 'react';

const Results = ({rate, amount, months}) => {
    const interestPerMonth = (rate / 100) / 12;
    const calcInterest = (1 + interestPerMonth) ** months;
    const total = amount / ((calcInterest - 1) / (interestPerMonth * calcInterest));

    return (
        <div className="results-container">
            <div className="monthly-container">
                <h1 className="monthly-header">Monthly Payments</h1>
                <h2 className="monthly-amount"><span className="monthly-dollar-sign">&#36;</span>{(total).toFixed(2)}</h2>
                
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
    )
}

export default Results;