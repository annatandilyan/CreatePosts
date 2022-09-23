import logo from './logo.svg';
import './App.css';
import Input from "./components/input";
import Button from "./components/button";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postNewPost} from "./slices/index";

function App() {
    const state = useSelector(state => state.postsList)
    const [data, setData] = useState({name: "", description: ""})
    const dispatch = useDispatch()
    console.log(state)

    function setPost() {
        if (data.name && data) {
            dispatch(postNewPost(data))
            setData({name: "", description: ""})
        }
    }

    return (
        <div className="App">
            <Input
                placeholder="name"
                value={data.name}
                onChange={
                    (e) => setData({...data, name: e.target.value})
                }
            />
            <Input
                placeholder="description"
                value={data.description}
                onChange={
                    (e) => setData({...data, description: e.target.value})
                }
            />
            <button onClick={setPost}>ADD</button>
        </div>
    );
}

export default App;
