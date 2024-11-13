import React, { Fragment, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { deleteContact } from '../redux/slices/contactsSlice'
import { Dialog, Transition } from '@headlessui/react'


export const ContactDetails = props => {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)

    const {id} = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const contacts = useSelector(state => state.contacts)
    const contact = contacts.find(contact => contact.id === id)
    const { name, phone, email, address, city, job} = contact
    
    const nameInitial = name.split('')[0]
    const deleteConfirm = () => {
        dispatch(deleteContact(id))
        navigate('/')
    }
    const removeContact = () => {
        setOpen(true)
        //dispatch(deleteContact(id))
        //navigate('/')
    }
  return (
    <div className="fig-grad p-8">
        <div className="bg-white py-8 px-4 rounded-xl shadow-md">
            <div className="flex justify-between">
                <Link className="text-white fig-blue rounded-xl py-1 px-6 hover:bg-blue-600" to="/">Home</Link>
                <Link className="text-white fig-blue rounded-xl py-1 px-6 hover:bg-blue-600" to={`/contacts/edit/${id}`}>Edit</Link>
            </div>
            <div className="flex justify-center my-4 animate-bounce">
                <div className="w-20 h-20 rounded-full  fig-blue font-bold my-2 rounded-full">
                    <h5 className="text-center text-4xl text-white pt-4">{nameInitial}</h5>
                </div>
            </div>
            <div>
                <h5 className="fig-blue-txt my-3 font-light text-center text-3xl ">{name}</h5>
            </div>
        </div>
        <div className="mt-4">
            <div className="bg-white mb-3 px-2 py-4 rounded-xl shadow-md">
                <h4 className="text-xs font-bold ">Phone</h4>
                <h4 className="fig-blue-txt">{phone}</h4>
            </div>
            <div className="bg-white mb-3 px-2 py-4 rounded-xl shadow-md">
                <h4 className="text-xs font-bold">Email</h4>
                <h4 className="fig-blue-txt">{email}</h4>
            </div>
            <div className="bg-white mb-3 px-2 py-4 rounded-xl shadow-md">
                <h4 className="text-xs font-bold">Address</h4>
                <h4 className="fig-blue-txt">{address}</h4>
            </div>
            <div className="bg-white mb-3 px-2 py-4 rounded-xl shadow-md">
                <h4 className="text-xs font-bold">City</h4>
                <h4 className="fig-blue-txt">{city}</h4>
            </div>
            <div className="bg-white px-2 py-4 rounded-xl shadow-md">
                <h4 className="text-xs font-bold">Job</h4>
                <h4 className="fig-blue-txt">{job}</h4>
            </div>
        </div>
        <div className="mt-4 ">
            <button className="text-white fig-blue rounded-xl py-1 px-6 hover:bg-blue-600" onClick={removeContact}>Delete</button>
        </div>

        <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
            <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                        <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div className="sm:flex sm:items-start">
                                
                                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <Dialog.Title as="h3" className="text-xl font-semibold leading-6 fig-blue-txt">
                                        Remove Contact
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-gray-600 text-base leading-5 py-2">
                                        Are you sure you want to delete this contact?
                                        This action cannot be undone.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:justify-between sm:px-6">
                            <button
                                type="button"
                                className="inline-flex w-full justify-center rounded-md fig-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 sm:ml-3 sm:w-auto"
                                onClick={deleteConfirm}
                            >
                                Delete
                            </button>
                            <button
                                type="button"
                                className="mt-3 inline-flex w-full justify-center rounded-md fig-blue px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-blue-600 sm:mt-0 sm:w-auto"
                                onClick={() => setOpen(false)}
                                ref={cancelButtonRef}
                            >
                                Cancel
                            </button>
                        </div>
                    </Dialog.Panel>
                </Transition.Child>
            </div>
            </div>
        </Dialog>
        </Transition.Root>
    </div>
  )
}
