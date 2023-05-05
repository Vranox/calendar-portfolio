import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from "./Dashboard";
import Calendar from "./Calendar";
import Todo from "./Todo";

const MainPage = () => {
    return (
        <div className="main-page">
            <Sidebar />
            <div className="content">
                <Routes>
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/calendar" element={<Calendar/>} />
                    <Route path="/to-do" element={<Todo/>} />
                </Routes>
            </div>
        </div>
    );
};

export default MainPage;
