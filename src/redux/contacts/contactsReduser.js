import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {removeContacts,setFilter} from './contactsAction';
import {getContacts,addContact} from './contactsOperations';

const contactState = createReducer([],{
  [addContact.fulfilled]: (state,{payload}) => {
    const addContact = [...state,payload]
    return addContact
    // console.log(payload.data);
  },
  [getContacts.fulfilled]:(_,{payload})=>payload,
  [removeContacts]: (state,{payload})=>{
    const removeContact = state.filter((el) => el.id.toLowerCase() !== payload.toLowerCase())
    return removeContact 
  }
})
const loader = createReducer(false,{
  [getContacts.pending]:()=> true,
  
})

const filterState = createReducer('',{
[setFilter]: (_,{payload})=>payload
})

const contactsReduser = combineReducers({ items: contactState, filter: filterState });
export default contactsReduser;
