import React, { useState } from "react";
import {  toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";
import { createContact } from "../Actions/ContactAction";


function Create(){

    const [contact,setContact] =useState({
        first: "",
        last:"",
        image:"",
        mobile:"",
        email:"",
        address:""

    })
    const dispatcher = useDispatch()
    const navigate = useNavigate()

    const readValue =(e) =>{
        const {name,value} = e.target;
        setContact({...contact,[name]: value})
    }

    const submitHandler =async (e) =>{
        e.preventDefault();
        try{
            console.log(`new contact=`,contact);
            dispatcher(createContact(contact))
            .unwrap()
            .then(res=>{
                toast.success(`new contact added succefully`)

            })
        }catch(err){
            toast.error(err.message)
        }
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="dispaly-3 text-primary"> Create New Contact</h3>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-body">
                            <form autoComplete="off" onSubmit={submitHandler}>
                                <div className="form-group mt-2">
                                    <label htmlFor="first">First name</label>
                                    < input type="text" name="first"  id="first"  onChange={readValue} className="form-control" required placeholder="firstname" />
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="last">Last name</label>
                                    <input type="text" name="last" onChange={readValue} id="last" className="form-control" required placeholder="last name"/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="image">Profie image</label>
                                    <input type="url" name="image"onChange={readValue} id="image" className="form-control" placeholder="https://xyz.com/image1.jpg" required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="mobile">Mobile</label>
                                    <input type="number" name="mobile" onChange={readValue}id="mobile" className="form-control" placeholder="90-----21" required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" onChange={readValue} className="form-control" placeholder="name@diin.com" required/>
                                </div>
                                <div className="form-group mt-2">
                                    <label htmlFor="address">Adress</label>
                                    <input  name="address" id="address" cols= "30" rows="6" className="form-control" onChange={readValue} placeholder="address here" required/>
                                </div>
                                <div className="form-group mt-2">
                                    <input type="submit" value="add new Contact" className="btn btn-outline-success"/>
                                </div>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
 export default Create