const Confirm = ({ nextStep, preStep, values}) => {

    let cont = (e) => {
        e.preventDefault();
       return nextStep()
    } 
    let back = (e) => {
        e.preventDefault();
        return preStep()
    }
    return ( 
        <div className="ul-container">
            <h2>Confirm your details</h2>
            <ul className="ul">
                <li>
                    <h4>First Name</h4>
                    <p>{values.firstName}</p>
                </li>
                <li>
                    <h4>Last Name</h4>
                    <p>{values.lastName}</p>
                </li>
                <li>
                    <h4>Email</h4>
                    <p>{values.email}</p>
                </li>
                <li>
                    <h4>Gender</h4>
                    <p>{values.gender}</p>
                </li>
                <li>
                    <h4>Phone</h4>
                    <p>{values.phone}</p>
                </li>
                <li>
                    <h4>Occupation</h4>
                    <p>{values.occupation}</p>
                </li>
                <li>
                    <h4>City</h4>
                    <p>{values.city}</p>
                </li>
                <li>
                    <h4>Bio</h4>
                    <p>{values.bio}</p>
                </li>
            </ul>
            <div className="btn-grp">
               <button 
               onClick={cont}
               className='cont-btn'
               >
                   confirm
                </button>
                <button 
               onClick={back}
               className='back-btn'
               >
                   Back
                </button>

                </div>
        </div>
     );
}
 
export default Confirm;