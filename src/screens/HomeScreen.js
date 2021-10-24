import React from 'react'
import "./HomeScreen.css";
import Nav from "../Nav"
import Banner from "../Banner"
import requests from '../Request';
import Row from '../Row';

function HomeScreen() {
    return (
      <div className="HomeScreen">
        {/* navbar */}
        <Nav />

        {/* Banner */}
        <Banner />

        {/* Row */}
        <Row 
            title="Trending Now" 
            fetchUrl={requests.fetchTrending} 
            isLargeRow
        />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comdedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      </div>
    );
}

export default HomeScreen;
