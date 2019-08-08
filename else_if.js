var n;
if (n==1) {
	//
} else if(n==2) {
	//
} else if(n==3) {
	//
} else {
	//
}

if (n==1) {
	//
}
else {
	if (n==2) {
		//
	}
	else {
		if (n==3) {
			//
		}
		else {
			//
		}
	}
}

switch (n) {
	case 1:
		//
		break;
	case 2:
		//
		break;
	case 3:
		//
		break;
	default:
		break;
}

function convert(x) {
	switch(typeof x) {
		case 'number':
			//
			return x.toString(16);
		case 'string':
			//
			return '"'+x+'"';
		default:
			return String(x);
	}
}

function printArray(a) {
	var len=a.length, i=0;
	if (len==0) 
		console.log("Empty Array")
	else {
		do
		{
			console.log(a[i]);
		} while (++i < len);

	}
}

for (var count=0; count<10; count++);
	// console.log(count);
// printArray([1,3,10,5,20,100,80]);
var i,j,sum=0;
for (i=0,j=10;i<10;i++,j--) {
	sum +=i*j;
	// console.log(sum);
}

for (var p in o) {
	console.log(o[p])
}