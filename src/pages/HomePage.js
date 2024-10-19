import { ContactList } from '../components/ContactList'
import { Link } from 'react-router-dom'
import { useSelector} from 'react-redux'

export const HomePage = (props) => {
    
    const contacts = useSelector(state => state.contacts)    

    return(
        <div className='fig-grad p-8'>
            
            <div className="bg-white shadow-md rounded-lg mb-4 py-4">

                <div className="text-center">
                    <h3 className="fig-blue-txt font-semibold text-2xl py-4">Contact List</h3>
                </div>
                <div className="my-4 px-4 sm:flex sm:justify-between block">
                    <div className="fig-blue text-center hover:bg-blue-600 text-white sm:px-10 rounded-md py-2">
                        <Link  to="/contacts/search">Search</Link>
                    </div>
                    <div className="fig-blue sm:px-10 sm:mt-0 mt-2 text-center hover:bg-blue-600 text-white rounded-md py-2">
                        <Link to="/contacts/create" >
                            Create
                        </Link>
                    </div>
                </div>
                
            </div>
            <ContactList/>
        </div>
    )
}