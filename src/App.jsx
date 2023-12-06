import { useState, useEffect } from 'react'
/*import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'


function App() {
  const [ghibliMovies, setGhibliMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [sortBy, setSortBy] = useState('title');
  
  useEffect(() =>{
    fetch(`https://studioghibliapi-d6fc8.web.app/films`)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      setGhibliMovies(data);
    })
  .catch(error => console.error(error));
  },[]);
  const handleSort = (sortBy) => {
    setSortBy(sortBy);
    let sorted = [...ghibliMovies];
    if (sortBy == 'title'){
      sorted.sort((a, b) => a.title.localeCompare(b.title));
    }else if (sortBy === 'director') {
      sorted,sort((a,b) => a.director.localeCompare(b.director));
    }
  setSortedMovies(sorted);
  console.log('Movies sorted by ${sortBy}.');
  };

  return (
    <>
    <h1>Ghibli Movies</h1>
<ul className="rotateMovies">
  {ghibliMovies.map((movie, index) => (
    <li key={index} className="card">
      
      <div className="circle"/>
        <img src={movie.image} alt={`${movie.title} poster`} />
        <div class="overlay">
          
          
        </div>
    </li>
  ))}
    </ul>
      
    </>
  )
}

export default App
