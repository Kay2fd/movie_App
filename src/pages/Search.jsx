import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Search = ({ formatReleaseDate }) => {
    const [results, setResults] = useState([]);
    const [searching, setSearching] = useState(true);
    const { query } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchSearch = async () => {
            try {
                const apiKey = "83a90e8defb4823bd923885b57bdce53";
                const response = await axios.get(
                    `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${query}`
                );
                setResults(response.data.results);
                setSearching(false);
            } catch (error) {
                console.error('Error fetching search results:', error);
                setSearching(false);
            }
        };

        fetchSearch();
    }, [query]);

    return (
        <div className="container mx-auto py-8 px-4">
            <h2 className="text-2xl font-bold mb-4">Hasil pencarian dari "{query}"</h2>

            {searching ? (
                <p>Sedang mencari...</p>
            ) : results.length < 1 ? (
                <div className="text-center">
                    <p>Tidak ditemukan</p>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4" onClick={() => navigate('/')}>Kembali</button>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {results
                        .filter((result) => result.poster_path && result.title && result.overview && result.release_date)
                        .map((result) => (
                            <div key={result.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <img
                                    src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                                    alt={result.title}
                                    className="w-full h-auto cursor-pointer"
                                    onClick={() => {
                                        navigate(`/movie/${result.id}`);
                                    }}
                                />
                                <div className="p-4">
                                    <p className="text-lg font-semibold mb-2">{result.title}</p>
                                    <p className="text-sm mb-2">{formatReleaseDate(result.release_date)}</p>
                                    <p className="text-sm">{result.overview}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default Search;
