/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var awesomeThoughts = 'awesome teste';
 var funThoughts = awesomeThoughts.replace('awesome', 'fun');

 $('#main').append(funThoughts);

 var formattedName = HTMLheaderName.replace('%data%','Marcia');
 var formattedRole = HTMLheaderRole.replace('%data%', 'Learning JS');


$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

//literal notation
var skills = ['java','js'];
var Bio = {
	'name' : 'M',
	'role' : 'Developer',
	'contactInfo' : {
		'mobile' : '85567834',
		'email' : 'mans@gmail.com'
	},
	'pictURL' : 'images/fry.jpg',
	'welcomeMsg' : 'Welcome',
	'skills' : skills	
}

//add new properties to the object
Bio['city'] = 'BH';

//Create a new object that was constructed using literal notation
//the values of properties are the same in all new objets
var teste = Object.create(Bio);
console.log(teste.contactInfo.email);
console.log(teste.name);
$('#main').prepend(Bio.name);

