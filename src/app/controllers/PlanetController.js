const Planet = require('../models/Planet');
const SwapiService = require('../../services/SwapiService');
const yup = require('yup');

class PlanetController {
    async getPlanetById(req, res){

        try {
            console.log("param id = ", req)
            if(req.params.id){
                const { id } = req.params;

                let planet = await SwapiService.getPeople(id);

                if(planet){
                    let home = await SwapiService.getHome(id);
                    let species = await SwapiService.getSpecies(id);
                    let films = await SwapiService.getFilms(id);
                    planet.homeworld = home;
                    planet.species = species;
                    planet.films = films;
                    return res.status(200).json({
                        success: true, 
                        planet
                    });
                }else{
                    return res.status(404).json({
                        success: false,
                        description: 'Planet not found.'
                    });
                }

            }else{
                return res.status(400).json({
                    success: false,
                    description: 'Id parameter not found.'
                });
            }

        }
        catch(error) {
            return res.status(400).json({
                success: false,
                description: error.message
            });
        }
    }
}

module.exports = new PlanetController();