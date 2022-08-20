# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
User.destroy_all
Instrument.destroy_all
Song.destroy_all
PracticeNote.destroy_all
Setlist.destroy_all
InstrumentUser.destroy_all
InstrumentSong.destroy_all
SetlistSong.destroy_all


puts "Creating users"
User.create(username: "Becca", password: "artsy", bio: "One artsy beeyatch")
User.create(username: "Evalina", password: "baking", bio: "her cherry pie is divine")
User.create(username: "Maggie", password: "embroidery", bio: "I like to stab things" )

puts "Creating instruments"
Instrument.create(name: "Acoustic Guitar")
Instrument.create(name: "Electric Guitar")
Instrument.create(name: "Rhodes Piano")
Instrument.create(name: "Upright Piano")
Instrument.create(name: "Synthesizer")
Instrument.create(name: "Ukulele")
Instrument.create(name: "Drums")
Instrument.create(name: "Bass")
Instrument.create(name: "Theremin")
Instrument.create(name: "Violin")
Instrument.create(name: "Cello")
Instrument.create(name: "Saxophone")


puts "Creating Songs"
Song.create(title: "Red Dirt Girl",original_artist: "EmmyLou Harris", genre: "Country", lyrics: "Me and my best friend Lillian
And her blue tick hound dog Gideon
Sittin' on the front porch coolin' in the shade
Singin' every song the radio played
Waitin' for the Alabama sun to go down
Two red dirt girls in a red dirt town
Me and Lillian
Just across the line
And a little southeast of Meridian")
Song.create(title: "Oh My Darlin' Clementine", original_artist: "unknown", lyrics: "Oh my darling, oh my darling
Oh my darling, Clementine
You are lost and gone forever
Dreadful sorrow, Clementine", genre: "Folk")
Song.create(title: "Tell It Like It Is", original_artist: "Aaron Neville", lyrics: "If you want something to play with
Go and find yourself a toy
Baby, my time is too expensive
And I'm not a little boy
If you are serious
Don't play with my heart, it makes me furious
But if you want me to love you
Then, baby, I will, girl, you know I will
Tell it like it is
Don't be ashamed to let your conscience be your guide
But I know deep down inside of me
I believe you love me, forget your foolish pride
Life is too short to have sorrow
You may be here today and gone tomorrow
You might as well get what you want
So go on and live, baby, go on and live
Tell it like it is
I'm nothing to play with, go and find yourself a toy
But I
Tell it like it is
My time is too expensive
And I'm not your little boy
Mmm, tell it like it is", genre: "Soul" )


puts "Creating Practice Notes"
PracticeNote.create(title: "Reggies gig", content: "Tighter on the drums", song_id: 2)
PracticeNote.create(title: "Shop talk", content: "Could use more work on song 3", song_id: 3)
PracticeNote.create(title: "If you know you know", content: "Yoko is no longer allowed in practice", song_id: 1)

puts "Creating Setlists"
Setlist.create(name: "Reggie's gig", amt_of_songs: 4, user_id: 3)
Setlist.create(name: "Cheese Shop Gig", amt_of_songs: 8, user_id: 2)
Setlist.create(name: "Bakery gig", amt_of_songs: 5, user_id:1)

puts "creating instrumentusers"
InstrumentUser.create(instrument_id: 1, user_id: 1)
InstrumentUser.create(instrument_id: 2, user_id: 2)
InstrumentUser.create(instrument_id: 3, user_id: 3)
InstrumentUser.create(instrument_id: 1, user_id: 2)
InstrumentUser.create(instrument_id: 2, user_id: 3)
InstrumentUser.create(instrument_id: 3, user_id: 1)

puts "creating setlistsongs"
SetlistSong.create(song_id: 1, setlist_id: 1)

puts "creating instrumentsongs"
InstrumentSong.create(instrument_id: 2, song_id: 3)