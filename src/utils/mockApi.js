import axios from 'axios';

axios.defaults.baseURL = 'https://6213930289fad53b1ff984ca.mockapi.io'

export const getContactsFromServer = ()=>{
    return axios.get('/contacts')
}
export const postContactToServer = (contact)=>{
return axios.post('/contacts',contact)
}

export const deleteContactFromServer = (id)=>{
    return axios.delete(`/contacts/${id}`)
}