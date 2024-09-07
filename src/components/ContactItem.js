import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export function ContactItem(props){
    const contacts = useSelector(state => state.contacts)
    const { name, email, address, phone, id  } = props.contact
  return (
    <ul>
        <Link to={`/contacts/${id}`}>{name}</Link>
    </ul>
  )
}
