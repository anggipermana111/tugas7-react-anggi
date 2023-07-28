import React from 'react'
import Header from './components/Header'
import { useState } from 'react';
import { createContext } from 'react';
import Main from './components/Main';
import Koperasi from '../public/koperasi.png'
import Movie from '../public/movie.png'
import Inventory from '../public/Inventory.png'
import Tiket from '../public/tiket.png'
import Footer from './components/Footer';

export const ThemeContext = createContext({
  theme: null,
  setTheme: () => { },
});

const projects = [
  {
      id: 1,
      nama: "Project Koperasi",
      deskripsi: "ini adalah projek pertama saya (Anggi Permana), dan dibuat dengan sepenuh hati secara maksimal",
      link: "https://github.com/anggipermana111/koperasi-anggi-projekan-bahasa-C",
      gambar: Koperasi,
      view: null
  },
  {
      id: 2,
      nama: "Project Tricksters Movies",
      deskripsi: "ini adalah projek website pertama saya (Anggi Permana), dan dibuat dengan sepenuh hati secara maksimal",
      link: "https://github.com/anggipermana111/projek-movie",
      gambar: Movie,
      view: 'https://trickstersmovie.000webhostapp.com/',

  },
  {
      id: 3,
      nama: "Project Monica Jaya",
      deskripsi: "ini adalah projek desktop pertama saya (Anggi Permana), dan dibuat dengan sepenuh hati secara maksimal",
      link: "https://github.com/anggipermana111/projektokobangunan",
      gambar: Inventory,
      view: null
  },
  {
      id: 4,
      nama: "Project Tiket Go",
      deskripsi: "ini adalah projek full stack pertama saya (Anggi Permana), dan dibuat dengan sepenuh hati secara maksimal",
      link: "https://github.com/anggipermana111/UasJavaLanjutan",
      gambar: Tiket,
      view: null
  }
]

const App = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme, projects }}>
      <div className={`body-${theme}`}>
        <Header />
        <Main />
        <Footer/>
      </div>
    </ThemeContext.Provider>
  )
}

export default App