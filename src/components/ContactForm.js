import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../redux/slices/contactsSlice'
import { Link, useNavigate } from 'react-router-dom'

export const ContactForm = () => {
    const dispatch = useDispatch()
    const navigate  = useNavigate()
    

    const [formData, setFormData] = useState({
        name:"",
        phone:"",
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
            phone:"",
            email:"",
            address:""
        })

        navigate('/')
    }
    return(
        <div className="px-2 py-4">
            <div className="text-center text-xl font-semibold leading-7">
                <h5>Create New Contact</h5>
            </div>
            <div>
                {
                    
                    (!formData.name && !formData.address && !formData.phone) &&
                    <div className="text-red-400 text-sm">
                        Please fill all the fields.
                    </div>
                }
            </div>
            <form onSubmit={handleSubmit}>
                <label className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                <input 
                    className="mb-2 block w-full rounded-sm border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="full name"
                />
                <label className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                <input 
                    className="mb-2 block w-full rounded-sm border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                />
                <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                <input 
                    className="mb-2 block w-full rounded-sm border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                />
                <label className="mb-2 block text-sm font-medium leading-6 text-gray-900">Address</label>
                <input 
                    className="block w-full rounded-sm border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="address"
                />
                <div className="mt-2 text-center">
                    <button className=" block w-1/4 bg-blue-700 hover:bg-blue-500 text-white py-2 rounded-sm px-4">Create</button>
                </div>
            </form>
        </div>
    )
}