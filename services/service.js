import axios from 'axios'

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = 'api_key=50dcdbaa26648f7d1599015bab3ce2e9';


export const getPopularMovies = async () => {
    const resp = await axios.get( `${apiUrl}/movie/popular?${apiKey}`);
    return resp.data.results;
};


export const getUpcomingMovies = async () => {
    const resp = await axios.get(`${apiUrl}/movie/upcoming?${apiKey}`);
    return resp.data.results;
  };
  
  export const getPopularTv = async () => {
    const resp = await axios.get(`${apiUrl}/tv/popular?${apiKey}`);
    return resp.data.results;
  };
  
  export const getFamilyMovies = async () => {
    const resp = await axios.get(
      `${apiUrl}/discover/movie?${apiKey}&with_genres=10751`,
    );
    return resp.data.results;
  };
  
  export const getDocumentaryMovies = async () => {
    const resp = await axios.get(
      `${apiUrl}/discover/movie?${apiKey}&with_genres=99`,
    );
    return resp.data.results;
  };



  export const getMovie = async id => {
    const resp = await axios.get(`${apiUrl}/movie/${id}?${apiKey}`);
    return resp.data;
  };
  
  export const searchMovieTv = async (query, type) => {
    const resp = await axios.get(
      `${apiUrl}/search/${type}?${apiKey}&query=${query}`,
    );
    return resp.data.results;
  };