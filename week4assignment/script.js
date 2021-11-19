var names=new Array();
names[0]="Sherry";
names[1]="jackey";
names[2]="Jennny";
names[3]="jason";
names[4]="paulinho";
names[5]="Joe";
names[6]="larry";
names[7]="paula";
names[8]="robin";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}