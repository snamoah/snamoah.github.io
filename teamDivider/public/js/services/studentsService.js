angular.module('eitNames', [])
	.factory('eitNames', function() {
		var student_path = "/public/images/";
		var students = [{name: "Ayo", path: student_path + "ayo.jpg"}, 
		{name: "Blessing Onomesino", path: student_path +"blessing.jpg"}, 	
		{name: "Esther Olatunde", path: student_path +"prince.jpg"}, 
		{name: "Babara Okoto", path: student_path +"babara.jpg"},
		{name: "Priscilla Hazel", path: student_path +"priscilla.jpg"},
		{name: "Prince Anim", path: student_path+"prince.jpg"},
		{name: "David Evhade", path: student_path +"david.jpg"},
		{name: "Kennedy Anyinatoe", path: student_path +"kennedy.jpg"},
		{name: "Ike Owoh", path: student_path +"ike.jpg"},
		{name: "Innocent Udeogu", path: student_path +"innocent.JPG"},
		{name: "Philip Nunoo", path: student_path +"philip.jpg"},
		{name: "Cassandra Sarfo", path: student_path +"cassandra.jpg"},
		{name: "Derik Frimpong", path: student_path +"derek.jpg"},
		{name: "Panin Tenkorang", path: student_path +"panin.jpg"},
		{name: "Paul Damalie", path: student_path +"paul.jpg"},
		{name: "Barnabas Ayinloya", path: student_path +"barnabas.jpg"},
		{name: "Laud Bruce Tagoe", path: student_path +"laudbruce.jpg"},
		{name: "Laud Bentil", path: student_path +"laudbentil.jpg"},
		{name: "Kwame Asiedu", path: student_path +"kwamea.jpg"},
		{name: "Kwame Yeboah", path: student_path +"kwamey.jpg"},
		{name: "Jerry King", path: student_path +"jerry.jpg"},
		{name: "Kelechi Uduagu", path: student_path +"kelechi.JPG"},
		{name: "Afi Kwao", path: student_path +"afi.jpg"},
		{name: "Moses Abubakari", path: student_path +"moses.jpg"},
		{name: "Benjamin Kissi", path: student_path +"ben.jpg"},
		{name: "Abideen Adeleye", path: student_path +"abideen.jpg"},
		{name: "Alexander Okereke", path: student_path +"alex.jpg"},
		{name: "Samuel Nkoom Amoah", path: student_path +"samuel.png"}];

		return students;
	});