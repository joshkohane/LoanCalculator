import React, { useState } from 'react';
import Results from './results';

const Calculator = (props) => {
    const [amount, setAmount] = useState(5000);
    const [amountClass, setAmountClass] = useState("calculator-input");
    const [years, setYears] = useState(5);
    const [yearsClass, setYearsClass] = useState("calculator-input");
    const [months, setMonths] = useState(60);
    const [monthsClass, setMonthsClass] = useState("calculator-input");
    const [rate, setRate] = useState(4.5);
    const [rateClass, setRateClass] = useState("calculator-input");
    const [results, setResults] = useState(<Results rate={rate} amount={amount} months={months} />)
    const submit = amountClass === "calculator-input" 
        && yearsClass === "calculator-input" 
        && monthsClass === "calculator-input" 
        && rateClass === "calculator-input"

    function handleAmount(e) {
        let currAmount = e.target.value;
        if (e.target.value === '' || e.target.value < 1000 || e.target.value > 1000000) {
            setAmount(currAmount);
            setAmountClass("calculator-input-invalid")
        } else {
            setAmount(currAmount);
            setAmountClass("calculator-input")
        }
    }

    function handleYears(e) {
        let currYears = e.target.value;
        if (e.target.value === '' || e.target.value === 0) {
            setYears(currYears);
            setMonths(0);
            setYearsClass("calculator-input-invalid")
            setMonthsClass("calculator-input-invalid")
        } else if (e.target.value.length <= 2) {
            setYears(currYears);
            setMonths(currYears * 12);
            setYearsClass("calculator-input")
            setMonthsClass("calculator-input")
        }
    }

    function handleMonths(e) {
        let currMonths = e.target.value;
        if (e.target.value === '' || e.target.value === 0) {
            setMonths(currMonths);
            setYears(0);
            setMonthsClass("calculator-input-invalid")
            setYearsClass("calculator-input-invalid")
        } else if (e.target.value.length <= 3) {
            setMonths(currMonths);
            setYears(currMonths / 12);
            setYearsClass("calculator-input")
            setMonthsClass("calculator-input")
        }
    }

    function handleRate(e) {
        let currRate = e.target.value;
        if (e.target.value === '' || e.target.value === 0 || e.target.value > 99) {
            setRate(currRate);
            setRateClass("calculator-input-invalid")
        } else {
            setRate(currRate);            
            setRateClass("calculator-input")
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        setResults(<Results rate={rate} amount={amount} months={months} />)
    }

    return (
        <div className="calculator-container">
            <div className="form-container">
                <form className="calculator-form">
                    <label className="calculator-label">
                        <h2 className="calculator-title">Loan Amount</h2>
                        <input type="number"
                            value={amount}
                            onChange={handleAmount}
                            className={amountClass}
                        />
                        <span className="dollar-sign">&#36;</span>
                    </label>
                    <label className="calculator-label">
                        <h2 className="calculator-title">Loan Term in Years</h2>
                        <input type="number" 
                            value={years}
                            onChange={handleYears}
                            className={yearsClass}
                        />
                    </label>
                    <h2 className="calculator-title calculator-or">Or</h2>
                    <label className="calculator-label">
                        <h2 className="calculator-title">Loan Term in Months</h2>
                        <input type="number" 
                            value={months}
                            onChange={handleMonths}
                            className={monthsClass}
                        />
                    </label>
                    <label className="calculator-label">
                        <h2 className="calculator-title">Interest Rate Per Year</h2>
                        <input type="number" 
                            value={rate}
                            onChange={handleRate}
                            className={rateClass}
                        />
                        <span className="percent-sign">&#37;</span>
                    </label>
                    {submit ? 
                        <input type="submit"
                            value="Calculate"
                            className="calculate-btn"
                            onClick={handleSubmit}
                        />
                    :
                        <input type="submit" 
                            disabled
                            value="Calculate"
                            className="calculate-btn-inactive"
                            onClick={handleSubmit}
                            />
                    }
                </form>
            </div>
            {results}
        </div>
    )
}

export default Calculator;