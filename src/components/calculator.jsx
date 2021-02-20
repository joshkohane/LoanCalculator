import React, { useState } from 'react';
import Results from './results';

const Calculator = () => {
    const [amount, setAmount] = useState(5000);
    const [amountClass, setAmountClass] = useState("calculator-input");
    const [amountErrors, setAmountErrors] = useState("");
    const [years, setYears] = useState(5);
    const [yearsClass, setYearsClass] = useState("calculator-input");
    const [yearsErrors, setYearsErrors] = useState("");
    const [months, setMonths] = useState(60);
    const [monthsClass, setMonthsClass] = useState("calculator-input");
    const [monthsErrors, setMonthsErrors] = useState("");
    const [rate, setRate] = useState(4.5);
    const [rateClass, setRateClass] = useState("calculator-input");
    const [rateErrors, setRateErrors] = useState("");
    const [results, setResults] = useState(<Results rate={rate} amount={amount} months={months} />)
    const submit = amountClass === "calculator-input" 
        && yearsClass === "calculator-input" 
        && monthsClass === "calculator-input" 
        && rateClass === "calculator-input"

    function handleAmount(e) {
        let currAmount = e.target.value;
        if (currAmount === '' || currAmount < 1000 || currAmount > 1000000) {
            setAmount(currAmount);
            setAmountClass("calculator-input-invalid")
            setAmountErrors("Invalid Loan Amount")
        } else {
            setAmount(currAmount);
            setAmountClass("calculator-input")
            setAmountErrors("")
        }
    }

    function handleYears(e) {
        let currYears = e.target.value;
        if (currYears === "" || currYears === "0") {
            setYears(currYears);
            setMonths(0);
            setYearsClass("calculator-input-invalid")
            setMonthsClass("calculator-input-invalid")
            setYearsErrors("Invalid Loan Term")
            setMonthsErrors("Invalid Loan Term")
        } else if (currYears.length <= 2) {
            setYears(currYears);
            setMonths(currYears * 12);
            setYearsClass("calculator-input")
            setMonthsClass("calculator-input")
            setYearsErrors("")
            setMonthsErrors("")
        }
    }

    function handleMonths(e) {
        let currMonths = e.target.value;
        if (currMonths === "" || currMonths === "0") {
            setMonths(currMonths);
            setYears(0);
            setMonthsClass("calculator-input-invalid")
            setYearsClass("calculator-input-invalid")
            setMonthsErrors("Invalid Loan Term")
            setYearsErrors("Invalid Loan Term")
        } else if (currMonths.length <= 3) {
            setMonths(currMonths);
            setYears(currMonths / 12);
            setYearsClass("calculator-input")
            setMonthsClass("calculator-input")
            setMonthsErrors("")
            setYearsErrors("")
        }
    }

    function handleRate(e) {
        let currRate = e.target.value;
        if (currRate === '' || currRate === 0 || currRate > 99) {
            setRate(currRate);
            setRateClass("calculator-input-invalid")
            setRateErrors("Invalid Interest Rate")
        } else {
            setRate(currRate);            
            setRateClass("calculator-input")
            setRateErrors("")
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
                        <h2 className="errors">{amountErrors}</h2>
                    </label>
                    <label className="calculator-label">
                        <h2 className="calculator-title">Loan Term in Years</h2>
                        <input type="number" 
                            value={years}
                            onChange={handleYears}
                            className={yearsClass}
                        />
                        <h2 className="errors">{yearsErrors}</h2>
                    </label>
                    <h2 className="calculator-title calculator-or">Or</h2>
                    <label className="calculator-label">
                        <h2 className="calculator-title">Loan Term in Months</h2>
                        <input type="number" 
                            value={months}
                            onChange={handleMonths}
                            className={monthsClass}
                        />
                        <h2 className="errors">{monthsErrors}</h2>
                    </label>
                    <label className="calculator-label">
                        <h2 className="calculator-title">Interest Rate Per Year</h2>
                        <input type="number" 
                            value={rate}
                            onChange={handleRate}
                            className={rateClass}
                        />
                        <span className="percent-sign">&#37;</span>
                        <h2 className="errors">{rateErrors}</h2>
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