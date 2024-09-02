import { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'

export const ContactList = () => {
    const contacts = useSelector(state => state.contacts)
    console.log(contacts)
    return(
        <div>
            <h3>Contacts</h3>
            {contacts.length}
        </div>
    )
}