var obj1={
	name:"IamName",
	value:"IamValue",
	age:"IamAge"
};
obj1.prototype.prototypeName="IamprototypeName";
obj1.prototype.prototypeAge="IamprototypeAge";

for(attr in obj1){
	console.log(attr)
}
