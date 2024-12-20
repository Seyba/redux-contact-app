import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../redux/slices/contactsSlice'
import { Link, useNavigate } from 'react-router-dom'

export const ContactForm = () => {
    const dispatch = useDispatch()
    const navigate  = useNavigate()
    
    const [formError, setFormError] = useState("")

    const [formData, setFormData] = useState({
        name:"",
        phone:"",
        email:'',
        address:'',
        city:'',
        job:''
    })
    
    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(!formData.name && !formData.phone && !formData.address) {
            setFormError('Please fill all the fields')
        } else {
            dispatch(addContact(formData.name, formData.phone, formData.email, formData.address, formData.city, formData.job))
        }
        
        setFormData({
            name:"",
            phone:"",
            email:"",
            address:"",
            city:"",
            job:""
        })
        localStorage.setItem('contacts', JSON.stringify(formData))
        navigate('/')
    }
    return(
        <div className="">
            <div className="bg-white py-8 px-4 rounded-xl shadow-md animate-fade-down animate-once animate-duration-1000 animate-ease-linear">
                <h3 className="fig-blue-txt font-semibold text-2xl text-center mt-8">Create New Contact</h3>
                <div>
                    {
                        
                        <div className="text-red-600 text-sm">
                            {formError}
                        </div>
                    }
                </div>
                <form onSubmit={handleSubmit}>
                    <label className="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
                    <input 
                        className="fig-accentBlue-light py-3 mb-2 w-full rounded-md border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="full name"
                    />
                    <label className="block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                    <input 
                        className="fig-accentBlue-light py-3 mb-2 w-full rounded-md border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                    />
                    <label className="block text-sm font-medium leading-6 text-gray-900">Email</label>
                    <input 
                        className="fig-accentBlue-light py-3 mb-2 w-full rounded-md border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                    />
                    <label className="mb-2 block text-sm font-medium leading-6 text-gray-900">Address</label>
                    <input 
                        className="fig-accentBlue-light py-3 mb-2 w-full rounded-md border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        placeholder="address"
                    />

                    <label className="mb-2 block text-sm font-medium leading-6 text-gray-900">City</label>
                    <input 
                        className="fig-accentBlue-light py-3 mb-2 w-full rounded-md border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="city"
                    />
                    <label className="mb-2 block text-sm font-medium leading-6 text-gray-900">Job</label>
                    <input 
                        className="fig-accentBlue-light py-3 mb-2 w-full rounded-md border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        type="text"
                        name="job"
                        value={formData.job}
                        onChange={handleChange}
                        placeholder="job"
                    />
                    <div className="sm:flex sm:justify-between block mt-8">
                        <div className="fig-blue text-center hover:bg-blue-600 text-white sm:px-10 rounded-md py-2">
                            <button>Create</button>
                        </div>
                        <div className="fig-blue sm:px-10 sm:mt-0 mt-2 text-center hover:bg-blue-600 text-white rounded-md py-2">
                            <Link to="/">Cancel</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}