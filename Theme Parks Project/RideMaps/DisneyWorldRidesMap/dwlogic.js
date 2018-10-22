var map = L.map('map').setView([28.4199,-81.58205], 18);
//var map=L.map('map').fitBounds([[28.377,-81.553548],[28.3715485,-81.5816633]]);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var rides = [{'Rank': 1,
'Roller Coaster Rides': ' Expedition Everest - Legend of the Forbidden Mountain',
'dataset': 'rides_Disney_world',
'lat': 28.358727000000002,
'lng': -81.5871334,
'rating': 0.0,
'weightedrank': 55},
{'Rank': 2,
'Roller Coaster Rides': ' Haunted Mansion',
'dataset': 'rides_Disney_world',
'lat': 28.420169,
'lng': -81.582894,
'rating': 4.6,
'weightedrank': 54},
{'Rank': 3,
'Roller Coaster Rides': ' The Twilight Zone Tower of Terror',
'dataset': 'rides_Disney_world',
'lat': 28.360061199999997,
'lng': -81.5599278,
'rating': 4.8,
'weightedrank': 53},
{'Rank': 4,
'Roller Coaster Rides': ' Soaring Around The World',
'dataset': 'rides_Disney_world',
'lat': 33.8083961,
'lng': -117.91997099999999,
'rating': 4.7,
'weightedrank': 52},
{'Rank': 5,
'Roller Coaster Rides': ' Space Mountain',
'dataset': 'rides_Disney_world',
'lat': 28.4191261,
'lng': -81.5772408,
'rating': 4.6,
'weightedrank': 51},
{'Rank': 6,
'Roller Coaster Rides': ' Toy Story Mania!',
'dataset': 'rides_Disney_world',
'lat': 28.356053600000003,
'lng': -81.56148639999998,
'rating': 4.7,
'weightedrank': 50},
{'Rank': 7,
'Roller Coaster Rides': ' Splash Mountain',
'dataset': 'rides_Disney_world',
'lat': 28.419131699999998,
'lng': -81.58502220000001,
'rating': 4.8,
'weightedrank': 49},
{'Rank': 8,
'Roller Coaster Rides': ' Big Thunder Mountain Railroad',
'dataset': 'rides_Disney_world',
'lat': 28.420005,
'lng': -81.584622,
'rating': 4.6,
'weightedrank': 48},
{'Rank': 9,
'Roller Coaster Rides': ' Avatar Flight of Passage',
'dataset': 'rides_Disney_world',
'lat': 28.355567200000003,
'lng': -81.5922259,
'rating': 4.7,
'weightedrank': 47},
{'Rank': 10,
'Roller Coaster Rides': ' Seven Dwarfs Mine Train',
'dataset': 'rides_Disney_world',
'lat': 28.4204315,
'lng': -81.5804457,
'rating': 4.4,
'weightedrank': 46},
{'Rank': 11,
'Roller Coaster Rides': ' Kilimanjaro Safaris',
'dataset': 'rides_Disney_world',
'lat': 28.359697999999998,
'lng': -81.59242409999999,
'rating': 4.6,
'weightedrank': 45},
{'Rank': 12,
'Roller Coaster Rides': ' Pirates of the Caribbean',
'dataset': 'rides_Disney_world',
'lat': 28.4180309,
'lng': -81.5842212,
'rating': 4.6,
'weightedrank': 44},
{'Rank': 13,
'Roller Coaster Rides': " Rock 'n Roller Coaster Starring Aerosmith",
'dataset': 'rides_Disney_world',
'lat': 28.3594815,
'lng': -81.5610081,
'rating': 4.7,
'weightedrank': 43},
{'Rank': 14,
'Roller Coaster Rides': ' Slinky Dog Dash',
'dataset': 'rides_Disney_world',
'lat': 28.35629,
'lng': -81.562877,
'rating': 4.8,
'weightedrank': 42},
{'Rank': 15,
'Roller Coaster Rides': ' Star Tours: The Adventure Continues',
'dataset': 'rides_Disney_world',
'lat': 28.355494300000004,
'lng': -81.5587382,
'rating': 4.6,
'weightedrank': 41},
{'Rank': 16,
'Roller Coaster Rides': " It's A Small World",
'dataset': 'rides_Disney_world',
'lat': 28.420493,
'lng': -81.582044,
'rating': 4.3,
'weightedrank': 40},
{'Rank': 17,
'Roller Coaster Rides': ' Monsters, Inc Laugh Floor',
'dataset': 'rides_Disney_world',
'lat': 28.418376799999997,
'lng': -81.57974829999998,
'rating': 4.4,
'weightedrank': 39},
{'Rank': 18,
'Roller Coaster Rides': " Peter Pan's Flight",
'dataset': 'rides_Disney_world',
'lat': 28.420315000000002,
'lng': -81.58188899999998,
'rating': 4.2,
'weightedrank': 38},
{'Rank': 19,
'Roller Coaster Rides': ' Jungle Cruise',
'dataset': 'rides_Disney_world',
'lat': 28.4179283,
'lng': -81.5834936,
'rating': 4.3,
'weightedrank': 37},
{'Rank': 20,
'Roller Coaster Rides': ' Mad Tea Party',
'dataset': 'rides_Disney_world',
'lat': 28.419978000000004,
'lng': -81.579761,
'rating': 4.4,
'weightedrank': 36},
{'Rank': 21,
'Roller Coaster Rides': ' Kali River Rapids',
'dataset': 'rides_Disney_world',
'lat': 28.3592822,
'lng': -81.5883329,
'rating': 4.1,
'weightedrank': 35},
{'Rank': 22,
'Roller Coaster Rides': ' Spaceship Earth',
'dataset': 'rides_Disney_world',
'lat': 28.3753673,
'lng': -81.54956159999998,
'rating': 4.6,
'weightedrank': 34},
{'Rank': 23,
'Roller Coaster Rides': ' Test Track',
'dataset': 'rides_Disney_world',
'lat': 28.373252700000002,
'lng': -81.5475561,
'rating': 4.6,
'weightedrank': 33},
{'Rank': 24,
'Roller Coaster Rides': ' DINOSAUR',
'dataset': 'rides_Disney_world',
'lat': 28.355255,
'lng': -81.588303,
'rating': 4.5,
'weightedrank': 32},
{'Rank': 25,
'Roller Coaster Rides': " Na'vi River Journey",
'dataset': 'rides_Disney_world',
'lat': 28.355266200000003,
'lng': -81.59167409999998,
'rating': 3.4,
'weightedrank': 31},
{'Rank': 26,
'Roller Coaster Rides': " Mickey's PhilharMagic",
'dataset': 'rides_Disney_world',
'lat': 28.420075899999997,
'lng': -81.58146889999998,
'rating': 4.3,
'weightedrank': 30},
{'Rank': 27,
'Roller Coaster Rides': ' Frozen Ever After',
'dataset': 'rides_Disney_world',
'lat': 28.370709499999997,
'lng': -81.5465038,
'rating': 3.7,
'weightedrank': 29},
{'Rank': 28,
'Roller Coaster Rides': ' The Many Adventures of Winnie the Pooh',
'dataset': 'rides_Disney_world',
'lat': 28.420102000000004,
'lng': -81.58026199999998,
'rating': 4.3,
'weightedrank': 28},
{'Rank': 29,
'Roller Coaster Rides': ' Dumbo the Flying Elephant',
'dataset': 'rides_Disney_world',
'lat': 28.4203625,
'lng': -81.5788803,
'rating': 4.4,
'weightedrank': 27},
{'Rank': 30,
'Roller Coaster Rides': ' Tomorrowland Transit Authority PeopleMover',
'dataset': 'rides_Disney_world',
'lat': 28.418419,
'lng': -81.5791429,
'rating': 4.6,
'weightedrank': 26},
{'Rank': 31,
'Roller Coaster Rides': ' Alien Swirling Saucers',
'dataset': 'rides_Disney_world',
'lat': 28.355385,
'lng': -81.56246999999998,
'rating': 0.0,
'weightedrank': 25},
{'Rank': 32,
'Roller Coaster Rides': " Buzz Lightyear's Space Ranger Spin",
'dataset': 'rides_Disney_world',
'lat': 28.418214000000003,
'lng': -81.57946899999999,
'rating': 4.5,
'weightedrank': 24},
{'Rank': 33,
'Roller Coaster Rides': ' Mission: SPACE',
'dataset': 'rides_Disney_world',
'lat': 28.373924,
'lng': -81.54697399999998,
'rating': 4.4,
'weightedrank': 23},
{'Rank': 34,
'Roller Coaster Rides': ' Under The Sea ~ Journey of the Little Mermaid',
'dataset': 'rides_Disney_world',
'lat': 28.4210613,
'lng': -81.57996290000001,
'rating': 4.4,
'weightedrank': 22},
{'Rank': 35,
'Roller Coaster Rides': " It's Tough to be a Bug!",
'dataset': 'rides_Disney_world',
'lat': 28.3576049,
'lng': -81.59022990000001,
'rating': 4.5,
'weightedrank': 21},
{'Rank': 36,
'Roller Coaster Rides': ' The Barnstormer',
'dataset': 'rides_Disney_world',
'lat': 28.4206282,
'lng': -81.57843829999999,
'rating': 4.4,
'weightedrank': 20},
{'Rank': 37,
'Roller Coaster Rides': ' Turtle Talk With Crush',
'dataset': 'rides_Disney_world',
'lat': 28.375453000000004,
'lng': -81.55122940000001,
'rating': 4.5,
'weightedrank': 19},
{'Rank': 38,
'Roller Coaster Rides': ' Tomorrowland Speedway',
'dataset': 'rides_Disney_world',
'lat': 28.419403000000003,
'lng': -81.579375,
'rating': 3.9,
'weightedrank': 18},
{'Rank': 39,
'Roller Coaster Rides': ' Muppet*Vision 3D',
'dataset': 'rides_Disney_world',
'lat': 28.3550039,
'lng': -81.5595221,
'rating': 4.4,
'weightedrank': 17},
{'Rank': 40,
'Roller Coaster Rides': " Walt Disney's Enchanted Tiki Room",
'dataset': 'rides_Disney_world',
'lat': 28.4182096,
'lng': -81.58371159999999,
'rating': 4.1,
'weightedrank': 16},
{'Rank': 41,
'Roller Coaster Rides': ' Primeval Whirl',
'dataset': 'rides_Disney_world',
'lat': 28.356511600000005,
'lng': -81.58748469999998,
'rating': 4.1,
'weightedrank': 15},
{'Rank': 42,
'Roller Coaster Rides': ' Living With The Land',
'dataset': 'rides_Disney_world',
'lat': 28.374101300000003,
'lng': -81.5525844,
'rating': 4.5,
'weightedrank': 14},
{'Rank': 43,
'Roller Coaster Rides': ' Astro Orbiter',
'dataset': 'rides_Disney_world',
'lat': 28.4184143,
'lng': -81.57914579999998,
'rating': 4.1,
'weightedrank': 13},
{'Rank': 44,
'Roller Coaster Rides': ' The Magic Carpets of Aladdin',
'dataset': 'rides_Disney_world',
'lat': 28.4184373,
'lng': -81.58346279999998,
'rating': 4.3,
'weightedrank': 12},
{'Rank': 45,
'Roller Coaster Rides': ' TriceraTop Spin',
'dataset': 'rides_Disney_world',
'lat': 28.356414299999997,
'lng': -81.58819539999998,
'rating': 4.2,
'weightedrank': 11},
{'Rank': 46,
'Roller Coaster Rides': ' The Hall of Presidents',
'dataset': 'rides_Disney_world',
'lat': 28.4194135,
'lng': -81.5823351,
'rating': 4.4,
'weightedrank': 10},
{'Rank': 47,
'Roller Coaster Rides': ' Gran Fiesta Tour Starring The Three Caballeros',
'dataset': 'rides_Disney_world',
'lat': 28.3720411,
'lng': -81.54698839999998,
'rating': 4.4,
'weightedrank': 9},
{'Rank': 48,
'Roller Coaster Rides': ' Walt Disney World Railroad',
'dataset': 'rides_Disney_world',
'lat': 28.421090000000003,
'lng': -81.57837190000001,
'rating': 4.7,
'weightedrank': 8},
{'Rank': 49,
'Roller Coaster Rides': ' The Seas with Nemo & Friends',
'dataset': 'rides_Disney_world',
'lat': 28.374888399999996,
'lng': -81.55073409999999,
'rating': 4.4,
'weightedrank': 7},
{'Rank': 50,
'Roller Coaster Rides': ' Country Bear Jamboree',
'dataset': 'rides_Disney_world',
'lat': 28.418799,
'lng': -81.583773,
'rating': 4.2,
'weightedrank': 6},
{'Rank': 51,
'Roller Coaster Rides': ' Prince Charming Regal Carrousel',
'dataset': 'rides_Disney_world',
'lat': 28.4201407,
'lng': -81.5812,
'rating': 4.3,
'weightedrank': 5},
{'Rank': 52,
'Roller Coaster Rides': " Walt Disney's Carousel of Progress",
'dataset': 'rides_Disney_world',
'lat': 28.417770899999997,
'lng': -81.5788233,
'rating': 4.6,
'weightedrank': 4},
{'Rank': 53,
'Roller Coaster Rides': ' Journey Into Imagination With Figment',
'dataset': 'rides_Disney_world',
'lat': 28.3727243,
'lng': -81.55120009999999,
'rating': 3.7,
'weightedrank': 3},
{'Rank': 54,
'Roller Coaster Rides': ' Swiss Family Treehouse',
'dataset': 'rides_Disney_world',
'lat': 28.4182093,
'lng': -81.58304840000001,
'rating': 4.2,
'weightedrank': 2},
{'Rank': 55,
'Roller Coaster Rides': " Stitch's Great Escape",
'dataset': 'rides_Disney_world',
'lat': 28.418594,
'lng': -81.57965899999998,
'rating': 3.1,
'weightedrank': 1}];
  
  // Loop through the rides array and create one marker for each ride object
  for (var i = 0; i < rides.length; i++) {
    console.log(rides[i]["Roller Coaster Rides"])
    console.log(rides[i].rating)
    console.log(rides[i].lat+";"+rides[i].lng)
      // Add circles to map
  L.circle([rides[i].lat, rides[i].lng], {
    fillOpacity: 1- ((rides[i].Rank /rides.length)*.8),
    color: "white",
    fillColor: "purple",
    // Adjust radius
    radius: rides[i].rating*4
  }).bindPopup("<h3>" + rides[i]["Roller Coaster Rides"] + "</h3> <hr> <h5>Rank: " + rides[i].Rank +";   Rating:"+rides[i].rating +"</h5>")
  .addTo(map)
  .openPopup();
  }
  
  
