const places=[
    {
        id:1,
        name:'Udaipur,Rajasthan',
        category:'Rajasthan',
        desc:"Udaipur,also known as the City of Lakes. It is located around stunning water lakes and enveloped by the Aravalli Hills in all directions.",
        image:'./photoset2/Udaipur.jpg'
    },
    {
        id:2,
        name:'Jaipur,Rajasthan',
        category:'Rajasthan',
        desc:"Also called the Pink City, Jaipur is the capital of the royal state of Rajasthan. It form's 'Golden Triangle' tourist circuit along with 'Delhi' & 'Agra'",
        image:'photoset2/Jaipur.jpg'
    },
    {
        id:3,
        name:'Jaisalmer, Rajasthan',
        category:'Rajasthan',
        desc:"Jaisalmer is known as the 'golden city' due to its golden dunes and castles clad in golden honey sandstone. Jaisalmer is adorned with lakes, ornate Jain temples and havelis. ",
        image:'photoset2/Jaisalmer.jpg'
    },
    {
        id:4,
        name:'Shimla, Himachal Pradesh',
        category:'Himachal Pradesh',
        desc:" Shimla is the capital of Himachal Pradesh and a popular hill-station among Indian families and honeymooners. Situated at the height of 2200m, Shimla was the summer capital of 'British India'.",
        image:'photoset2/Shimla.jpg',
    },
    {
        id:5,
        name:'Manali, Himachal Pradesh',
        category:'Himachal pradesh',
        desc:"Manali is a town, near Kullu town in Kullu dist in the Indian state of Himachal Pradesh. It is situated in the northern end of the Kullu Valley, formed by the Beas River.",
        image:'photoset2/Manali.jpg'
    },
    {
        id:6,
        name:'Srinagar, Jammu and Kashmir',
        category:'Jammu and Kashmir',
        desc:"Srinagar is the summer capital of Jammu and Kashmir. It lies in the Kashmir Valley on the banks of the Jhelum River, a tributary of the Indus, and Dal and Anchar lakes.",
        image:'photoset2/Udaipur.jpg'
    },
    {
        id:7,
        name:'Leh, Jammu and Kashmir',
        category:'Jammu and Kashmir',
        desc:"Leh, located in the Leh district, was also the historical capital of the Kingdom of Ladakh. The seat of the kingdom, Leh Palace. The city is located on the bank of the Indus River.",
        image:'photoset2/Leh.jpg'
    },
    // {
    //     id:8,
    //     name:'Aizawl, Mizoram',
    //     category:'Mizoram',
    //     desc:"This is one of the oldest cities of Mizoram and attracts lots of tourist for its views. The tranquil setup of this quaint town can leave your mind, body, and soul totally relaxed.",
    //     image:'photoset1/Aizawl.jpg'
    // },
    {
        id:9,
        name:'Gulmarg, Jammu and Kashmir',
        category:'Jammu and Kashmir',
        desc:"Gulmarg is a popular skiing destination located in Pir Panjal Range of Union territory of Jammu & Kashmir. Surrounded by snow-covered lofty Himalayas and evergreen forested valleys.",
        image:'photoset2/Gulmarg.jpg'
    },
    {
        id:10,
        name:'Amritsar, Punjab',
        category:'Punjab',
        desc:"The city known for legends, patriotism, and spirituality, Amritsar is found listed at the top when anyone talks about the religious places to visit in Punjab. Home to the 'Golden temple'.",
        image:'photoset2/Amritsar.jpg'
    },
    {
        id:11,
        name:'Jalandhar, Punjab',
        category:'Punjab',
        desc:"This is an ancient city, holding special significance for not just Sikhs but also 'Hindus',. as it's home to many holy shrines, Flaunting the culture of Punjab.",
        image:'photoset2/Jalandhar.jpg'
    },
    {
        id:12,
        name:'Chandigarh, Punjab',
        category:'Punjab',
        desc:"The capital of Punjab, Chandigarh is counted among the metro cities of India,This welcoming city will greet you with the flavors of everything between modernity and antiquity.",
        image:'photoset2/Chandigarh.jpg'
    },
    {
        id:13,
        name:'Mumbai, Maharashtra',
        category:'Maharashtra',
        desc:"Mumbai, the capital city of the Indian state of Maharashtra, is a spectacular paradox of chaos & hope, glamour & squalor, modernity & tradition. Famously known as the City of Dreams.",
        image:'photoset2/Mumbai.jpg'
    },
    {
        id:14,
        name:'Mahabaleshwar, Maharashtra',
        category:'Maharashtra',
        desc:"Mahabaleshwar is a hill station located in the Western Ghats, in Satara dist of Maharashtra. It is also well known for its numerous rivers, magnificent cascades and majestic peaks.",
        image:'photoset2/Mahabaleshwar.jpg'
    },
    {
        id:15,
        name:'Aurangabad, Maharashtra',
        category:'Maharashtra',
        desc:"This town greets its visitors with a richly woven tapestry of sights and sounds. The town is used as the base to explore the extremely famous caves of 'Ajanta and Ellora'.",
        image:'photoset2/Aurangabad.jpg'
    },
    {
        id:16,
        name:'Khajuraho, Madhya Pradesh',
        category:'Madhya Pradesh',
        desc:"Khajuraho is known for its stunning temples adorned by erotic and sensuous carvings. It is a best example of Indian architecture and its culture back in the medieval period.",
        image:'photoset2/Khajuraho.jpg'
    },
    {
        id:17,
        name:'Gwalior, Madhya Pradesh',
        category:'Madhya Pradesh',
        desc:"Gwalior is a historic city in the Madhya Pradesh. Popular because of the hilltop fort, it is full of palaces and glorious temples, which speaks volumes of its glorious past.",
        image:'photoset2/Gwalior.jpg'
    },
    {
        id:18,
        name:'Agra, Uttar Pradesh',
        category:'Uttar Pradesh',
        desc:"Located on the banks of River Yamuna in UP., It is home to one of the 7 wonders of the world, the Taj mahal. It sneak peek into the architectural history and legacy of the Mughal empire.",
        image:'photoset2/Agra.jpg'
    },
    {
        id:19,
        name:'Lucknow, Uttar Pradesh',
        category:'Uttar Pradesh',
        desc:"The capital and the largest city of Uttar Pradesh, Lucknow, situated on the banks of river Gomti.., It is the city of kebabs and nawabs, of architecture & history, of literature & culture.",
        image:'photoset2/Lucknow.jpg'
    },
    {
        id:20,
        name:'Mathura, Uttar Pradesh',
        category:'Uttar Pradesh',
        desc:"One of Hinduism's seven sacred cities, Mathura is the birthplace of the very beloved Lord Krishna. Located in the state of Uttar Pradesh, Mathura and Vrindavan are often considered twin cities.",
        image:'photoset2/Mathura.jpg'
    },
    {
        id:21,
        name:'Raipur, Chattisgarh',
        category:'Chattisgarh',
        desc:"The capital of Chhattisgarh, Raipur is the largest city in the state. With more than hundreds of steel mills and six steel plants, Raipur is also one of the largest industrial centres of the country.",
        image:'photoset2/Raipur.jpg'
    },
    {
        id:22,
        name:'Jagdalpur, Chattisgarh',
        category:'Chattisgarh',
        desc:"Jagdalpur is a beautiful and naturally bountiful city in the Bastar district of Chhattisgarh and is one of the most popular tourist destinations in the state after Raipur and Bhilai.",
        image:'photoset2/Jagdalpur.jpg'
    },
    {
        id:23,
        name:'Shillong, Meghalaya',
        category:'Meghalaya',
        desc:"A beautiful city encircled by pine trees, Shillong is the capital of Meghalaya. It name derives from Lei Shyllong, an idol worshipped at the Shillong Peak. It's also known as 'Scotland of the East'.",
        image:'photoset2/Shillong.jpg'
    },
    {
        id:24,
        name:'Cherrapunji, Meghalaya',
        category:'Meghalaya',
        desc:"Earlier the wettest place on the Earth, Cherrapunji in Meghalaya, also known as Sohra, known for its double-decker living root bridge. Located around 50 Kms from Shillong.",
        image:'photoset2/Cherrapunji.jpg'
    },
    {
        id:25,
        name:'Ahmedabad, Gujrat',
        category:'Gujrat',
        desc:"Ahmedabad is one of the most important cities and capital of Gujarat. Located on the banks of the Sabarmati River.It's known for its delicious food and colourful culture.",
        image:'photoset2/Ahmedabad.jpg'
    },
    {
        id:26,
        name:'Kutch, Gujrat',
        category:'Gujrat',
        desc:"Virtually an island that resembles the shape of tortoise, Kutch is probably one of the most beautiful, yet surreal places in India with vast expanses of the white salt desert.",
        image:'photoset2/Kutch.jpg'
    },
    {
        id:27,
        name:'Vadodara, Gujrat',
        category:'Gujrat',
        desc:"Vadodara or Baroda is a cosmopolitan city located in Gujarat. Home to some of the most exemplary displays of architecture and City of educational, industrial and commercial centre.",
        image:'photoset2/Vadodara.jpg'
    },
    {
        id:28,
        name:'BodhGaya, Bihar',
        category:'Bihar',
        desc:"Bodh Gaya is a Buddhist pilgrimage site in Gaya District of Bihar. Famous for the Mahabodhi Temple, It was here under the Bodhi tree that Gautama Buddha attained enlightenment.",
        image:'photoset2/BodhGaya.jpg'
    },
    {
        id:29,
        name:'Nalanda, Bihar',
        category:'Bihar',
        desc:"he most popular Mahavihara of the ancient times, a significant Buddhist seat of academic excellence and a modest pilgrim center, all wrapped in a wisp of spirituality.",
        image:'photoset2/Nalanda.jpg'
    },
    {
        id:30,
        name:'Bhubaneshwar, Odisha',
        category:'Odisha',
        desc:"Known as the 'Temple City of India'. Bhubaneswar is among the best tourist places visit in Odisha. It is a classic example of history, heritage, and urbanization. ",
        image:'photoset2/Bhubaneshwar.jpg'
    },
    {
        id:31,
        name:'Konark, Odisha',
        category:'Odisha',
        desc:"Konark is a hub of ancient art & sculpture and the best Odisha destinations. The carvings of 'Konark Sun Temple' one of the seven wonders.",
        image:'photoset2/Konark.jpg'
    },
    {
        id:32,
        name:'Puri, Odisha',
        category:'Odisha',
        desc:"In Puri you can explore the temples and sun-kissed beaches. It is also among the original Char-Dhams that hold significance in the Hindu religion.",
        image:'photoset2/Puri.jpg'
    },
    {
        id:33,
        name:'Tawang, Arunachal Pradesh',
        category:'Arunachal Pradesh',
        desc:"Tawang is known for many important and beautiful monasteries and is famous for being the birthplace of the 6th Dalai Lama, Tsangyang Gyatso.",
        image:'photoset2/Tawang.jpg'
    },
    {
        id:34,
        name:'Itanagar, Arunachal Pradesh',
        category:'Arunachal Pradesh',
        desc:"With the snow capped Himalayas towering on northern end and the fertile Brahmaputra river plains on the southern, Itanagar is a natural paradise.",
        image:'photoset2/Itanagar.jpg'
    },
    {
        id:35,
        name:'Agartala, Tripura',
        category:'Tripura',
        desc:"Home to the Manikya Kings in the past, Agartala is the perfect mix of natural beauty combined with diverse and rich culture. It also has a cultural richness with the historical monuments.",
        image:'photoset2/Agartala.jpg'
    },
    {
        id:36,
        name:'Kailashahar, Arunachal Pradesh',
        category:'Arunachal Pradesh',
        desc:"It was once the capital of Tripuran kingdom and evidence of its royal history can be still seen here. It is a town which gets a major part of it identity from a royal and significant past",
        image:'photoset2/Kailashahar.jpg'
    },
    {
        id:37,
        name:'Imphal, Manipur',
        category:'Manipur',
        desc:"Imphal has a untouched charm surrounding its natural beauty, sceneries and landscapes as -well-as a significant history leaving hints of the past around the city.",
        image:'photoset2/Imphal.jpg'
    },
    {
        id:38,
        name:'Gurgoan, Haryana',
        category:'Haryana',
        desc:"Gurgaon is not only one of the most urbanised cities of India, but it also boasts of a skyline it can easily rival those of Hong Kong and Singapore.",
        image:'photoset2/Gurgoan.jpg'
    },
    {
        id:39,
        name:'Panipat, Haryana',
        category:'Haryana',
        desc:"Panipat is known for the three historical battles that were fought here. Innumerable monument, forts, temples and its magnificent historical connections make Panipat in Haryana.",
        image:'photoset2/Panipat.jpg'
    },    
    {
        id:40,
        name:'Vishakhapatnam, Andhra Pradesh',
        category:'Andhra Pradesh',
        desc:"It is also known as 'Vizag', is one of the old port cities in the country. Situated in the heart of AP. It is known for its picturesque beaches and serene landscape, as well as a rich cultural past. ",
        image:'photoset1/Vishakhapatnam.jpg'
    },
    {
        id:41,
        name:'Tirupati, Andhra Pradesh',
        category:'Andhra Pradesh',
        desc:"The city is home to the important Hindu shrine 'Tirumala Venkateswara Temple' and other historic temples and is referred to as the 'Spiritual Capital of Andhra Pradesh'",
        image:'photoset1/Tirupati.jpg'
    },
    {
        id:42,
        name:'Araku, Andhra Pradesh',
        category:'Andhra Pradesh',
        desc:"Araku Valley is a comparatively unexplored hill station mostly visited by locals as a weekend getaway and is situated some 120 kilometres away from Vishakhapatnam.",
        image:'photoset1/Araku.jpg'
    },
    {
        id:43,
        name:'Hyderabad, Telangana',
        category:'Telangana',
        desc:"A city of contrasts, Hyderabad exudes an old-world charm of its own with the Old City (Charminar side), Hitech City (Cyberabad) and other areas lying between the old and the new",
        image:'photoset1/Hyderabad.jpg'
    },
    {
        id:44,
        name:'Warangal, Telangana',
        category:'Telangana',
        desc:"Warangal takes you back to the era of kings and queens with its beautiful historical sites and an impressive natural beauty with Parkhal Lake being worth checking out.",
        image:'photoset1/Warangal.jpg'
    },
    {
        id:45,
        name:'Pondicherry, Tamil Nadu',
        category:'Tamil Nadu',
        desc:"Also known as Puducherry, this is an ideal place for explorers, beach lovers, and interested in French culture and architecture. With an extensive number of romantic places.",
        image:'photoset1/Pondicherry.jpg'
    },
    {
        id:46,
        name:'Kanyakumari, Tamil Nadu',
        category:'Tamil Nadu',
        desc:"Kanyakumari is a paradise for experience-seekers. The art, architecture of temples, and even the local cuisine along with so many places to see in Kanyakumari",
        image:'photoset1/Kanyakumari.jpg'
    },
    {
        id:47,
        name:'Tuticorin, Tamil Nadu',
        category:'Tamil Nadu',
        desc:"This is one place in South India that lets you witness the best of everything at one place, boasting beautiful beach, spectacular wildlife sanctuary to numerous temples & churches.",
        image:'photoset1/Tuticorin.jpg'
    },
    {
        id:48,
        name:'North Goa, Goa',
        category:'Goa',
    desc:"It is known for its crowded beaches, upbeat nightlife, Goan trance, cosmopolitan cuisine and yoga retreats. It is dotted with majestic forts, beautiful cathedrals and flea markets.",
    image:'photoset1/North Goa.jpg'
    },
    {
        id:49,
        name:'South Goa, Goa',
        category:'Goa',
        desc:"South Goa is a complete blend of historical churches and temples, exotic and sandy beaches, glimpses of Portuguese architecture, delicious seafood, and an undisputable romantic vibe.",
        image:'photoset1/South Goa.jpg'
    },
    {
        id:50,
        name:'Thiruvananthapuram,Kerala',
        category:'Kerala',
        desc:"It is a major tourist centre, known for the 'Padmanabhaswamy Temple', the beaches of Kovalam & Varkala , Western Ghats tracts of Ponmudi & the Agastya Mala.",
        image:'photoset1/Thiruvananthapuram.jpg'
    },
    {
        id:51,
        name:'Kozhikode, Kerala',
        category:'Kerala',
        desc:"This place is basking in the idyllic setting of the serene Arabian Sea on the west and peaks of Wayanad hills on the east, with serene beaches, lush green countryside, heritages.",
        image:'photoset1/Kozhikode.jpg'
    },
    {
        id:52,
        name:'Munnar, Kerala',
        category:'Kerala',
        desc:"Famous for the tea estates, greenery, winding roads, blanket of mist, and viewpoints, Munnar is a hill station in Kerala. Globally mostly visited honeymooners.",
        image:'photoset1/Munnar.jpg'
    },

    {
        id:53,
        name:'Coorg, Karnataka',
        category:'Karnataka',
        desc:"Coorg is located in amidst imposing mountains  Karnataka with a perpetually misty landscape. It is popular for its beautiful green hills and the streams cutting right through them.",
        image:'photoset1/Coorg.jpg'
    },
    {
        id:54,
        name:'Mysore, Karnataka',
        category:'Karnataka',
        desc:"Famously known as The City of Palaces. It is replete with the history of its dazzling royal heritage, intricate architecture, its famed silk sarees, yoga, and sandalwood.",
        image:'photoset1/Mysore.jpg'
    },
    {
        id:55,
        name:'Hampi, Karnataka',
        category:'Karnataka',
        desc:"Famous for the tea estates, greenery, winding roads, blanket of mist, and viewpoints, Munnar is a hill station in Kerala. Globally mostly visited honeymooners.",
        image:'photoset1/Hampi.jpg'
    },
    {
        id:56,
        name:'Rishikesh, Uttarakhand',
        category:'Uttarakhand',
        desc:"Located in the foothills of the Himalayas along the convergence of Ganga and Chandrabhaga River.It is Gateway to Garhwal Himalayas, It is also a pilgrimage and holiest places for Hindus.",
        image:'photoset1/Rishikesh.jpg'
    },
    {
        id:57,
        name:'Nainital, Uttarakhand',
        category:'Uttarakhand',
        desc:"Nainital is a charming hill station located at the foothills of the Kumaon ranges in Uttarakhand.Nainital is a perfect weekend getaway from Delhi and the nearby places.",
        image:'photoset1/Nainital.jpg'
    },
    {
        id:58,
        name:'Mussoorie, Uttarakhand',
        category:'Uttarakhand',
        desc:"Mussoorie is one of the popular hill-station located in the Dehradun. With a backdrop of Shivalik range of Himalayas and doon valley, Mussoorie, also known as 'Queen of The Hills'.",
        image:'photoset1/Mussoorie.jpg'
    },
    {
        id:59,
        name:'Guwahati, Assam',
        category:'Assam',
        desc:"It is the largest metropolis in the entire North-Eastern region of India.It is Sandwiched by the river Brahmaputra and the Shillong Plateau, This city was formerly known as Pragjyotishpura.",
        image:'photoset1/Guwahati.jpg'
    },
    {
        id:60,
        name:'Jamashedpur, Jharkhand',
        category:'Jharkhand',
        desc:"The largest city in Jharkhand, Jamshedpur is an aesthetically planned township with an appeals infrastructure and landscape. Juxtaposed at against the beautiful Dalma Hills.",
        image:'photoset1/Jamashedpur.jpg'
    },
    {
        id:62,
        name:'Kohima, Nagaland',
        category:'Nagaland',
        desc:"Kohima, originally Kewhira, is pure bliss for anyone who loves being amidst untouched nature. It is located above sea level. It is surrounded by mountains and forests.",
        image:'photoset1/Kohima.jpg'
    },
    {
        id:63,
        name:'Dimapur, Nagaland',
        category:'Nagaland',
        desc:"It offers an equal amount of delight to both nature and history lovers. Watch out for Kachari ruins from the 10th century that stands in the backdrop of enthralling nature.",
        image:'photoset1/Dimapur.jpg'
    },
    {
        id:64,
        name:'Aizawl, Mizoram',
        category:'Mizoram',
        desc:"This is one of the oldest cities of Mizoram and attracts lots of tourist for its views. The tranquil setup of this quaint town can leave your mind, body, and soul totally relaxed.",
        image:'photoset1/Aizawl.jpg'
    },
    {
        id:65,
        name:'Mamit, Mizoram',
        category:'Mizoram',
        desc:"There are a lot of attractions in this place and most of the wildlife enthusiasts love to go to Mamit. If you love to be in the wild, this is the best place to visit.",
        image:'photoset1/Mamit.jpg'
    },
    {
        id:66,
        name:'Sikkim',
        category:'Sikkim',
        desc:"It is one of the beauties in the northeastern part of India. It has beautiful landlocked with immense natural beauty, it would soothe you from tiredness of vigorous DayToDay activities.",
        image:'photoset1/Sikkim.jpg'
    },

]

module.exports=places;