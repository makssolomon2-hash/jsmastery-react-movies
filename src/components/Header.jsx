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

    const fetchMovies = async () => {
        setIsLoading(true);
        setErrorMessage('');

        try{
            const endpoint = `${API_BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`;

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
        fetchMovies();
    },[])

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
                className="absolute inset-0 h-full w-full object-fill"
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

                    <section className="flex flex-wrap  items-center justify-center mt-15">
                        <h2>All Movies</h2>s

                        <div className="">
                            {isLoading ? (
                                <p className="text-5xl font-bold">Loading...</p>
                            ) : errorMessage ? (
                                <p className="text-red-500">{errorMessage}</p>
                            ) : (
                                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                    {movieList.map((movie) =>(
                                        <div className="movie-card flex flex-col mx-auto items-center justify-center w-full p-1 m-5">
                                            <p className="text-2xl font-bold p-2"> {movie.title}</p>
                                            <img
                                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                                alt={movie.title}
                                                className="w-150 p-3 rounded-2xl "
                                            />
                                            {/*<p className="p-10 w-100">{movie.overview}</p>*/}

                                        </div>


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
