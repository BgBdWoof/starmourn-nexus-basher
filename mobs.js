//Add mobs here. Aggressive mobs go earlier in the list for an area.
nb.mobs = [
	//====================
	// 1-15
	//====================
	//Southern Usum Usutti
	"a yellow-feathered spiderax","a spotted mouse","a sleek shadow fox",
	"a submerged tentacle","a medium-sized tentacle","a red-backed water bug",
	//Marle
	"a Kronish Cross rockhopper","a large Kronish Cross rockhopper","a jumbo Kronish Cross rockhopper",
	"a miniature Kronish Cross rockhopper","a stunted Kronish Cross rockhopper",
	//Mirror Lake
	"a water skipper","a sparkling eel","a small arboreal lizard",
	//Dregs
	"a miniature mauve rodent","a hairless vermilion rodent","a vicious vermilion rodent","a ravenous red rodent",

	//====================
	// 10-20
	//====================
	//Oldtown/Lower reaches/Undercity
	"a glitch-riddled security robot", "an aggressively malfunctioning drone", "a skull-featured female Bushraki gang member",
	"a skull-featured male Bushraki gang member", "a vibro-blade wielding Bushraki", "a savage dark-cloaked Bushraki",
	//Coriolis
	"a malfunctioning windmill drone","a venomous copper flitwing",
	// Zephyr
	"a buzzing lake darter",
	//Scrapston
	"a grime-slick eel","a needle-mouthed eel","a poisonous eel",
	//Whittler's hollow
	"a fat terraworm","a meaty terraworm","an iridescent opal beetle", "a horrifically mutated rodent",
	//Tabby
	"a Ry'nari mutant wearing looted soldier fatigues","a grotesquely mutated bird", "a bile-skinned Amaian mutant", "a green-glowing Decheeran mutant", "a scab-scaled Ry'nari mutant",
    "a grotesque Nusriza mutant", "a mutant encased in ancient power armor", "a warty Ry'nari mutant", "a tatter-finned Amaian mutant",
    "a twisted Decheeran mutant","a spine-skinned Nusriza mutant",

	//====================
	// 20-40
	//====================
	//Praviskar
	"a merciless Bushraki occupier","an avaricious Bushraki slaver","a lightly armed Bushraki guardswoman","a lightly armed Bushraki guardsman",
	"a heavily armed female Bushraki guard","a heavily armed male Bushraki guard",
	//Oranc
	"a stealthy poison-tooth","a green-scaled varrana","a great strider","a wind snake","a Krona poacher","a blue-crested ratika",
	//Lowtown
	"a strung-out female Lowtowner","a strung-out male Lowtowner","an oversized heik-il vine","a shifty looking Nath-el","a juvenile heik-il vine","a thrashing heik-il vine","a sickly heik-il vine",
    //Goribar
    "a small loam leech", "a saffron algerion", "a coral algerion", "a moss-hued algerion", "a large loam leech",
    "an azure algerion", "an oversized loam leech", "a loam leech",
    //Locorin
    "a blacktooth coroxodon","an enormous blacktooth coroxodon","a ruby-plumed eskama","a mossy shellback",
    //Kashitir
    "a nightstalker","an indigo malaca","a juvenile nightstalker","a Grethen silkmoth","a collared malaca",
    //Golpur
    "an enormous drakkafly","an immense Rapasu worm","a flat balkrab","a giant black tarak beetle",
    //Saksar
    "an immense reptillian predator","a male Selassian cultist","a female Selassion cultist","a sharp-toothed raptor",
    "a pack of small sharp-toothed reptiles","a scale-feathered scorpion bird","a blue-furred primate","a brutish loroi mercenary",
    //Siva
     "a needle-mouthed eel","an immense alpha skulf","a large hairy skulf","a lean-ribbed skulf","a spot-scaled tridactyl","a venomous tridactyl",

	//====================
	// 40-50
	//====================
	//Pylos
    "a tentacle-finned hookmaw", "a slow-moving hunk of living coral", "an algae-covered calciburr",
    "a depthless puddle of black liquid", "a poison-spitting treefrog","a delicately bulbous blinkfish",
    //Delta deck
    "a Fatar salvager","an armored salvage bot","a Bushraki mercenary","a Fatar guardian","an Elgan salvager","a Decheeran salvager","a Nusriza salvager",
    //Greenwilds
    "a luminous eel","a king tangutan","a hulking arboreal lizard","a great white eagle","a giant guerilla beetle","a female tangutan",
    //Tosmar
    "a vicious haerbist","a tundra snake",



	//====================
	// 50-75
	//====================
	//Anemoi
	"a rabid cania","a ravenous tigrid","a carnivorous black eagle","a sly cania","a caliginous eagle","a brown-scaled tigrid",
	//Arrizuri
	"a ferocious atzaparaki","a sluggish atzaparaki","a lumbering lasama",
	//Thait
	"a ferociously toothed moss lizard","a needle-clawed moss lizard","a horned lapine","a three-eyed rosewing",
	//New Dikamazi
	"a rampaging construction mech","a dilapidated construction mech","the thrashing root of a cyborg leech orchid","a cyborg leech orchid",
	//Jelle
	"a thrashing heik-il vine","a monstrously huge heik-il vine","a dour Bushraki looter","a menacing Bushraki looter",
	"a heavily armed male Bushraki guard","a heavily armed female Bushraki guard","an off-duty Bushraki looter","a tough Bushraki drug runner",
	//Ixsei
	"a crystal-clawed rock giant","a salt-crusted quartz creeper",
	//northern usum
	'a blacktooth coroxodon',"a giant tosmarian condor","an immense rapasu worm","an immense reptilian predator","an overfed skulf",
	"a roosting tosmarian condor","a lurking blacktooth coroxodon","a foraging zhubeast","an alert giant springer","a large hairy skulf",
	"a two-headed zhubeast","a juvenile rapasu worm","a coiling skilth snake","a giant springer",	
	//prugita
	"a savage selakki","a somnolent selakki","a stationary sentry bot","a well-armed security bot","a Nabian guard",
	//deisk
	"a terrifying mekmavaur",
	//td
	"a tentacle-limbed shapeshifter", "an eyeless maw",

];

//names of mechanical targets go here. 
nb.mechanicals = ["a cyborg leech orchid","a rampaging construction mech","a dilapidated construction mech","a stationary sentry bot","a well-armed security bot",
"a glitch-riddled security robot", "an aggressively malfunctioning drone","a malfunctioning windmill drone","an armored salvage bot"];

nb.ignores = nb.ignores || [];
