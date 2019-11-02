"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var reservationSchema = new Schema({
    firstName: String,
    lastName: String,
    arrivalDate: String,
    departureDate: String,
});
var Reservation = mongoose.model('reservation', reservationSchema);
module.exports = {
    Reservation: Reservation
};
