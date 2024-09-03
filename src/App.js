import './App.css';
import SearchFilter from './components/SearchFilter';

function App() {
  return (
  <div className="container">
      <h1>Movie DB</h1>
      <div className="movie-container">
        <SearchFilter />
      </div>
  </div>
  );
}

export default App;
