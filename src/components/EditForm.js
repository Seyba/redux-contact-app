import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editContact } from '../redux/slices/contactsSlice'
import { useNavigate, useParams, Link } from 'react-router-dom'

export const EditForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const contact = useSelector(state => state.contacts.find(contact => contact.id === id))
    const [formData, setFormData] = useState(contact)
    const handleChange = e => {
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        dispatch(editContact(formData))
        navigate(`/contacts/${id}`)
    }

    return (
        <div className="bg-white py-8 px-4 rounded-xl shadow-md animate-fade-up animate-once animate-ease-out">
            <h3 className="fig-blue-txt font-semibold text-2xl text-center mt-8">Update Contact</h3>
            <form onSubmit={handleSubmit}>
                <label className="mb-2 block text-sm font-medium leading-6 text-gray-900">Name</label>
                <input 
                    className="fig-accentBlue-light py-3 mb-2 w-full rounded-md border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="full name"
                />

                <label className="mb-2 block text-sm font-medium leading-6 text-gray-900">Phone Number</label>
                <input 
                    className="fig-accentBlue-light py-3 mb-2 w-full rounded-md border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    type="number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number"
                />
                <label className="mb-2 block text-sm font-medium leading-6 text-gray-900">Email</label>
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
                    placeholder="Job"
                />
                
                <div className="sm:flex sm:justify-between block mt-8">
                    <div className="fig-blue text-center hover:bg-blue-600 text-white sm:px-10 rounded-md py-2">
                        <Link to="/" >Cancel</Link>
                    </div>
                    {
                        (formData.name && formData.email && formData.phone && formData.address)? 
                    
                        <button className="fig-blue sm:px-10 sm:mt-0 mt-2 text-center hover:bg-blue-600 text-white rounded-md py-2">    
                            Update
                        </button>:
                        <button className="bg-slate-50 sm:px-10 sm:mt-0 mt-2 text-center hover:slate-100 text-white rounded-md py-2">    
                            Update
                        </button>
                    }    
                </div>
            </form>
        </div>
    )
}
