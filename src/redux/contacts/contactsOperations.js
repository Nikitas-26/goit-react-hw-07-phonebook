import {createAsyncThunk} from '@reduxjs/toolkit';
import {getContactsFromServer,postContactToServer,deleteContactFromServer} from '../../utils/mockApi';

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
export const removeContacts = createAsyncThunk('contacts/remove',async(id,thunkApi)=>{
    try {
        const result = await deleteContactFromServer(id)
        return result.data
    } catch (error) {
        thunkApi.rejectWithValue(error.message)
    }
})