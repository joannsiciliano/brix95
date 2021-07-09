# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Strain.destroy_all

Strain.create({
  name: "Patrick SCHW-Haze-ee",
  thc_content: 20.06,
  species: "hybrid",
  description: "This sativa-dominant hybrid will have you dirty dancing in no time, while also fearing that there may be paranormal beings in the house. Not recommended with throwing pots."
})

Strain.create({
  name: "Gasper",
  thc_content: 9.43,
  species: "sativa",
  description: "Not strong, but friendly!"
})

Strain.create({
  name: "Off Diesel",
  thc_content: 15.55,
  species: "hybrid",
  description: "This strain would be delicious, except it's not because it's laced with bug spray."
})