const axios = require('axios');

const swapi = axios.create({ baseURL: 'https://swapi.py4e.com/api' });


class SwapiService extends Error{

    async getPeople(id){
        const swapiResponse = await swapi.get(`/people/${id}`);
        return swapiResponse.data;
    }
    async getHome(id){
        const swapiResponse = await swapi.get(`/planets/${id}`);
        return swapiResponse.data;
    }
    async getFilms(id){
        const swapiResponse = await swapi.get(`/films/${id}`);
        return swapiResponse.data;
    }
    async getSpecies(id){
        const swapiResponse = await swapi.get(`/species/${id}`);
        return swapiResponse.data;
    }
}

module.exports = new SwapiService();