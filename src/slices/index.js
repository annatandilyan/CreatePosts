import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


import {useDispatch} from "react-redux";

export const postNewPost = createAsyncThunk(
    "posts/postNewPost",
    async function (postData) {
        const dispatch = useDispatch()
        const data = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData)
        }).then(res=>res.json())
        console.log(postData)
        dispatch(addNewPost(postData))
        return postData
    }
)

const postsSlice = createSlice({
    name: "posts",
    initialState: {
        postsList: [],
        status: null
    },
    reducers: {
        addNewPost(state, action) {
            state.postsList.push(action.payload)
        }
    },
    extraReducers: {
        [postNewPost.fulfilled]: function (state, action) {
            state.status = action.payload.status
        }
    }
})
const {addNewPost} = postsSlice.actions
export const postsReducer = postsSlice.reducer