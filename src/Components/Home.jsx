import React from 'react';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Navbar from './Navbar';

function Home() {
  return (
    
    <section className="home">
      <Navbar/>

      <Banner fetchUrl={requests.fetchNetflixOriginals}/>

      <div className="row_all">
        <Row
          className="large_row"
          title={'NETFLIX ORIGINALS'}
          fetchUrl={requests.fetchNetflixOriginals}
          isLargeRow
        />
        <Row title={'Trending Now'} fetchUrl={requests.fetchTrending} />
        <Row title={'Top Rated'} fetchUrl={requests.fetchTopRated} />
        <Row title={'Action Movies'} fetchUrl={requests.fetchActionMovies} />
        <Row title={'Comedy Movies'} fetchUrl={requests.fetchComedyMovies} />
        <Row title={'Horror Movies'} fetchUrl={requests.fetchHorrorMovies} />
        <Row title={'Romance Movies'} fetchUrl={requests.fetchRomanceMovies} />
        <Row title={'Documantaries'} fetchUrl={requests.fetchDocumantaries} />
      </div>

      <div className="genreBox"></div>
    </section>
  );
}

export default Home;
