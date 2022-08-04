import Header from "./Components/Header";
import Topics from "./Components/Topics";
import Home from "./Components/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom"
import Layout from "./Components/Layout";
import SearchPage from "./Components/SearchPage";
import CreateTopic from "./Components/CreateTopic";
import TopicPage from "./Components/TopicPage";

export default function Page(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path='/topics' element={<Topics/>}/>
                        <Route path='/new-question' element={<CreateTopic/>}/>
                        <Route path='/search/:searchKey' element={<SearchPage/>}/>
                        <Route path='/topic/:topicId' element={<TopicPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}