import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
// Routes вместо Switch
// Navigate вместо Redirect
import About from '../pages/About';
import Posts from '../pages/Posts';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/about' element={<About/>} />
            <Route exact path='/posts' element={<Posts/>} />
            <Route exact path='/posts/:id' element={<PostIdPage/>} />
            <Route path='/error' element={<Error/>} />
            <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
    )
}

export default AppRouter;