import contactsReduser from "./contacts/contactsReduser";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
});

export default store;
