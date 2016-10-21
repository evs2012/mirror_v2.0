//rename this file to keys.js after you fill in the relevant information to enable functionality

var keys = {
    weather: {
		apiKey: '3f86aafb339ec710d88e1e4ca1f23311',
		//Go to https://developer.forecast.io/ to register and get your free API key
		address: '1025 45th Street Norfolk, Virginia 23508'
    },
	traffic: {
		params: {
			// 1600 granby to ccm house
			origin: 'place_id:ChIJIbdaqLSZuokRxYOU0w5Qas8',
			destination: 'place_id:ChIJod3egq2ZuokRr2RD8du_kY4',
            // Use the PlaceID Finder: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
			departure_time: 'now',
			key: 'AIzaSyBGTStY8NX5Px9nyqy8RXfuR-U8cQBYpbs'
            // Go here to get your Google Maps API key: https://developers.google.com/maps/documentation/directions/
		}
	},
	calendar: {
		maximumEntries: 10, // Total Maximum Entries
		displaySymbol: true,
		defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
		urls: [
			{
				symbol: 'calendar-o',
				//url: 'https://calendar.google.com/calendar/ical/eweis007%40odu.edu/private-961eff537ffd4a0864dd995e69c681ac/basic.ics'
				url: 'https://calendar.google.com/calendar/ical/uhsdlcl9p6chtbb71mc5j1pfsg%40group.calendar.google.com/private-e230ea2bb25332c533d6fd8a9e7c7020/basic.ics'
				// For Google Calendar, it's the 'Private Address' under Calendar Settings when viewing your Calendar
			},
			{
				symbol: 'calendar-check-o',
				url: 'CALENDAR.ics ADDRESS'
			}
		]
	},
	birthdays: [
		{
			day: 10,
			month: 5,
			name:'Evan'
		},{
			day: 3,
			month: 11,
			name:'McG'
		},{
			day: 16,
			month: 3,
			name: 'Robert'
		},{
			day: 11,
			month: 5,
			name: "Joe & Sean"
		}
	]
}
