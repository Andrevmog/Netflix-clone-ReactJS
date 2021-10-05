const API_KEY = '8b9ee7ee31d1ff4449a25121ddc5b5d5';
const API_BASE = 'https://api.themoviedb.org/3';
const API_LANGUAGE = 'pt-BR';

/* eslint-disable */


const basicFetch = async (endpoint) => {
    const req = await fetch(`${API_BASE}${endpoint}language=${API_LANGUAGE}&api_key=${API_KEY}`);
    const json = await req.json();
    return json;
}


export default {
    getHomeList: async () => {
        return[
            {
                slug: 'originals',
                title: 'Originais do Netflix',
                items: await basicFetch('/discover/tv?with_network=213&')
            },
            {
                slug: 'trending',
                title: 'Recomendados para você',
                items: await basicFetch('/trending/all/week?')
            },
            {
                slug: 'toprated',
                title: 'Em Alta',
                items: await basicFetch('/movie/top_rated?')
            },
            {
                slug: 'action',
                title: 'Ação',
                items: await basicFetch('/discover/movie?with_genres=28&')
            },
            {
                slug: 'comedy',
                title: 'Comédia',
                items: await basicFetch('/discover/movie?with_genres=35&')
            },
            {
                slug: 'horror',
                title: 'Terror',
                items: await basicFetch('/discover/movie?with_genres=27&')
            },
            {
                slug: 'romance',
                title: 'Romance',
                items: await basicFetch('/discover/movie?with_genres=10749&')
            },
            {
                slug: 'documentary',
                title: 'Documentários',
                items: await basicFetch('/discover/movie?with_genres=99&')
            },
        ];
    },

    getMovieInfo: async (movieId, type) => {
        let info = {};

        if(movieId){
            switch(type){
                case 'movie':
                    info = await basicFetch(`/movie/${movieId}?`);
                break;
                case 'tv':
                    info = await basicFetch(`/tv/${movieId}?`);
                break;
            }
        }

        return info;
    }
}