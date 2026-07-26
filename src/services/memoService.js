import axios from './httpRequester';

export const saveBookMemo = args => {
    return axios.post('/save/memo', args).catch(e => e.response);
}

export const myMemoList = (libraryId, type) => {
    return axios.get(`/${libraryId}/memo/list`,{params :{type}}).catch(e => e.response);
}

export const memoDetail = memoId => {
    return axios.get(`/memo/${memoId}`).catch(e => e.response);
}

export const updateMemo = args => {
    return axios.put(`/re/memo`, args).catch(e => e.response);
}

export const deleteMemo = memoId => {
    return axios.delete(`/de/memo/${memoId}`).catch(e => e.response);
}
