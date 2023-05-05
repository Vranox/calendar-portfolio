import React from 'react';
import { NavLink } from 'react-router-dom';
import {AiFillCalendar} from 'react-icons/ai'
import { IconContext } from "react-icons";
import {MdOutlineSpaceDashboard} from "react-icons/md";
import {CiViewList} from "react-icons/ci";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="font-bold tracking-wider uppercase mb-4">Life Calendar</h2>
            <div>
                <div className="nav-item">
                    <NavLink
                        to="/dashboard"
                        className="flex items-center nav-link"
                        activeClassName="active"
                    >
                        <IconContext.Provider value={{ className: "icon" }}>
                            <MdOutlineSpaceDashboard />
                        </IconContext.Provider>
                        <div className="ml-3">Accueil</div>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink
                        to="/calendar"
                        className="flex items-center nav-link"
                        activeClassName="active"
                    >
                        <IconContext.Provider value={{ className: "icon" }}>
                            <AiFillCalendar />
                        </IconContext.Provider>
                        <div className="ml-3">Calendrier</div>
                    </NavLink>
                </div>
                <div className="nav-item">
                    <NavLink
                        to="/to-do"
                        className="flex items-center nav-link"
                        activeClassName="active"
                    >
                        <IconContext.Provider value={{ className: "icon" }}>
                            <CiViewList />
                        </IconContext.Provider>
                        <div className="ml-3">To Do List</div>
                    </NavLink>
                </div>
            </div>
        <hr className="mt-4 bg-black border-gray-300"/>
        </div>
    );
};

export default Sidebar;
