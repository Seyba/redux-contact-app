import { useState } from 'react'
import { useSelector, useDispatch} from 'react-redux'

export  function ContactList() {
    const contacts = useSelector(state => state.contacts)
    
    return(
        <div>
            <h3>Contact List</h3>
        </div>
    )
}