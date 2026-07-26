import axios from './httpRequester';

export const saveBook = args => {
    return axios.post('/save-book', args).catch(e => e.response);
}

// google books api
export const bookList = params => {
    return axios.get('/search/book', {params}).catch(e => e.response);
}

// user library list
export const myBookList= () =>{
    return axios.get('/my/library').catch(e => e.response);
}

// one book detail
export const myBookItem= libraryId =>{
    return axios.get(`/my/book/${libraryId}`).catch(e => e.response);
}

// my book update
export const bookUpdate = args => {
    return axios.put('/my/book', args).catch(e => e.response);
}

export const bookStatus = (libraryId, params) => {
    return axios.patch(`/my/status/${libraryId}?status=${params}`).catch(e => e.response);
}

export const removeBook = libraryId => {
    return axios.delete(`/remove/${libraryId}`).catch(e => e.response);
}
