import { useState } from "react";
import "../../css/counter.css"

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleMinusClick() {
        if (count > 0) {
            setCount(count-1)
        }
    }

    function handlePlusClick() {
        setCount(count+1)
    }

    return (
      <>
        <div className="counter">
            <p className="title">Pixels</p>
            <p className="count">{ String(count).padStart(2, '0')}</p>
            <div className="count-buttons">
                <button className="count-button" onClick={handleMinusClick}>
                    <svg width="59" height="11" viewBox="0 0 59 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="signs"fillRule="evenodd" clipRule="evenodd" d="M58.9697 10.6162H0.469727V0.616211H58.9697V10.6162Z" fill="#B099F7"/>
                    </svg>
                </button>
                <button className="count-button" onClick={handlePlusClick}>
                    <svg width="60" height="56" viewBox="0 0 60 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path id="signs" fillRule="evenodd" clipRule="evenodd" d="M59.3599 32.6162H0.859863V22.6162H59.3599V32.6162Z" fill="#B099F7"/>
                        <path id="signs" fillRule="evenodd" clipRule="evenodd" d="M35.1099 0.00531769V55.2275H25.1099L25.1099 0.00531769H35.1099Z" fill="#B099F7"/>
                    </svg>   
                </button>
            </div>
        </div>
      </>
    );
  }