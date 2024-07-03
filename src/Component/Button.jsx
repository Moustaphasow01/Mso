import {  useState } from 'react';
import './Button.css';

export default function Button({defaultCount}){
    const [count,setCount] = useState(defaultCount);

    return (
        <button className="btn" onClick={() => {
            setCount(count +1);
        }} >Cliquez ici! {count} </button>
    );
}