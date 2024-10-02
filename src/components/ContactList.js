import { useState, useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { ContactItem } from './ContactItem'

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
    console.log(contactData, 'data from api')
    return(
        <div>
            {
                contactData? contactData.map(contact => <ContactItem key={contact.id} contact={contact}/>) : <h3>Loading ...</h3>

            }
            
            {
                contacts?.map(contact => <ContactItem key={contact.id} contact={contact}/>)
            }
        </div>
    )
}