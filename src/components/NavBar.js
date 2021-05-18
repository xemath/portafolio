import React from "react";
import {NavLink} from "react-router-dom";
import {SocialIcon} from "react-social-icons";
export default function NavBar(){
    return (
        <header className="bg-gray-900">
            <div className="container mx-auto flex justify-between">
                <nav className="flex">
                    <NavLink to="/"
                    exact
                    activeClassName="text-gray-100"
                    className="inflex-flex items-center py-6 px-3 mr-4 text-red-100 hover:text-white text-4xl font-bold cursive tracking-widest">
                        Castro
                    </NavLink>
                    <NavLink to="/post"
                    activeClassName="text-gray-100 bg-gray-700" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-white">
                        Blog Post
                    </NavLink>
                    <NavLink to ='/project'
                    activeClassName="text-gray-100 bg-gray-700" 
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-white">
                        Projects
                    </NavLink>
                    <NavLink to='/about'
                    activeClassName="text-gray-100 bg-gray-700"
                    className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-white">
                        About me!
                    </NavLink>
                </nav>
                <div className="inline-flex py-3 px-3 my-6">
                    <SocialIcon url="https://www.facebook.com/carlos9877" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35 }}/>
                    <SocialIcon url="https://www.instagram.com/carlos.77.c/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35 }}/>
                    <SocialIcon url="https://www.github.com/xemath/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width:35 }}/>
                </div> 
            </div>
        </header>
    )
}