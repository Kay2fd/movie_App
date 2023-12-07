import React from 'react';

const Rating = ({ onRate }) => {
    return (
        <div className="flex flex-col items-center text-red-600">
            <h2 className="text-lg font-semibold mb-2">Rate this movie:</h2>
            <select
                onChange={(e) => onRate(e.target.value)}
                className="border rounded-md py-2 px-4 text-lg"
            >
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
        </div>
    );
};

export default Rating;
