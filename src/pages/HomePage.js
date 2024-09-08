import { ContactList } from '../components/ContactList'
import { Link } from 'react-router-dom'

export const HomePage = () => {
    return(
        <div>
            <form>
                <div >
                    <input 
                        className="bg-gray-100 w-full text-sm text-gray-900"
                        type="text"
                        name="searchBar"
                        placeholder="search contact"
                    />
                </div>
                
            </form>
            <div className="flex justify-between">
                <div>Search Contact</div>
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