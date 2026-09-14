import React, {useState} from 'react';
import heroBg from '../public/hero-bg.png';
import Search from "./Search.jsx";
import heroImg from '../public/hero.png'

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    
    return (
        <main>
            <img
                src={heroBg}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="flex flex-col mx-auto items-center justify-center text-white ">
                <div className="pattern"></div>
                <div className="wrapper">
                    <header>
                        <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without a Hassle!</h1>
                    </header>
                    <div className="hero-img flex flex-col mx-auto justify-center my-10 ">
                        <img src={heroImg} className=" h-80" />
                    </div>

                    <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                    <h1 className="text-white">{searchTerm}</h1>
                </div>
            </div>
        </main>
    )
}
export default Header
