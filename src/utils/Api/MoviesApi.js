// export const MOVIE_URL = 'https://api.nomoreparties.co';
export const BASE_URL = 'http://localhost:3002';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

export const getMovies = () => {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
        method: 'GET',
        headers: headers,

    })
        .then((res) => {

            if (!res.ok) {
                return Promise.reject(res.status);
            }
            return res.json();
        })
        .catch(err => console.log(err));

}
