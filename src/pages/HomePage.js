import { ContactList } from '../components/ContactList'

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
            <h3>contact list</h3>
        </div>
    )
}