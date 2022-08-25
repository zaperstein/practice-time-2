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
Song.create(title: "Eleanor Rigby", lyrics: "Ah, look at all the lonely people
Ah, look at all the lonely people
Eleanor Rigby
Picks up the rice in the church where a wedding has been
Lives in a dream
Waits at the window
Wearing the face that she keeps in a jar by the door
Who is it for?
All the lonely people
Where do they all come from?
All the lonely people
Where do they all belong?
Father McKenzie
Writing the words of a sermon that no one will hear
No one comes near
Look at him working
Darning his socks in the night when there's nobody there
What does he care?
All the lonely people
Where do they all come from?
All the lonely people
Where do they all belong?
Ah, look at all the lonely people
Ah, look at all the lonely people
Eleanor Rigby
Died in the church and was buried along with her name
Nobody came
Father McKenzie
Wiping the dirt from his hands as he walks from the grave
No one was saved
All the lonely people (ah, look at all the lonely people)
Where do they all come from?
All the lonely people (ah, look at all the lonely people)
Where do they all belong?", original_artist: "The Beatles")
Song.create(title: "My Cherie Amour", lyrics: "La, la, la, la, la, la
La, la, la, la, la, la
My Cherie amour, lovely as a summer day
My Cherie amour, distant as the Milky Way
My Cherie amour, pretty little one that I adore
You're the only girl my heart beats for
How I wish that you were mine
In a café or sometimes on a crowded street
I've been near you, but you never noticed me
My Cherie amour, won't you tell me how could you ignore
That behind that little smile I wore
How I wish that you were mine
La, la, la, la, la, la
La, la, la, la, la, la
La, la, la, la, la, la
La, la, la, la, la, la
Maybe someday, you'll see my face among the crowd
Maybe someday, I'll share your little distant cloud
Oh, Cherie amour, pretty little one that I adore
You're the only girl my heart beats for
How I wish that you were mine
La, la, la, la, la, la
La, la, la, la, la, la
La, la, la, la, la, la
La, la, la, la, la, la", original_artist: "Stevie Wonder")
Song.create(title: "Mama Said", lyrics: "Mama said there'll be days like this
There'll be days like this, mama said
(Mama said, mama said)
Mama said there'll be days like this
There'll be days like this, my mama said
(Mama said, mama said)
I went walking the other day and
Everything was going fine
Met a little boy named Billy Joe
And then I almost lost my mind
Mama said there'll be days like this
There'll be days like this, my mama said
(Mama said, mama said)
Mama said there'll be days like this
There'll be days like this, my mama said
And then she said someone would look at me
Like I'm looking at you someday
Then I might find
I don't want you any old way but I don't worry 'causre
Mama said there'll be days like this
There'll be days like this, my mama said
(Mama said, mama said)
Mama said there'll be days like this
There'll be days like this, my mama said
My eyes are wide open
But all that I can see is
Chapel bells a-tollin'
For everyone but-a me but I don't worry 'cause
Mama said there'll be days like this
There'll be days like this, my mama said
(Mama said, mama said)
Mama said there'll be days like this
There'll be days like this, my mama said
don't you worry
(Mama said, mama said, hey, hey) don't you worry, now
(Mama said, mama said, hey, hey)
(Mama said, mama said, hey, hey) mama said there'll be days like this
(Mama said, mama said, hey, hey) there'll be days like this, my mama said
(Mama said, mama said, hey, hey) mama said there'll be days like this
(Mama said, mama said, hey, hey) there'll be days like this, my mama said
(Mama said, mama said, hey, hey) don't you worry
", original_artist: "The Shirelles")
Song.create(title: "Everyday People", lyrics: "Sometimes I'm right and I can be wrong
My own beliefs are in my song
The butcher, the banker, the drummer and then
Makes no difference what group I'm in
I am everyday people, yeah, yeah
There is a blue one who can't accept
The green one for living with
A fat one tryin' to be a skinny one
Different strokes for different folks
And so on and so on and scooby-dooby-dooby
We got to live together
I am no better and neither are you
We're all the same, whatever we do
You love me, you hate me
You know me and then
You can't figure out the bag I'm in
I am everyday people
There is a long hair
That doesn't like the short hair
For being such a rich one
That will not help the poor one
Different strokes for different folks
And so on and so on, scooby-dooby-dooby
We got to live together
There is a yellow one that won't
Accept the black one
That won't accept the red one
That won't accept the white one
Different strokes for different folks
And so on and so on and
Scooby-dooby-dooby
I am everyday people
", original_artist: "Sly & The Family Stone")
Song.create(title: "Good Vibrations", lyrics: "I-I love the colorful clothes she wears
And the way the sunlight plays upon her hair
I hear the sound of a gentle word
On the wind that lifts her perfume through the air
I'm pickin' up good vibrations
She's giving me the excitations (oom bop bop)
I'm pickin' up good vibrations (good vibrations, oom bop bop)
She's giving me the excitations (excitations, oom bop bop)
I'm pickin' up good vibrations (oom bop bop)
She's giving me the excitations (excitations, oom bop bop)
I'm pickin' up good vibrations (oom bop bop)
She's giving me the excitations (excitations)
Close my eyes, she's somehow closer now
Softly smile, I know she must be kind
When I look in her eyes
She goes with me to a blossom world
I'm pickin' up good vibrations
She's giving me excitations (oom bop bop)
I'm pickin' up good vibrations (good vibrations, oom bop bop)
She's giving me excitations (excitations, oom bop bop)
Good, good, good, good vibrations (oom bop bop)
She's giving me excitations (excitations, oom bop bop)
Good, good, good, good vibrations (oom bop bop)
She's giving me excitations (excitations)
Ah, ah, my my, what elation
I don't know where but she sends me there
Oh, my my, what a sensation
Oh, my my, what elation
Oh, my my, what
Gotta keep those lovin' good vibrations a-happenin' with her
Gotta keep those lovin' good vibrations a-happenin' with her
Gotta keep those lovin' good vibrations a-happenin'
Good, good, good, good vibrations (oom bop bop)
She's giving me the excitations (excitations, oom bop bop)
I'm pickin' up good vibrations
Na na na na na, na na na
Na na na na na, na na na (bop bop-bop-bop-bop, bop)
Do do do do do, do do do (bop bop-bop-bop-bop, bop)
Do do do do do, do do do (bop bop-bop-bop-bop, bop)", original_artist: "The Beach Boys")
Song.create(title: "How Sweet It Is (To Be Loved By You", lyrics: "How sweet it is to be loved by you
How sweet it is to be loved by you
I needed the shelter of someone's arms
And there you were
I needed someone to understand my ups and downs
And there you were
With sweet love and devotion
Deeply touching my emotion
I want to stop and thank you, baby
I wanna stop and thank you baby, yes I do
How sweet it is to be loved by you
Feels so fine
How sweet it is to be loved by you
I close my eyes at night
Wondering where would I be without you in my life
Everything I did was just a bore
Everywhere I went it seems I'd been there before
But you brighten up for me all of my days
With a love so sweet in so many ways
I wanna stop and thank you, baby
I just wanna stop and thank you baby, oh yes
How sweet it is to be loved by you
It's like sugar sometimes
How sweet it is to be loved by you
You were better to me than I was to myself
For me, there's you and there ain't nobody else
I wanna stop and thank you, baby
I just wanna stop and thank you baby, oh now
How sweet it is to be loved by you
How sweet it is to be loved by you
How sweet it is to be loved by you
It's like jelly, baby, oh now
How sweet it is to be loved by you, oh now
How sweet it is to be loved by you
Just like honey to the bee baby, yeah now
Na, na, na, to be loved by you", original_artist: "Marvin Gaye")
Song.create(title: "These Boots Are Made For Walkin'", lyrics: "You keep sayin' you've got somethin' for me
Somethin' you call love but confess
You've been a'messin' where you shouldn't 've been a'messin'
And now someone else is getting all your best
These boots are made for walkin'
And that's just what they'll do
One of these days these boots are gonna walk all over you
Ya
You keep lyin' when you oughta be truthin'
And you keep losing when you oughta not bet
You keep samin' when you oughta be a'changin'
Now what's right is right but you ain't been right yet
These boots are made for walkin'
And that's just what they'll do
One of these days these boots are gonna walk all over you
You keep playin' where you shouldn't be playin'
And you keep thinkin' that you'll never get burnt (ha)
I just found me a brand new box of matches, yeah
And what he knows you ain't had time to learn
These boots are made for walkin'
And that's just what they'll do
One of these days these boots are gonna walk all over you
Are you ready, boots? Start walkin'", original_artist: "Nancy Sinatra")
Song.create(title: "I Fall To Pieces", lyrics: "I fall to pieces
Each time I see you again
I fall to pieces
How can I be just your friend?
You want me to act like we've never kissed
You want me to forget (to forget)
Pretend we've never met (never met)
And I've tried and I've tried
But I haven't yet
You walk by and I fall to pieces
I fall to pieces
Each time someone speaks your name (speaks your name)
I fall to pieces
Time only adds to the flame
You tell me to find someone else to love
Someone who love me too (love me too)
The way you used to do (used to do)
But each time I go out with someone new
You walk by and I fall to pieces
You walk by and I fall to pieces", original_artist: "Patsy Cline")
Song.create(title: "I Say A Little Prayer For You", lyrics: "The moment I wake up
Before I put on my makeup (makeup)
I say a little (prayer for you)
And while I'm combing my hair now
And wondering what dress to wear now (wear now)
I say a little (prayer for you)
whenever
(You'll stay in my heart and I will love you)
(Forever) forever (and ever) and ever
(We never will part, oh, how I love you)
(Together) together (together) together
(That's how it must be to live without you)
(Would only mean heartbreak for me) Mmm-hmm
I run for the bus, dear
But while riding, I think of us, dear (us, dear)
I say a little (prayer for you)
And at work, I just take time
And all through my coffee break time (break time)
I say a little (prayer for you)
whenever
(You'll stay in my heart and I will love you)
(Forever) forever (and ever) and ever
(We never will part, oh, how I love you)
(Together) together (together) together
(That's how it must be to live without you)
(Would only mean heartbreak for me) Nobody but me
and ever
(You'll stay in my heart and I will love you)
(Forever) forever (and ever) and ever
(We never will part, oh, how I love you)
(Together) together (together) together
(That's how it must be to live without you)
(Would only mean heartbreak for me) Mmm-mmm-hmm
My darling, believe me (believe me)
For me, there is no one but you
Please love me true
I'm in love with you (answer my prayer)
Answer my prayer, baby (answer my prayer)
Say you'll love me true (answer my prayer)
Answer my prayer, baby (answer my prayer)
And...
whenever-ever!
(You'll stay in my heart and I will love you)
(Forever) forever (and ever) and ever
(We never will part, oh, how I love you)
(Together) together (together) together
(That's how it must be to live without you)
(Would only mean heartbreak for me) Oh, nobody but me
My darling, believe me (believe me)
For me, there is no one but you
Please love me true
This is my prayer (answer my prayer, baby)
Answer my prayer now, baby (answer my prayer, baby)
This is my prayer (answer my prayer, baby)
Answer it right now, baby (answer my prayer, baby)
Say you'll love me true (answer my prayer, baby)
This is my prayer, baby (answer my prayer, baby)
I'm in love with you (answer my prayer)", original_artist: "Aretha Franklin")
Song.create(title: "Sunday Kind of Love", lyrics: "I want a Sunday kind of love
A love to last past Saturday night
And I'd like to know it's more than love at first sight
And I want a Sunday kind of love
Oh, yeah, yeah
I want a, a, a love that's on the square
Can't seem to find somebody
Someone to care
And I'm on a lonely road that leads to nowhere
I need a Sunday kind of love
I do my Sunday dreaming, oh, yeah
And all my Sunday scheming
Every minute, every hour, every day
Oh, I'm hoping to discover
A certain kind of lover
Who will show me the way
And my arms need someone
Someone to enfold
To keep me warm when Mondays and Tuesdays grow cold
Love for all my life, to have and to hold
Oh, and I want a Sunday kind of love
Oh, yeah, yeah, yeah
I don't want a Monday, Tuesday
A Wednesday or Thursday
Friday or Saturday
Oh, nothing but Sunday oh, yeah, yeah
I want a Sunday, Sunday
I want a Sunday kind of love
Oh, yeah
Sunday, Sunday, Sunday kind of love", original_artist: "Etta James")
Song.create(title: "Time Of The Season", lyrics: "It's the time of the season
When love runs high
In this time, give it to me easy
And let me try with pleasured hands
To take you in the sun
To promised lands
To show you every one
It's the time of the season for loving
What's your name? (What's your name?)
Who's your daddy? (Who's your daddy?)
(He rich) is he rich like me?
Has he taken (has he taken)
Any time (any time)
(To show) to show you what you need to live?
Tell it to me slowly
Tell you what
I really wanna know
It's the time of the season for loving
What's your name? (What's your name?)
Who's your daddy? (Who's your daddy?)
(He rich) is he rich like me?
Has he taken (has he taken)
Any time (any time)
(To show) to show you what you need to live?
Tell it to me slowly
Tell you what
I really wanna know
It's the time of the season for loving", original_artist: "The Zombies")
Song.create(title: "Walk on By", lyrics: "If you see me walking down the street
And I start to cry each time we meet
Walk on by, walk on by
Make believe
That you don't see the tears
Just let me grieve
In private 'cause each time I see you
I break down and cry
And walk on by (don't stop)
And walk on by (don't stop)
And walk on by
I just can't get over losing you
And so if I seem, broken and blue
Walk on by
Walk on by
Foolish pride
That's all that I have left
So let me hide
The tears and the sadness you gave me
When you said goodbye
Walk on by (don't stop)
Walk on by (don't stop)
Walk on by (don't stop)
Walk on
Walk on by
Walk on by
Foolish pride
That's all that I have left
So let me hide
The tears and the sadness you gave me
When you said goodbye
Walk on by (don't stop)
Walk on by (don't stop)
Now you really gotta go, so walk on by (don't, don't stop)
Baby, leave, you'll never see the tears I cry (don't, don't stop)
Now you really gotta go, so walk on by (don't, don't stop)
Mmm, baby, leave, you'll never see the tears I cry (don't, don't stop)
Now you really gotta go, so walk on by (don't, don't)", original_artist: "Dionne Warwick")
Song.create(title: "Isn't She Lovely", lyrics: "Isn't she lovely?
Isn't she wonderful?
Isn't she precious?
Less than one minute old
I never thought through love we'd be
Making one as lovely as she
But isn't she lovely made from love?
Isn't she pretty?
Truly the angel's best
Boy, I'm so happy
We have been Heaven-blessed
I can't believe what God has done
Through us, He's given life to one
But isn't she lovely made from love?
Isn't she lovely?
Life and love are the same
Life is Aisha
The meaning of her name
Londie, it could have not been done
Without you who conceived the one
That's so very lovely made from love
Hey!", original_artist: "Stevie Wonder")
Song.create(title: "Ain't No Sunshine", lyrics: "Ain't no sunshine when she's gone.
It's not warm when she's away.
Ain't no sunshine when she's gone,

and she's always gone too long
anytime she goes away.

Wonder this time where she's gone?
Wonder if she's gone to stay?
Ain't no sunshine when she's gone

and this house just ain't no home
anytime she goes away.

And I know, I know, I know, I know, I know, I know, I know, I know, I know, I know, I know, I know, I know, I know, I know, I know, I know, I know, I know, I know...
Hey, I ought 'a leave a young thing alone,
but ain't no sunshine when she's gone.

Ain't no sunshine when she's gone.
Only darkness every day.
Ain't no sunshine when she's gone

and this house just ain't no home
any time she goes away.

Anytime she goes away.
Anytime she goes away.
Anytime she goes away.", original_artist: "Bill Withers")
Song.create(title: "Move On Up", lyrics: "Hush now child
And don't you cry
Your folks might understand you
By and by
Just move on up
Towards your destination
Though you may find, from time to time
Complication
Bite your lip
And take a trip
Though there may be wet road ahead
And you cannot slip
Just move on up
For peace you will find
Into the steeple of beautiful people
Where there's only one kind
So hush now, child
And don't you cry
Your folks might understand you
By and by
Move on up
And keep on wishin'
Remember your dream is your only scheme
So keep on pushin'
Take nothing less
Than the supreme best
Do not obey rumors people say
'Cause you can pass the test
Just move on up
To a greater day
With just a little faith, if you put your mind to it
You can surely do it
", original_artist: "Curtis Mayfield")
Song.create(title: "Where Did Our Love Go", lyrics: "Baby, baby, baby don't leave me
Ooh, please don't leave me all by myself
I've got this burning, burning, yearning feelin' inside me
Ooh, deep inside me and it hurts so bad
You came into my heart (baby, baby) so tenderly
With a burning love (baby, baby)
That stings like a bee (baby, baby)
Now that I surrender (baby, baby) so helplessly
You now want to leave (baby, baby)
Ooh, you wanna leave me (baby, baby)
Ooh (baby, baby)
Baby, baby, where did our love go?
Ooh, don't you want me?
Don't you want me no more (baby, baby)?
Ooh, baby
Baby, baby, where did our love go?
And all your promises of a love forevermore!
I've got this burning, burning, yearning feelin' inside me
Ooh, deep inside me, and it hurts so bad
Before you won my heart (baby, baby)
You were a perfect guy
But now that you got me
You wanna leave me behind (baby, baby)
Ooh, baby
Baby, baby, baby don't leave me
Ooh, please don't leave me all by myself (baby, baby)
Ooh baby, baby, baby", original_artist: "The Supremes")


puts "Creating Practice Notes"
PracticeNote.create(title: "Reggies gig", content: "Tighter on the drums", song_id: 2)
PracticeNote.create(title: "Shop talk", content: "Could use more work on song 3", song_id: 3)
PracticeNote.create(title: "If you know you know", content: "Yoko is no longer allowed in practice", song_id: 4)
PracticeNote.create(title: "Fix by friday", content: "Harmonies need work", song_id: 7)
PracticeNote.create(title: "for Allie", content: "Don't forget to breathe", song_id: 9)
PracticeNote.create(title: "", content: "work out drums and bass", song_id: 10)
PracticeNote.create(title: "", content: "Work on coordinating outfits", song_id: 10)

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