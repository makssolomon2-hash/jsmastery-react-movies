import React from 'react';
import starImg from '../public/star.svg';
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const MovieCard = ({ movie: { title, vote_average, poster_path, release_date, original_language, } }) => {


    return (
        <div className="movie-card ">

            <img
                src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                alt={title}
                className="w-150 p-3 rounded-2xl "
            />

            <div className="my-1">
                <p className="text-2xl font-bold p-2"> {title}</p>

                <div className="content">
                    <div className="rating">
                        <img src={starImg} alt="Star Icon"/>
                        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>

                        <span> - </span>

                        <p className="lang">{original_language}</p>
                        <span> - </span>

                        <p className="year">
                            {release_date ? release_date.split('-')[0] : 'N/A'}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MovieCard
