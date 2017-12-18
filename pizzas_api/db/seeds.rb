# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

50.times {
  Pizza.create({name: (Faker::Food.dish), toppings: (Faker::Food.ingredient + ', ' + Faker::Food.ingredient + ', ' + Faker::Food.ingredient), price: 10})
}
