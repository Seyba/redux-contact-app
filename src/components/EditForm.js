import React, {useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editContact } from '../redux/slices/contactsSlice'
import { useNavigate, useParams } from 'react-router-dom'

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
                    <button className="bg-blue-700 text-white rounded-sm px-4">Update Contact</button>
                }
                    
            </form>
        </div>
    )
}
