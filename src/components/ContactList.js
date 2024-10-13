import { useState, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { ContactItem } from './ContactItem'
import { Link } from 'react-router-dom'

export  function ContactList(props) {
    const contacts = useSelector(state => state.contacts)
    const [contactData, setContactData] = useState(null)

    useEffect(() => {
        const getContact = async () => {
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/users')
                const resJson = await res.json()
                console.log(resJson)
                setContactData(resJson)
            }catch(e){
                console.log(e)
            }
            
        }
        getContact()
    },[])
    return(
        <div className="bg-white shadow-md rounded-lg px-4 divide-y divide-gray-300">
            

            {
                contacts.length? contacts.map(contact => <ContactItem key={contact.id} contact={contact}/>) : <h3>You have no contact. </h3>
            }
        </div>
    )
}