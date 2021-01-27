import React from 'react';
import Row from './Row';
import Banner from './Banner';
import Nav from './Nav';
import './App.css';
import requests from './requests';

function App() {
  return (
    <div className="app">
      <Nav/>
      <Banner/>
      <Row title="Neflix Originals" fetchUrl={requests.fetchNeflixOriginals} isLargeRow/>
      <Row title="Em alta" fetchUrl={requests.fetchTrending} />
      <Row title="Populares na Netflix" fetchUrl={requests.fetchTopRated}/>
      <Row title="Ação" fetchUrl={requests.fetchActionMovies}/>
      <Row title="Comédia" fetchUrl={requests.fetchComedyMovies}/>
      <Row title="Terror" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title="Documentário" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
