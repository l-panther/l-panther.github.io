$(document).ready(function() {
	
	class Region {

		constructor(id, name, image, description, description2) {
			this.id = id;
			this.name = name;
			this.image = image;
			this.description = description;
			this.description2 = description2;
		}

		card() {
			let output = "";
				output += "<!-- Region " + this.id + " -->";
				output += "	<div>";
				output += "<article class='region' id='region" + this.id + "'>";
				output += "<h3>" + this.name + "</h3>";
			
				output += "<div class='w3-hide-medium image-container'>";
				output += "<a href='#map-canvas' title='View in map'><img src='img/" + this.image + ".jpg' alt='Kingston' class='picture'></a>";
				output += "</div>";
				output += "<div class='description'>";
				
				output += "<p>" + this.description + "</p>";
				output += "<p>" + this.description2 + "</p>";
				output += "</div>";
				
				
				output += "<div>";
				output += "</article> <!-- End region 4 -->";

				output += "</div> <!-- End col -->";
			return output;

		}
	}

	let region1 = new Region("1", 
							 "Kingston", 
							 "kingston", 
							 "Kingston is the capital and largest city of Jamaica, located on the southeastern coast of the island.",
							 "It faces a natural harbour protected by the Palisadoes, a long sand spit which connects the town of Port Royal and the Norman Manley International Airport to the rest of the island."),
		
		region2 = new Region("2", 
							 "Saint Mary", 
							 "st_mary", 
							 "Saint Mary is a parish located in the northeast section of Jamaica. With a population of 114,227 it is one of Jamaica's smallest parishes, located in the county of Middlesex. ",
							 "Its chief town and capital is Port Maria, located on the coast. It is also the birthplace of established dancehall reggae artists, such as Capleton, Sizzla and Tanya Stephens."),
		
		region3 = new Region("3", 
							 "Portmore", 
							 "portmore", 
							 "Portmore is a large coastal city in southern Jamaica in Saint Catherine, and a dormitory town for the neighbouring cities of Kingston and Spanish Town.",
							 "Much of the land is reclaimed swamp. Port Henderson Hill, formerly known as Salt Pond Hill, is visible from neighbouring parishes and was a possible Arawak grave site because the Arawak buried their dead in caverns, which Port Henderson Hill is riddled with. The most famous cave is named 'Twin Sisters'."),
		
		region4 = new Region("4", 
							 "Saint Ann", 
							 "kingston", 
							 "Saint Ann is the largest parish in Jamaica. It is situated on the north coast of the island, in the county of Middlesex, roughly halfway between the eastern and western ends of the island.",
							 "Saint Ann is the birthplace of reggae singers Floyd Lloyd, Burning Spear, Busy Signal, Bryan Art, Romain Virgo, Chezidek, Shabba Ranks, Justin Hinds, Perfect (musician) and Bob Marley. Marcus Mosiah Garvey, one of seven Jamaican National Heroes, was also born there."),
		
		regions = [region1, region2, region3, region4],
		output = "";

	for (let i = 0; i < regions.length; i++) {
		 output += regions[i].card();
	}

	$("#regionList").html(output);
});