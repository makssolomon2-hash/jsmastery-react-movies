import React, {useState} from 'react';
import heroBg from '../public/hero-bg.png';
import Search from "./Search.jsx";
import heroImg from '../public/hero.png';

//GSAP setup
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".hero-item", {
            y:-300,
            opacity:0,
            duration: 1.2,
            stagger:0.1,
        });
    }, {
        scope: container,
    });

    
    return (
        <main ref={container}>
            <img
                src={heroBg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="flex flex-col mx-auto items-center justify-center text-white ">
                <div className="pattern"></div>
                <div  className="wrapper">
                    <header className="hero-item" >
                        <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without a Hassle!</h1>
                    </header>
                    <div className="hero-img hero-item flex flex-col mx-auto justify-center my-10 ">
                        <img src={heroImg} className=" h-80" />
                    </div>

                    <div className="hero-item">
                        <Search className="hero-item" searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                        <h1 className="hero-item text-white">{searchTerm}</h1>
                    </div>


                </div>
            </div>
        </main>
    )
}
export default Header
