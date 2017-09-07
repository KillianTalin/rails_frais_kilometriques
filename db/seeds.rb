puts 'Cleaning database...'
Ride.destroy_all
User.destroy_all

puts 'Creating users...'
users_attributes = [
  {
    email:      "killian.talin@gmail.com",
    password:   "123456",
    first_name: "Killian",
    last_name:  "Talin",
  }
]
User.create!(users_attributes)

puts 'Creating rides...'
rides_attributes = [
  {
    date:           20170709,
    reason:         "Achat de cartouches d'encre au magasin",
    start_place:    "16 rue Villa Gaudelet, 75011 Paris",
    end_place:      "10 rue de la paix, 75002 Paris",
    ride_kilometer: 20,
    two_way_trip:   true,
    user:           User.first
  },
  {
    date:           20170809,
    reason:         "Trajet retour Le Wagon / Maison",
    start_place:    "16 rue Villa Gaudelet, 75011 Paris",
    end_place:      "20 avenue de Lespinasse, 93250 Villemomble",
    ride_kilometer: 12,
    two_way_trip:   false,
    user:           User.first
  }
]
Ride.create!(rides_attributes)

puts 'Finished!'
