import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const List = ({ type, name }) => {
    const [movies, setMovies] = useState([]);
    const apikey = "83a90e8defb4823bd923885b57bdce53";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    `https://api.themoviedb.org/3/movie/${type}?api_key=${apikey}`
                );
                setMovies(response.data.results);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        };

        fetchData();
    }, [type]);

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold mb-4">{name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <Card key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
};

export default List;
