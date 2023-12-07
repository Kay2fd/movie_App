import React, { useEffect, useState } from 'react';
import Header from '../components/movie/Header';
import Movies from './Movies';

const Home = () => {
    return (
        <div className="bg-black min-h-screen">
            <div className="container mx-auto py-8 px-4">
                <div className="text-center text-red-600">
                    <p className="text-2xl font-bold mb-2">Hai, Nama saya Dika</p>
                    <p className="font-bold">Dari XI RPL 1</p>
                </div>
            </div>
            <Header />
            <Movies />
        </div>
    );
};

export default Home;
