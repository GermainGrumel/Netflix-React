import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="SciFi Movies" fetchUrl={requests.fetchSciFi} />
      <Row title="Western Movies" fetchUrl={requests.fetchWestern} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Mystery Movies" fetchUrl={requests.fetchMystery} />
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimation} />
      <Row title="TV Movies" fetchUrl={requests.fetchTV} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Top Rated Movies" fetchUrl={requests.fetchTopRated} />
    </div>
  );
}

export default App;
