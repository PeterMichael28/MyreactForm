import { useState } from 'react'
import UserDetails from './UserDetails'
import MoreDetails from './MoreDetails'
import Confirm from './Confirm'
import Success from './Success'


const AllForms = () => {

    const [allForms, setAllForms] = useState({
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        gender: "Select your gender",
        phone: '',
        occupation: '',
        city: '',
        bio: '',
    })

    

    let nextStep = () => {
        const { step } = allForms;
        setAllForms({
            ...allForms,
            step: step + 1
        })
    }

    let preStep = () => {
        const { step } = allForms;
        setAllForms({
            ...allForms,
            step: step - 1
        })
    }

    let handleChange = (e) => {
        setAllForms({
            ...allForms,
            [e.target.name]: e.target.value})
    }

   
    const { step } = allForms;
    const values = {...allForms};
 

        switch(step) {
            case 1:
              return (
                   <UserDetails 
               nextStep={nextStep}
               handleChange={handleChange}
               values={values}
               />
              )
            case 2: 
                return (
                    <MoreDetails 
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                    preStep={preStep}
                    />
                )
            case 3: 
                return (
                    <Confirm 
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={values}
                    preStep={preStep}
                    />
                )
            default:
                return (
                    <Success />
                )
        }
}
 
export default AllForms;