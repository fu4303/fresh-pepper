import React from "react";
import Banner from "./Banner";
import Row from "./Row";
import requestURLs from "./requests";

function Home() {
  return (
    <div>
      <Banner />
      <Row title="Trending Now" fetchUrl={requestURLs.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={requestURLs.fetchTopRated}/>
      <Row title="Action Movies" fetchUrl={requestURLs.fetchActionMovies}/>
      <Row title="Netflix Originals" fetchUrl={requestURLs.fetchNetflixOrignals}/>
    </div>
  );
}

export default Home;
