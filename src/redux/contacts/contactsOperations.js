import {createAsyncThunk} from '@reduxjs/toolkit';
import {getContactsFromServer,postContactToServer} from '../../utils/mockApi';

export const getContacts =  createAsyncThunk('get/contacts',async (_,thunkApi)=> {
    try {
       const result = await getContactsFromServer()
      return result.data
       
    } catch (error) {
        thunkApi.rejectWithValue(error.message)  
    }
})
export const addContact = createAsyncThunk('contacts/add',async(contact,thunkApi)=>{
    try {
       const result = await postContactToServer(contact)
       return result.data
    } catch (error) {
        thunkApi.rejectWithValue(error.message)  
    }
})
