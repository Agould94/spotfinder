# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'faker'
# require 'unsplash'

# result = Unsplash::Photo.search('food')
# images = result.map do |obj|
#    return obj.to_h[:urls]["small"]
# end
# puts images


puts "Seeding Users"

20.times do |count|
    User.create(
        name: Faker::Name.name,
        username: Faker::Internet.username,
        email: Faker::Internet.safe_email,
        password: Faker::Internet.password,
        vibe: Faker::Adjective.positive,
        zip: Faker::Address.zip_code
    )
end

puts "Users created"

puts "Seeding Restauraunts"

food_types = ["American", "Italian", "Chinese", "Mexican"]

50.times do |count|
    Restaurant.create(
        address: Faker::Address.full_address,
        phone_number: Faker::PhoneNumber.phone_number,
        vibe: Faker::Adjective.positive,
        name: Faker::Restaurant.name,
        image_url: 'image_url',
        food_type: food_types.sample
    )
end

puts "Restaurants created"

puts "seeding reviews"

30.times do |count|
    Review.create(
        stars: rand(1..5),
        content: Faker::Hipster.paragraph,
        restaurant_id: rand(1..50),
        user_id: rand(1..20)
    )
end


puts "database seeded"