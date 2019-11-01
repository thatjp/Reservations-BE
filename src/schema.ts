const { Reservation } = require('./models/Reservation')

export const typeDefs = `

  type Query { 
    getAllReservations: [Reservation],
    getSingleReservation(id: ID!): Reservation
  }

  type Mutation { 
    createReservation(
      firstName: String!,
      lastName: String!,
      arrivalDate: String!,
      departureDate: String!,
    ): Reservation,
  }

  type Reservation {
    _id: ID!,
    firstName: String, 
    lastName: String, 
    arrivalDate: String, 
    departureDate: String 
  }
`

export const resolvers = {
  Query: { 
    getAllReservations: async () => Reservation.find(),
    getSingleReservation: async (parent:any, args:any, ctx:any, info:any) => {
      const reservation = await Reservation.findById(args.id)
      return reservation
    },
  }, 
  Mutation: { 
    createReservation: async (parent:any, args:any) => {
      let response = await Reservation.create(args)
      return response
    }
  },
}