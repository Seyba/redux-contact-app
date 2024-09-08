import { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { ContactItem } from './ContactItem'

export  function ContactList(props) {
    const contacts = useSelector(state => state.contacts)
    return(
        <div>
            {
                contacts.map(contact => <ContactItem key={contact.id} contact={contact}/>)
            }
        </div>
    )
}