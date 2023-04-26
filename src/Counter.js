
import {useState} from 'react';
import Display from './components/Display';
import ButtonsPanel from './components/ButtonsPanel';
import './Counter.css';

const Counter = (props) => {
    const [counter, setCounter] = useState(props.counterInitValue);

    const add1Counter = () => {
        setCounter(counter + 1);
    }
    const reinitCounter = () => {
        setCounter(props.counterInitValue);
    }
    const resetCounter = () => {
        setCounter(0);
    }

    const addFew = (num) => {
        setCounter(counter + parseInt(num));
    }
    
    
    
    return (
        <div className='Counter'>
            <Display counter={counter} />
            <ButtonsPanel add1Counter={add1Counter} addFew={addFew} reinitCounter={reinitCounter} resetCounter={resetCounter}/>
            {/* <Step /> */}
        </div>
    )
}

export default Counter;