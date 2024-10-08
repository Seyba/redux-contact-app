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
    <div className='fig-grad p-8'>
        <div className="bg-white py-8 px-4 rounded-xl shadow-md">

            <h3 className="fig-blue-txt font-semibold text-2xl text-center mt-8">Search Contact</h3>
            <form>
                <div className="mt-8">
                    
                    <input 
                        onChange={handleSearchChange}
                        className="fig-accentBlue-light py-3 mb-2 w-full rounded-md border-0 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                        type="text"
                        name={searchBarVal}
                        placeholder="search contact"
                    />
                </div>
                
            </form>
            <div className="divide-y divide-gray-200">
                {
                    searchContact.length? searchContact.map(contact => {
                        const { id } = contact
                        const x = contact.name.split(' ')

                        const firstnameInitial = () => {
                            if(x.length > 2) {
                                const xa = x[1].split(' ')
                                const xaInit = xa[0][0]
                                return xaInit
                            } else {
                                const xa = x[0].split(' ')
                                const xaInit = xa[0][0]
                                return xaInit
                            }
                        }
                        const lastnameInitial = () => {
                            if(x.length > 2) {
                                const xa = x[2].split(' ')
                                const xaInit = xa[0][0]
                                return xaInit
                            } else {
                                const xa = x[1].split(' ')
                                const xaInit = xa[0][0]
                                return xaInit
                            }
                        }
                        const initialOfFirstName = firstnameInitial()
                        const initialOfLastname = lastnameInitial()
                        const contactInitials = `${initialOfFirstName}${initialOfLastname}`
                        
                        return (    
                            <ul key={contact.id}>
                                <div className="flex justify-between items-center">
                                    <li className="text-blue-700">
                                        <Link to={`/contacts/${id}`}>{contact.name}</Link>
                                    </li>
                                    <Link to={`/contacts/${id}`}>
                                        <h3 className="fig-accentBlue-light fig-blue-txt p-2 font-bold my-2 rounded-full ">
                                            {contactInitials}
                                        </h3>
                                    </Link>
                                </div>
                                
                            </ul>)
                        }
                    ) : <div className="py-8">
                        <h3 className=" fig-blue-txt text-xl font-semibold my-2 leading-7 ">No such contact is found!</h3>
                    </div>
                    
                }
            </div>
            <div className="sm:flex sm:justify-between block mt-8">
                <div className="fig-blue text-center hover:bg-blue-600 text-white sm:px-10 rounded-md py-2">
                    <Link to="/contacts/create" >Create</Link>
                </div>
                <div className="fig-blue sm:px-10 sm:mt-0 mt-2 text-center hover:bg-blue-600 text-white rounded-md py-2">
                    <Link to="/">Cancel</Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}
