const Dev = require('../models/Dev');
const parseStringAsArray = require('../Utils/parseStringAsArray');

module.exports = {
  async index(req, res) {
    const { techs, latitude, longitude } = req.query;
    const latitudeNumber = parseFloat(latitude);
    const longitudeNumber = parseFloat(longitude);

    const techsArray = parseStringAsArray(techs);

    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitudeNumber, latitudeNumber],
          },
          $maxDistance: 10000,
        },
      },
    });

    return res.json({ devs });
  },
};
