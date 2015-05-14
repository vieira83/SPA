function myFunction(arg1,arg2){
	var local_var='foo';
	a_function =function(){
		console.log('a function');
	};
	function inner(){
		console.log('inner');	
	}
}

var regular_joe ='regular_joe is assigned';
function prison(){
	console.log(regular_joe);
	var regular_joe;
}

outer(1);
function outer(){
	var local_var ='foo';
	function inner(){
		console.log('inner');	
	}
	inner();
}

var regular_joe = "I'm here to save the day";
function supermax(){
	var regular_joe = 'regular_joe is assigned';
	//logs 'regular_joe is assigned';
	console.log(regular_joe);
	function prison(){
		var regular_joe;
		console.log(regular_joe);
	}
	//logs undefined	
	prison();
}

supermax();

var proto = {
	sentence:4,
	probation:2
};

var firstPrisioner = Object.create(proto);
firstPrisioner.name = 'Joe';
fitstPrisioner.id = '12A';
var secondPrisioner = Object.create(proto);
secondPrisioner.name = 'luke';
secondPrisioner.id = '2BC';

var makePrisioner = function(name, id){
	var prisioner = Object.create(proto);
	prisioner.name =name;
	prisioner.id =id;
	return prisioner;
};
var fPrisioner = makePrisioner('Joe','12A');
var sPrisioner = makePrisioner('luke','2BC');
