import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { setFilter } from "./contactsAction";
import { getContacts, addContact, removeContacts } from "./contactsOperations";

const contactState = createReducer([], {
  [addContact.fulfilled]: (state, { payload }) => {
    const addContact = [...state, payload];
    return addContact;
  },
  [getContacts.fulfilled]: (_, { payload }) => payload,
  [removeContacts.fulfilled]: (state, { payload }) => {
    const removeContact = state.filter((el) => el.id !== payload.id);
    return removeContact;
  },
});
const loader = createReducer(false, {
  [getContacts.pending]: () => true,
  [getContacts.fulfilled]: () => false,
  [getContacts.rejected]: () => false,
  [addContact.pending]: () => true,
  [addContact.fulfilled]: () => false,
  [addContact.rejected]: () => false,
  [removeContacts.pending]: () => true,
  [removeContacts.fulfilled]: () => false,
  [removeContacts.rejected]: () => false,
});
const filterState = createReducer("", {
  [setFilter]: (_, { payload }) => payload,
});
const contactsReduser = combineReducers({ items: contactState, filter: filterState, loader: loader });
export default contactsReduser;
