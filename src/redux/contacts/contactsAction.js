import {createAction} from '@reduxjs/toolkit';
export const addContact = createAction("contacts/add")
export const removeContacts = createAction('contact/remove')
export const setFilter = createAction('contacts/filter')
