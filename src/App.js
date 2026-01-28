import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/section/Main'

const Home = lazy(()=> import('./pages/Home'));
const MelonChart = lazy(()=> import('./pages/MelonChart'));
const TheNewestMusic = lazy(()=> import('./pages/TheNewestMusic'));
const GenreMusic = lazy(()=> import('./pages/GenreMusic'));
const MelonDJ = lazy(()=> import('./pages/MelonDJ'));
const MelonTV = lazy(()=> import('./pages/MelonTV'));
const StarPost = lazy(()=> import('./pages/StarPost'));
const Magazine = lazy(()=> import('./pages/Magazine'));
const MusicAward = lazy(()=> import('./pages/MusicAward'));
const MusicWave = lazy(()=> import('./pages/MusicWave'));
const Not = lazy(()=> import('./pages/Not'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/MelonChart' element={<MelonChart/>} />
          <Route path='/TheNewestMusic' element={<TheNewestMusic/>} />
          <Route path='/GenreMusic' element={<GenreMusic/>} />
          <Route path='/MelonDJ' element={<MelonDJ/>} />
          <Route path='/MelonTV' element={<MelonTV/>} />
          <Route path='/StarPost' element={<StarPost/>} />
          <Route path='/Magazine:MagazineID' element={<Magazine/>} />
          <Route path='/MusicAward/:MusicAwardID' element={<MusicAward/>} />
          <Route path='/MusicWave/:MusicWaveID' element={<MusicWave/>} />
          <Route path='/*' element={<Not/>} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
