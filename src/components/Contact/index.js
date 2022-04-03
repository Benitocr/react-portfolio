import React, {useState} from "react";
import {validateEmail} from '../../utils/helpers';

function ContactForm(){
    const [errorMessage, setErrorMessage] = useState('');
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;
    function handleChange(e) {
        if (e.target.name === 'email'){
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            }
            
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } 
            else {
                setErrorMessage('');
            }
        }
        
        // console.log('errorMessage', errorMessage);
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };
    function handleSubmit(e){
        e.preventDefault();
        console.log(formState);
    };
    // console.log(formState);
    return(
        <div className="hero-form">
            <h1 >Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit} className="navlist2">
                <div>
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Your Name" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                <label htmlFor="email">Email address:</label>
                <input type="email" placeholder="Your Email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                <label htmlFor="message">Message:</label>
                <textarea name="message" placeholder="Your Message here"  defaultValue={message} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;