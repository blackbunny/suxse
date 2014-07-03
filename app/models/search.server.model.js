'use strict';
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var SearchSchema = new Schema({
                        session: String,
                        date: {type: Date, default: Date.now},
                        locale: String,
                        'price': Number,
                        adult_count: Number,
                        currency: String,
                        search_request: {
                            request: Array,
                            response: Array
                        },
                        fares_request: {
                            request: Array,
                            response: Array
                        }
                    });
mongoose.model('searches', SearchSchema);
