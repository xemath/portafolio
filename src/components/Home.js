import React from "react";
import image from "../arboles.jpg";

export default function Home(){
    return (
        <main>
            <img src={image} alt="-" className="absolute object-cover w-full h-full"/>
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">

               <h1 className="text-6xl text-gray-50 font-bold cursive leading-none lg:leading-snug home-name">Hi, i'm Castro</h1> 
            </section>
        </main>
    )
}