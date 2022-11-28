import React from "react";


export default function Form(){

    const [formData, setFormData] = React.useState(
    {        
        email: "",
        password: "",
        confirmPassword : "",
        isChecked: true
    }
        )
        
    function handleChange(event){
        const {name, value, type, checked} = event.target
        setFormData(prevForm => {
            return {
                ...prevForm,
                [name]: type === "checkbox" ? checked : value,
            };
        })
    }
    
    function submitForm(event){
        event.preventDefault()
        if(formData.password === formData.confirmPassword){
            alert("Successfully signed up");
            console.log("Successfully signed up");
        } else {
            alert("Passwords do not match!");
            console.log("Passwords do not match!")
        }

        if (formData.isChecked) {
          console.log("Thanks for signing up for our newsletter!");
        }
    }


    return (
    <div className="container">
        <form onSubmit={submitForm} className="form">
            <input
                type="text"
                value={formData.email}
                name="email"
                onChange={handleChange}
                placeholder="Email address"
                className="form--input"
                required
        />

            <input
                type="password"
                value={formData.password}
                name="password"
                onChange={handleChange}
                placeholder="Password"
                className="form--input"
                required
        />

            <input
                type="password"
                value={formData.confirmPassword}
                name="confirmPassword"
                onChange={handleChange}
                placeholder="Confirm password"
                className="form--input"
                required
        />

        <div className="marketing">
            <input
                type="checkbox"
                className="newsletter-checkbox"
                checked={formData.isChecked}
                name="isChecked"
                onChange={handleChange}
                id="newsletter"
            />

            <label className="newsletter-txt" htmlFor="newsletter">
                I want to join the newsletter
            </label>
        </div>

            <button>Sign up</button>

        </form>
    </div>
    );
}