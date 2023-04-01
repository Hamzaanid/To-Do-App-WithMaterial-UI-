import axios from 'axios';
const api = {
    AddNote: async (Note) => {
        const URL = '/Note/addNote';
        return await axios.post(URL,Note)
            .then((res) => res)
            .catch((err) => err)
    },

    getALLNotes: async () =>{
        return await axios.get('/Note')
            .then((res) => res)
            .catch((err) => err)
    },

    DeleteNote :  async (id) =>{
        axios.delete('/Note/deleteNote/' + id)
            .then(rep => rep)
            .catch(err => err);
    }

}

export default api;