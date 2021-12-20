const mongoose = require('mongoose');

const PlanetSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        climate: {
            type: String,
            required: true,
            trim: true
        },
        terrain: {
            type: String,
            required: true,
            trim: true
        },
        appearences: {
            type: Number,
            required: true,
            default: 0,
        }
    }
);

const Planet = mongoose.model('planet', PlanetSchema);

module.exports = Planet;
