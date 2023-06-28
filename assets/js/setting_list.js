// JavaScript Document


// 各カテゴリーjsonファイル
const url01 = "assets/json/health_care.json";
const url02 = "assets/json/beauty_care.json";
const url03 = "assets/json/fem_care.json";
const url04 = "assets/json/sdgs.json";
const url05 = "assets/json/food_health.json";
const url06 = "assets/json/food_drink.json";
const url07 = "assets/json/life_care.json";
const url08 = "assets/json/home_care.json";
const url09 = "assets/json/pet_care.json";
const url10 = "assets/json/enjoy_life.json";
const url11 = "assets/json/store_pharmasy.json";
const url12 = "assets/json/others.json";

$(function(){
	fetch( url01 , {cache: "no-store"} ).then( response => response.json() ).then( data => formatJSON(data,"list01") );
	fetch( url02 , {cache: "no-store"} ).then( response => response.json() ).then( data => formatJSON(data,"list02") );
	fetch( url03 , {cache: "no-store"} ).then( response => response.json() ).then( data => formatJSON(data,"list03") );
	fetch( url04 , {cache: "no-store"} ).then( response => response.json() ).then( data => formatJSON(data,"list04") );
	fetch( url05 , {cache: "no-store"} ).then( response => response.json() ).then( data => formatJSON(data,"list05") );
	fetch( url06 , {cache: "no-store"} ).then( response => response.json() ).then( data => formatJSON(data,"list06") );
	fetch( url07 , {cache: "no-store"} ).then( response => response.json() ).then( data => formatJSON(data,"list07") );
	fetch( url08 , {cache: "no-store"} ).then( response => response.json() ).then( data => formatJSON(data,"list08") );
	fetch( url09 , {cache: "no-store"} ).then( response => response.json() ).then( data => formatJSON(data,"list09") );
	fetch( url10 , {cache: "no-store"} ).then( response => response.json() ).then( data => formatJSON(data,"list10") );
	fetch( url11 , {cache: "no-store"} ).then( response => response.json() ).then( data => formatJSON(data,"list11") );
	fetch( url12 , {cache: "no-store"} ).then( response => response.json() ).then( data => formatJSON(data,"list12") );
});


function formatJSON(json,target){	
	let html = "";
	for (let object of json ){
		if ( object.status == true ) {
			html += "<div class=\"item\">";
			html += "<p class=\"\">" + object.company_name + "</p>";
			if ( object.joint_exhibition == true || object.for_business == true ) {
				html += "<ul class=\"cate\">";
				if ( object.joint_exhibition == true ) {
					html += "<li class=\"l-exhibitor\">" + "共同出展社" + "</li>";
				}
				if ( object.for_business == true ) {
					html += "<li class=\"l-business\">" + "for ビジネス" + "</li>";
				}
				html += "</ul>";
			}			
			html += "</div>";
		}
	}
	document.getElementById(target).innerHTML = html;
}

