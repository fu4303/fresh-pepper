const API_KEY = '48504c42f2d14bb38eb91a372826d53d'

const requestURLs = {
    fetchTrending: `/trending/all/day?api_key=${API_KEY}`,
    fetchGenres: `/genre/movie/list?api_key=${API_KEY}`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchNetflixOrignals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchPopular: `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
}

export default requestURLs;