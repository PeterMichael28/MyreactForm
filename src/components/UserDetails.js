import { useEffect, useState } from "react";



const UserDetails = ({ nextStep, handleChange, values }) => {
    const [isValid, setIsValid] = useState(false)
    const [error, setError] = useState({})



    const validate = (values) => {
        let err = {};

        if (!values.firstName) {
            err.firstName = 'Firstname is required';
        }
        if (!values.lastName) {
            err.lastName = 'Lastname is required';
        }
        if (!values.email) {
            err.email = 'Email is required';
        } else if (!values.email.includes('@')) {
            err.email = 'Invalid email'
        }
        return err;

    }

   
    let cont = (e) => {
        e.preventDefault();
        setError(validate(values))
        setIsValid(true) 
    } 

    useEffect(() => {
        if (Object.keys(error).length === 0 && isValid) {
            nextStep()
        }
    }, [error]);

    return ( 
        <div>
        
        <form className="form">
       
        <h2>Personal Details</h2>
        <div className="input-group">
            <input 
            type="text" 
            placeholder="FirstName"
            required
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
            />
            <p className="errors">{error.firstName}</p>
        </div>

        <div className="input-group">
            <input 
            type="text" 
            placeholder="LastName"
            required
            value={values.lastName}
            onChange={handleChange}
            name="lastName"
            />
             <p className="errors">{error.lastName}</p>
        </div>

        <div className="input-group">
            <input 
            type="email" 
            placeholder="Email"
            required
            value={values.email}
            onChange={handleChange}
            name="email"
            />
            <p className="errors">{error.email}</p>
        </div>

        <div className="input-group">
            <select
                value={values.gender}
                onChange={handleChange}
                name="gender"
            >
                <option value="">--chose your gender--</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="others">others</option>
            </select>
        </div>
            <button 
                onClick={cont}
                className='cont-btn'
                >
                Continue
            </button>
        </form>
        </div>
     );
}
 
export default UserDetails;