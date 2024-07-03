
import { useState } from 'react';
import Switch from '../../Component/Switch/Switch';
import './Contact.css';

export default function Contact() {
    const [contact,setContact] = useState({
        email: "",
        title: "",
        message:"",
        reply: false
    });

    const udpateContact = (name, value) => {
        let tempContact = contact;
        tempContact[name] = value;
        setContact(tempContact);
    };
    
    return (
        <div className="contact">
            <div className="form">
                <div className='form-group'>
                    <label>Email</label>
                    <input type="email" onKeyUp={(e) => udpateContact("email",e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Titre du message</label>
                    <input type="text" onKeyUp={(e) => udpateContact("title",e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Message</label>
                    <textarea onKeyUp={(e) => udpateContact("message",e.target.value)}></textarea>
                </div>
                <div className='form-group'>
                    <label>Je souhaite être recontacté par mail</label>
                    <Switch round={true} onChange={(value) => udpateContact("reply",value)}/>
                </div>
                <div className='form-group'>
                    <button className='submit'>Envoyer</button>
                </div>
            </div>
        </div>
    )
}