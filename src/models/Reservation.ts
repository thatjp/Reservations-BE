export {};
const mongoose = require('mongoose')
const { Schema } = mongoose

const reservationSchema = new Schema({
  firstName: String,
  lastName: String,
  arrivalDate: String,
  departureDate: String,
})

const Reservation = mongoose.model('reservation', reservationSchema)

module.exports = {
  Reservation
}