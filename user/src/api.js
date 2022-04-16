import axios from 'axios'

const url = 'http://localhost:5000/memos'

export const fetchMemos =()=> axios.get(url)
export const createMemo = (newPost)=> axios.post(url,newPost)
export const updateMemo =(id, updatedMemo)=>
                        axios.patch(`${url}/${id}`, updatedMemo)
export const deleteMemo =(id)=> axios.delete(`${url}/${id}`)