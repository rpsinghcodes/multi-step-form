import { useState } from "react"

export default function PersonalInfo({onNext, data, updateData}) {
    const errorfield = <span className="float-right font-medium text-strawberryRed">This field is required </span>
    // const [data, setData] = useState({
    //     name:"",
    //     email:"",
    //     phone:"",
    // })
    const [err, setErr] = useState({
        nameError:false,
        emailError:false,
        phoneError:false,
        emailValid: false,
    })
    const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
    function handleChange(event) {
        updateData(prevData => ({
            ...prevData,
            [event.target.name]:event.target.value,            
        }))
        setErr(prevData => ({...prevData, [event.target.name+"Error"]: false}) )
        if(event.target.name === "email") {
            setErr(prevData => ({...prevData, emailValid: emailRegex.test(data.email)}))
        }
    }
    function handleNext() {
        console.log(data);
        console.log(err)
        if(data.name.length === 0) {
            setErr(prevData => ({...prevData, nameError: true}))
        }
        if(data.email.length === 0) {
            setErr(prevData => ({...prevData, emailError: true}))
        }
        if(data.phone.length === 0) {
            setErr(prevData => ({...prevData, phoneError: true}))
        }
        if(data.name.length !== 0 && data.email.length !== 0 && data.phone.length !== 0 && emailRegex.test(data.email) ) {
            onNext(prevData => prevData+1)
        }
    }
    return (
        <div className="flex  flex-col p-10 gap-10 ">
            <div>
                <h1 className="text-3xl text-marineBlue font-bold">Personal info</h1>
                <p className="text-pastelBlue">Please provide your name, email address, and phone number.</p>
            </div>
            <form action="#" className="flex flex-col gap-8">
                <div >
                <label className="text-marineBlue font-semibold" htmlFor="name">Name</label>
                {err.nameError && errorfield}
                <br />                               
                <input type="text" name="name" onChange={handleChange} defaultValue={data.name} className="w-full border border-pastelBlue py-2 px-3 rounded-md" placeholder="e.g. Stephen King" />
                
                </div> 
                <div>
                <label className="text-marineBlue font-semibold" htmlFor="email">Email Address</label>
                {err.emailError && errorfield}
                {err.emailValid && <span className="float-right font-medium text-strawberryRed">Enter a valid email</span>}
                <br />
                <input type="email" onChange={handleChange} defaultValue={data.email} className="w-full border border-pastelBlue py-2 px-3 rounded-md" name="email" placeholder="e.g. stephenking@lorem.com" />
                </div>
                <div>
                <label className="text-marineBlue font-semibold" htmlFor="phone">Phone Number</label>
                {err.phoneError && errorfield}
                <br />
                <input type="number" onChange={handleChange} defaultValue={data.phone} name="phone" className="w-full border [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-pastelBlue py-2 px-3 rounded-md" placeholder="e.g +1234 567 890" />
                </div>
            </form>
            <button className="self-end justify-self-end  bg-marineBlue text-white py-3 px-6 rounded-md" onClick={handleNext}>Next Step</button>
            {/* <Navigation section={0} handleNext={handleNext}  />  */}
        </div>
    )
}