import MovieSearch from "./components/MovieSearch";
import Movielist from "./components/Movielist";
import Navbar from "./components/Navbar";
import Newmovie from "./components/Newmovie";
import { MovieProvider } from "./contexts/MovieContext";
import Movielist2 from "./components/Movielist2";

function App() {
  return (
    <main>
      <MovieProvider>
        <Navbar />
        <MovieSearch />
        <Newmovie />
        <Movielist />
        <Movielist2 />
      </MovieProvider>
    </main>
  );
}

export default App;
