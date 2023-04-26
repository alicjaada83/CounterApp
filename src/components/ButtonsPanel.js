import {useState} from 'react';

const ButtonsPanel = (props) => {
    const [step, setStep] = useState(0);
    const updateStep = (event) => {
        setStep (event.target.value)
    }


    return (
        <div className='buttonsPanel'>
            <button onClick={props.add1Counter}>Add 1</button>
            <button onClick={props.reinitCounter}>Reinit</button>
            <button onClick={props.resetCounter}>Reset</button>
            <button onClick={()=>props.addFew(step)}>AddFew</button>
            <div>
                <p className='blue'>Krok<input type="number" className="cyfra" onChange={(event)=>updateStep(event)}/>{step}</p> 
            </div>
        </div>
    )
}

export default ButtonsPanel;