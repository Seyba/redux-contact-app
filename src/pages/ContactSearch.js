import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const ContactSearch = () => {
    const contacts = useSelector(state => state.contacts)    
    const [searchBarVal, setSearchBarVal] = useState('')
    const [searchContact, setSearchContact] = useState(contacts)
    
    const handleSearchChange = e => {
        setSearchBarVal(e.target.value)
        const filterSearch = contacts.filter(
            contact => contact.name.toLowerCase().includes(searchBarVal.toLowerCase())
        )
        setSearchContact(filterSearch)
    }
  return (
    <div>
        <form>
            <div className="mt-8">
                <input 
                    onChange={handleSearchChange}
                    className="bg-gray-100 py-4 w-full text-sm text-gray-900"
                    type="text"
                    name={searchBarVal}
                    placeholder="search contact"
                />
            </div>
            
        </form>
        <div>
            {
                searchContact.map(contact => {
                    return (    <ul>
                            <li className="text-blue-700">{contact.name}</li>
                        </ul>)
                    
                    }
                )
            }
        </div>
    </div>
  )
}
