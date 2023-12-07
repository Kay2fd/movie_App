import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search/${text}`);
    };

    return (
        <header className="bg-neutral-900 py-8 px-4">
            <div className="max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-2 text-white">Selamat Datang di Movie App sederhana saya</h2>
                <h3 className="text-lg mb-4 text-white">Jutaan film, acara TV, dan orang-orang untuk dijelajahi. Jelajahi sekarang.</h3>
            </div>
            <div className="max-w-2xl mx-auto font-semibold">
                <form onSubmit={handleSubmit} className="flex items-center">
                    <input
                        type="text"
                        placeholder='Search for a movie, TV show, person...'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        className="border rounded py-2 px-4 w-full"
                    />
                    <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white font-bold ml-5 py-2 px-4 rounded"
                    >
                        Search
                    </button>
                </form>
            </div>
        </header>
    );
};

export default Header;
