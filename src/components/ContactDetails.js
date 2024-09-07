import React from 'react'
import { useSelector } from 'react-redux'
import { useParams, Link } from 'react-router-dom'



export const ContactDetails = props => {
    const {id} = useParams()
    const contacts = useSelector(state => state.contacts)
    const contact = contacts.find(contact => contact.id === id)
    const { name, phone, email, address} = contact
    
    const nameInitial = name.split('')[0]
  return (
    <div className="py-8">
        <div className="bg-gray-300 py-4 px-2">
            <div className="flex justify-between">
                <Link className="" to="/">Home</Link>
                <Link to={`/contacts/edit/${id}`}>Edit</Link>
            </div>
            <div className="flex justify-center my-4">
                <div className="bg-gray-400 w-20 h-20 rounded-full">
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
            <div className="bg-white mx-1 px-2 py-3 rounded-md">
                <h4 className="text-xs font-bold">Address</h4>
                <h4 className="text-blue-700">{address}</h4>
            </div>
        </div>
        <div>
            <Link className="text-red-700">Delete Contact</Link>
        </div>
    </div>
  )
}
