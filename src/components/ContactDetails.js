import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { deleteContact } from '../redux/slices/contactsSlice'


export const ContactDetails = props => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const history = useNavigate()

    const contacts = useSelector(state => state.contacts)
    const contact = contacts.find(contact => contact.id === id)
    const { name, phone, email, address, city, job} = contact
    
    const nameInitial = name.split('')[0]

    const removeContact = () => {
        dispatch(deleteContact(id))
        navigate('/')
    }
  return (
    <div className="fig-grad p-8">
        <div className="bg-white py-8 px-4 rounded-xl shadow-md">
            <div className="flex justify-between">
                <Link className="" to="/">Home</Link>
                <Link to={`/contacts/edit/${id}`}>Edit</Link>
            </div>
            <div className="flex justify-center my-4">
                <div className="w-20 h-20 rounded-full  fig-blue font-bold my-2 rounded-full">
                    <h5 className="text-center text-4xl text-white pt-4">{nameInitial}</h5>
                </div>
            </div>
            <div>
                <h5 className="text-white my-3 text-center text-4xl ">{name}</h5>
            </div>
        </div>
        <div className="bg-zinc-100 py-8 my-2">
            <div className="bg-white mx-1 mb-3 px-2 py-3 rounded-md">
                <h4 className="text-xs font-bold ">Phone</h4>
                <h4 className="text-blue-700">{phone}</h4>
            </div>
            <div className="bg-white mx-1 mb-3 px-2 py-3 rounded-md">
                <h4 className="text-xs font-bold">Email</h4>
                <h4 className="text-blue-700">{email}</h4>
            </div>
            <div className="bg-white mx-1 mb-3 px-2 py-3 rounded-md">
                <h4 className="text-xs font-bold">Address</h4>
                <h4 className="text-blue-700">{address}</h4>
            </div>
            <div className="bg-white mx-1 mb-3 px-2 py-3 rounded-md">
                <h4 className="text-xs font-bold">City</h4>
                <h4 className="text-blue-700">{city}</h4>
            </div>
            <div className="bg-white mx-1 px-2 py-3 rounded-md">
                <h4 className="text-xs font-bold">Job</h4>
                <h4 className="text-blue-700">{job}</h4>
            </div>
        </div>
        <div>
            <button className="text-red-700" onClick={removeContact}>Delete</button>
        </div>
        
    </div>
  )
}
