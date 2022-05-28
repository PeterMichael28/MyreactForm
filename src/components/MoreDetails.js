import { useState, useEffect } from "react"


const MoreDetails = ({ nextStep, preStep, handleChange, values}) => {
   
    const [isValid, setIsValid] = useState(false)
    const [error, setError] = useState({})


    let cont = (e) => {
        e.preventDefault();
        setError(validate(values))
        setIsValid(true)
    } 

    let back = (e) => {
        e.preventDefault();
         preStep()
    }

    const validate = (values) => {
        let err = {};

        if (!values.phone) {
            err.phone = 'Phone no is required';
        }
        if (!values.occupation) {
            err.occupation = 'Enter your occupation';
        }
        if (!values.city) {
            err.city = 'City is required';
        }
        if (!values.bio) {
            err.bio = 'Write something about yourself';
        }
        return err;

    }

   
    // let cont = (e) => {
    //     e.preventDefault();
    //     setError(validate(values))
    //     setIsValid(true) 
    // } 

    useEffect(() => {
        if (Object.keys(error).length === 0 && isValid) {
            nextStep()
        }
    },[error]);

    return (
            <form className="form">
                <h2>More Details</h2>

            <div className="input-group">
                <input 
                type="telephone" 
                placeholder="Phone no"
                required
                name="phone"
                onChange={handleChange}
                value={values.phone}
                />
                <p className="errors">{error.phone}</p>
            </div> 


            <div className="input-group">
                <input 
                type="text" 
                placeholder="Occupation"
                required
                value={values.occupation}
                onChange={handleChange}
                name="occupation"
                />
                <p className="errors">{error.occupation}</p>
            </div> 

            <div className="input-group">
                <input 
                type="text" 
                placeholder="Your City"
                required
                value={values.city}
                onChange={handleChange}
                name="city"
                />
                <p className="errors">{error.city}</p>
            </div> 

            <div className="input-group">
                <input 
                type="text" 
                placeholder="Your Bio"
                required
                value={values.bio}
                onChange={handleChange}
                name="bio"
                />
                <p className="errors">{error.bio}</p>
            </div> 

            <div className="btn-grp">
                <button 
                onClick={cont}
                className='cont-btn'
                >
                continue
                </button>
                <button 
                onClick={back}
                className='back-btn'
                >
                Back
                </button>
            </div>
            </form>
     );
}
 
export default MoreDetails;