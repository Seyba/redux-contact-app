import React from 'react'
import { EditForm } from '../components/EditForm'
import { Link } from 'react-router-dom'

export const EditContactPage = () => {
  return (
    <div>
        <Link to="/">Cancel</Link>
        <EditForm/>
    </div>
  )
}
