import { Token } from "../Helpers/Token";

export function getFilmsFromApiWithSearchedText (text) {
    const url = 'https://api.themoviedb.org/3/movie/550?api_key=' + Token  + '&language=fr&query=' + text
    return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.error(error))
    
}

export function getImageFromApi (name) {
    return 'https://image.tmdb.org/t/p/w300' + name
  }
