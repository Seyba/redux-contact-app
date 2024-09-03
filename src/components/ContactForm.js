import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../redux/slices/contactsSlice'
import { Link, useNavigate } from 'react-router-dom'

export const ContactForm = () => {
    const dispatch = useDispatch()
    const navigate  = useNavigate()

    const [formData, setFormData] = useState({
        name:"",
        phone:0,
        email:'',
        address:''
    })
    
    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const cts = localStorage.getItem('contacts')
    console.log(cts)
    const handleSubmit = e => {
        e.preventDefault()

        dispatch(addContact(formData.name, formData.phone, formData.email, formData.address))
        
        setFormData({
            name:"",
            phone:0,
            email:"",
            address:""
        })

        navigate('/')
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="full name"
                />
                <input 
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                />
                <input 
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <input 
                    className="bg-gray-100"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="address"
                />
                {
                    (formData.name && formData.email && formData.phone && formData.address) 
                        && 
                    <button className="bg-blue-700 text-white rounded-sm px-4">create</button>
                }
                
            </form>
        </div>
    )
}