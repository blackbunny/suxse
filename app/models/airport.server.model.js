'use strict';
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var AirportSchema = new Schema({
                        app_location_type: String,
                        name: String,
                        iata_code: String,
                        city_name: String,
                        city_code: String,
                        country_name: String,
                        country_code: String,
                        visa_type: String,
                        server: Number,
                        status:{ type: Boolean, default: false }
                    });
mongoose.model('airports', AirportSchema);
