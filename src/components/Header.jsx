import React, {useState} from 'react';
import heroBg from '../public/hero-bg.png';
import Search from "./Search.jsx";
import heroImg from '../public/hero.png';

//GSAP setup
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

//Fetch the API
import {useEffect} from "react";
import Spiner from "./Spiner.jsx";
import MovieCard from "./MovieCard.jsx";
const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
    method: 'GET',
    headers:{
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
}

const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const fetchMovies = async (query = '') => {
        setIsLoading(true);
        setErrorMessage('');

        try{
            const endpoint = query
                ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
                : `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

            const response = await fetch(endpoint, API_OPTIONS);

            if(!response.ok){
                throw new Error('Failed to fetch movies.')
            }

            const data = await response.json();
            console.log(data);

            if(data.Response === 'False') {
                setErrorMessage(data.Error || 'Failed to fetch movies.');
                setMovieList([]);
                return;
            }
            setMovieList(data.results || []);

        } catch (error) {
            console.error(`Error fetching movies: ${error}`);
            setErrorMessage('Error fetching movies.')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMovies(searchTerm);
    },[searchTerm])

    const container = useRef(null);

    useGSAP(() => {
        gsap.from(".hero-item", {
            y:-300,
            opacity:0,
            duration: 1.2,
            stagger:0.1,
        });
    },
        {
        scope: container,
    });

    
    return (
        <main ref={container}>
            <img
                src={heroBg}
                alt=""
                className="absolute inset-0 h-full w-full object-fill"
            />

            <div className="flex flex-col mx-auto items-center justify-center text-white ">
                <div className="pattern"></div>
                <div  className="wrapper">
                    <header className="hero-item" >
                        <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without a Hassle!</h1>
                        <div className="hero-img hero-item flex flex-col mx-auto justify-center my-10 ">
                            <img src={heroImg} className=" h-80" />
                        </div>

                            <Search className="hero-item" searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
                    </header>

                    <section className="flex flex-col  items-center justify-center mt-15">
                        <h2>All Movies</h2><br/>


                        <div className="">
                            {isLoading ? (
                                <div className=" flex-col justify-center">
                                    <br/>
                                    <Spiner/>
                                </div>
                            ) : errorMessage ? (
                                <p className="text-red-500">{errorMessage}</p>
                            ) : (
                                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {movieList.map((movie) =>(
                                        <MovieCard key={movie.id} movie={movie} />
                                    ))}
                                </ul>
                            )}
                        </div>



                        {/*{errorMessage && <p className="text-red-500">{errorMessage}</p>}*/}
                    </section>


                </div>
            </div>
        </main>
    )
}
export default Header
