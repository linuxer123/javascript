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
var o= {x:1,y:2,z:3};

for (var p in o){

	console.log(p)
}



try {
	//
	throw new Error("x不能是负数");
} catch {
	console.log("e");
} finally {
	//
	console.log("finally")
}

try {
	// 要求用户输入一个数字
	var n=Number(prompt("请输入一个正整数"));
	// 假设输入是合法的，计算这个数年阶乘
	var f= factorial(n);
	// 显示结果
	alert(n + "I =" + f);
} catch {
	// 如果输入不合法，将执行这里的逻辑
	alert(ex);	// 告诉用户产生了什么错误
}