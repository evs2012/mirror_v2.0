//rename this file to keys.js after you fill in the relevant information to enable functionality

var keys = {
    weather: {
		apiKey: '198efbc855feca8db72a20fdad42562d',
		//Go to https://developer.forecast.io/ to register and get your free API key
		address: '1025 45th Street Norfolk, Virginia 23508'
    },
	traffic: {
		params: {
			origin: 'place_id:ChIJIbdaqLSZuokRxYOU0w5Qas8',
			destination: 'place_id:ChIJAagsk6HquokRo2zA1RoWy6g',
            // Use the PlaceID Finder: https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder
			departure_time: 'now',
			key: 'AIzaSyAXe6ox2MpHr2CLU5bhnxJ9KOV_oGkz_qg'
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
				url: 'https://calendar.google.com/calendar/ical/eweis007%40odu.edu/private-961eff537ffd4a0864dd995e69c681ac/basic.ics'
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
			day: 2,
			month: 4,
			name:'Mark'
		}
	]
}
