import { useState} from 'react'
import { ContactList } from '../components/ContactList'
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux'

export const HomePage = () => {
    const contacts = useSelector(state => state.contacts)    
    
    return(
        <div>
            
            <div className="flex justify-between">
                <Link to="/contacts/search">Search Contact</Link>
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