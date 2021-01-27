const API_KEY = "2bc59a69b0508e899c48570d68154a26";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=pt-br`,
    fetchNeflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-br`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=pt-br`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-br`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-br`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-br`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=pt-br`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&language=pt-br`,
}

export default requests;
