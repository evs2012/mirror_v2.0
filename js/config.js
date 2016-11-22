var config = {
    lang: 'en',
    time: {
        timeFormat: 12
    },
    compliments: {
        interval: 60000,
        fadeInterval: 4000,
        morning: [
		'<i class="fa-5x fa-hand-peace-o"></i>',
		'Good morning!',
		'Enjoy your day!',
		'You look great today!',
		'I like your style!',
		'I like your socks!',
		"Go out and live that #hashtag life today",
		'Hello good looking!',
		'I like your face!',
		'I dig your look!',
		"Don't put off until tomorrow what you can accomplish today",
		'You light up the room!',
		'Morning Sunshine!',
		'Take on the day you beautiful land mermaid you!',
		"I hope your day is as nice as your face!",
		"Today is going to be a great day!",
		"You look good!",
		"Yes my king, you are the fairest of them all.",
		"You wake up every day but it is still hard to do."
        ],
        afternoon: [
        '<i class="fa-5x fa-hand-spock-o"></i>',
		'You look nice!',
		'You look terrific!',
		"You're not a total idiot!",
		'Well done!',
		"Average is still better than 50%... so you have that going for you.",
		'Nice fine motor control!',
		'Your skin is radiant!',
		//"Don't worry, you could be Justin Beiber",
		'Killer boots, man!',
		'You look symmetrical!',
		//'Malcom says HIII! tee he he!',
		"Back so soon? Don't you have something to do?",
		"You're sweeter than High Fructose Corn Syrup!",
		'Nice job on that thing you did that time!',
		'That color is perfect on you!',
		//'Is that a potato?',
		'Show me your moves!',
		"Are you my twin?",
		"Objects in mirror are closer than they appear.",
		'Ohhhh emmm geee... we look sooooo alike!',
		"Have you been working out?",
		"I'm lucky to be your mirror!",
		"How about adulting? Did you want to try that today?",
		"How about that local sports team?",
		"Oh, it's you..."
        ],
        evening: [
        '<i class="fa-5x fa-wifi"></i>',
        "Don't touch me!",
		'You have great taste in mirrors!',
		"Radically Reflective!",
		'Your face makes other people look ugly!',
		'Your hair looks stunning!',
		"At least you didn't lose your keys today, right?",
		'You could survive a Zombie apocalypse. Maybe.',
		'Dogs love you! Some of them. Some dogs are dumb though, so...',
		'The Force is strong with you',
		"If I could high five you... I would, I promise.",
		'I was talking to the toilet. He said you have a nice butt.',
		"You knew better, but you still did that today... SHAME on you.",
		"With an attitude like that, you're not completely terrible",
		"On a scale from 1 to 10, you're an 11!",
		//"HEEEEELLLPP!!!! I'm trapped!!!!!",
		"Seen any good movies lately?",
		"You make my data circuits skip a clock cycle!",
		"Being awesome is hard, but you'll manage.",
		"You and Chuck Norris are on equal levels.",
		"I could just hang here all day!",
		"I'm not touch screen.",
		"Hard work may pay off in the future but procrastination pays off now!",
		"How many times did you 'Ummm' today?",
		"Hmmm... interesting.",
		"This too shall pass.",
		"There is always a party with you here.",
		"I need some time to reflect...",
		"I see a lot of my self in you.",
		"I'm a mirror and I'm LIT!",
		"Good enough is the enemy of excellence!",
		"success is where preparation meets opportunity.",
		"Ceci n'est pas une mirror."
        ],
	bedtime: [
		'<i class="fa-3x fa-battery-quarter"></i><br>Low Battery',
		'Sweet dreams!',
		"A day without sunshine is like, you know, night.",
		'Good Night.',
		'See you tomorrow!',
		'I watch you when you sleep.',
		'Do you think of me when you dream...? I think of you.',
		"It is past your bed time young man, get to bed!",
		'Sleep tight.',
		'Sleep well!',
		"'Go to bed, you'll feel better in the morning' is the human version of 'Did you turn it off and back on again?'"
		],
        birthday: [
		'<i class="fa-3x fa-birthday-cake"></i><br>Happy Birthday ',
		'Happy Birthday ',
		'Have a great birthday today ',
		'Yay, your birthday is today, '
        ],
        christmas: [
		'Merry Christmas!',
		'¡Feliz Navidad!',
		'Nollaig Shona Duit!',
		'Happy Christmas!'
        ]

    },
    news: {
        feed: [
			//Shower Thoughts test
			//'http://feeds.feedburner.com/reddit/giAr'

			//Ars Technica Feeds
			'http://feeds.arstechnica.com/arstechnica/technology-lab',
			'http://feeds.arstechnica.com/arstechnica/gaming',
			'http://feeds.arstechnica.com/arstechnica/multiverse',
			'http://feeds.arstechnica.com/arstechnica/cars'


			/* Original feeds
			'http://feeds.reuters.com/reuters/healthNews',
			'http://feeds.reuters.com/reuters/oddlyEnoughNews',
			'http://feeds.reuters.com/Reuters/domesticNews',
			'http://feeds.reuters.com/Reuters/worldNews'
			*/
		]
    },
	traffic: {
		active: true,
		regular: false,				//Regular is true if you work a consistent schedule and want traffic displayed before work, false if you want your commute displayed all the time
		weekStart: 1,
		weekEnd: 5,				//Day of the week, Sunday = 0, etc
		startTimeHour: 7,			//Hour of the day you at which you start work, in 24H format
		startTimeMinute: 0,			//Minute of the day you at which you start work
		preTime: 3				//How many hours before work you'd like to see traffic info
	},
	calendar: {
		traffic: true
	}
};
