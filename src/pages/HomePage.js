import { useState} from 'react'
import { ContactList } from '../components/ContactList'
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux'

export const HomePage = () => {
    const contacts = useSelector(state => state.contacts)    
    
    return(
        <div className='fig-grad p-6'>
            <div className="bg-white shadow-md rounded-lg py-4">
                <h3 className="text-2xl font-bold text-center">Contact List</h3>
            </div>
            
            
            <div className="flex justify-between my-4">
                <Link className="bg-blue-700 hover:bg-blue-500 text-white py-2 rounded-md px-8 text-sm" to="/contacts/search">Search Contact</Link>
                <div>
                    <Link to="/contacts/create" className="bg-blue-700 text-white px-4 py-2 rounded-md text-sm">
                        Add Contact
                    </Link>
                </div>
            </div>
            <ContactList/>
        </div>
    )
}