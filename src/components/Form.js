import React, { useState } from "react";
import style from "../style.css";

const Form = () => {
    
    const [firstName, setFirstName] = useState('')

    const handleInputChange = (e) => {
        setFirstName(e.target.value)
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formElement = e.target;
        const isValid = formElement.checkValidity();
        formElement.classList.add("submitted");
        const firstInvalidField = formElement.querySelector(
            ":invalid"
        )
        firstInvalidField?.focus();
        if (isValid) {
            const formData = new FormData(formElement);
            for (const entry of formData) {
                console.log(entry);
            }
        }
    }

    return(
        <div>
        Vanilla Form
        <form
        
            onSubmit={handleSubmit}
            noValidate
        >
            <input
                className="firstName"
                value={firstName}
                onChange={handleInputChange}
                required={true}
                name="firstName"
            />
        <button type="submit">
        Submit
        </button>
        </form>

        </div>
    )
}

export default Form;