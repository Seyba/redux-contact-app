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
    <div className='fig-grad'>
        <h3 className="text-2xl font-bold text-center mt-8">Search Contact</h3>
        <form>
            <div className="mt-8">
                <input 
                    onChange={handleSearchChange}
                    className="bg-gray-100 py-4 w-full rounded-sm border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                    type="text"
                    name={searchBarVal}
                    placeholder="search contact"
                />
            </div>
            
        </form>
        <div>
            {
                searchContact.length? searchContact.map(contact => {
                    const { id } = contact
                    return (    <ul>
                            <li className="text-blue-700">
                                <Link to={`/contacts/${id}`}>{contact.name}</Link>
                            </li>
                        </ul>)
                    }
                ) : <h3>No contact found!</h3>
            }
        </div>
        <div  className="mt-8 flex justify-between">
            <Link className="bg-blue-700 hover:bg-blue-500 text-white py-2 rounded-md px-8" to="/contacts/create">Add Contact</Link>
            <Link className="bg-blue-700 hover:bg-blue-500 text-white py-2 rounded-md px-8" to="/">Cancel</Link>
        </div>
    </div>
  )
}
