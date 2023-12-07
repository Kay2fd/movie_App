import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Search from './pages/Search';
import MovieDetail from './pages/MovieDetail';

function App() {
  const formatReleaseDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/search/:query' element={<Search formatReleaseDate={formatReleaseDate} />} />
          <Route path='/movie/:id' element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
