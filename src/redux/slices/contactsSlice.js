import { createSlice, nanoid, createAsyncThunk} from "@reduxjs/toolkit"

const contactsSlice = createSlice({
    name: "contacts",

  initialState: [
    { id: 239, name: "John Doe", phone: 1234567890, email:'john@doe.com', address:'123 city 12345' },
    { id: 239, name: "jane Doe", phone: 1098765432, email:'jane@doe.com', address:'432 drive 65403' },
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
    }
  }
})

export const { addContact } = contactsSlice.actions
export default contactsSlice.reducer