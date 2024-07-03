import { useState } from "react";
import "./Switch.css";

export default function Switch({round, onChange}) {
    const [activ,setActiv] = useState(false);
    return (
        <label className="switch">
            <input type="checkbox" />
            <span className={`slider ${round?"round":""}`} onClick={() => {
            setActiv(!activ);
            onChange(!activ);
        }}></span>
        </label>
    )
}