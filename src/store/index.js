import {configureStore} from "@reduxjs/toolkit";
import {postsReducer} from "../slices";

const store=configureStore({
    reducer:postsReducer
})
export default store