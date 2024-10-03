import { createSlice, nanoid, createAsyncThunk} from "@reduxjs/toolkit"

const contactsSlice = createSlice({
    name: "contacts",

  initialState: [
    { id: 'sk3i', name: "John Doe", phone: 1234567890, email:'john@doe.com', address:'123 city 12345' },
    { id: 'bae9', name: "jane Doe", phone: 1098765432, email:'jane@doe.com', address:'432 drive 65403' },
    { id: 'coa3', name: "Mary Si", phone: 3488839443, email:'mary@sy.com', address:'98 Oange St 10349' },
    {id: 'bae1', name: "Leanne Graham", phone: 17707368031, email:'Sincere@april.biz', address:'Kulas Light 92998-387 Gwenborough'},
    {id: 'bae2', name: "Ervin Howell", phone: 106926593, email:'Shanna@melissa.tv', address:'Victor Plains 90566-7771 Wisokyburgh'},
    {id: 'bae2', name: "Mrs. Dennis Schulist", phone: 1-477-935-8478, email:'Karley_Dach@jasper.info', address:'Norberto Crossing 23505-1337 South Christy'},
    
  ],
  
  reducers : {
    addContact:{
        reducer: (state, action) => {
            const { payload } = action
            state.push(payload)
        },
        prepare(name, phone, email, address){
            return{
                payload : {
                    name,
                    phone,
                    email,
                    address,
                    id: nanoid(),
                    created_at: new Date().toISOString()
                }
            }
        }
    },
    editContact: (state, action) => {
        const {payload} = action 
        const indexOfContact = state.findIndex(contact => contact.id === payload.id)
        state[indexOfContact] = payload
        //state.splice(indexOfContact, 1, payload)
    },
    deleteContact : (state, action) => {
        const {payload} = action 
        const contactIndex = state.findIndex(contact => contact.id === payload.id)
        state.splice(contactIndex, 1)
    }
  }
})

export const { addContact, editContact, deleteContact } = contactsSlice.actions
export default contactsSlice.reducer