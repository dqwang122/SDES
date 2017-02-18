var IP = [57,49,41,33,25,17,9,1,59,51,43,35,27,19,11,3
		,61,53,45,37,29,21,13,5,63,55,47,39,31,23,15,7
		,56,48,40,32,24,16,8,0,58,50,42,34,26,18,10,2
		,60,52,44,36,28,20,12,4,62,54,46,38,30,22,14,6]

var IP_1 = [39,7,47,15,55,23,63,31,38,6,46,14,54,22,62,30
		,37,5,45,13,53,21,61,29,36,4,44,12,52,20,60,28
		,35,3,43,11,51,19,59,27,34,2,42,10,50,18,58,26
		,33,1,41,9,49,17,57,25,32,0,40,8,48,16,56,24]
		
var E = [31,0,1,2,3,4,3,4,5,6,7,8,7,8,9,10
		,11,12,11,12,13,14,15,16,15,16,17,18,19,20,19,20
		,21,22,23,24,23,24,25,26,27,28,27,28,29,30,31,0]
		
var P = [15, 6,19,20,28,11,27,16,0,14,22,25, 4,17,30, 9,
		1, 7,23,13,31,26, 2, 8,18,12,29, 5,21,10, 3,24]
		
var S = new Array();
S[0] = [[14, 4,13, 1, 2,15,11, 8,3,10, 6,12, 5, 9, 0, 7],
		[0,15, 7, 4,14, 2,13, 1,10, 6,12,11, 9, 5, 3, 8],
		[4, 1,14, 8,13, 6, 2,11,15,12, 9, 7, 3,10, 5, 0],
		[15,12, 8, 2, 4, 9, 1, 7,5,11, 3,14,10, 0, 6,13]];
		
S[1] = [[15, 1, 8,14, 6,11, 3, 4,9, 7, 2,13,12, 0, 5,10],
	[3,13, 4, 7,15, 2, 8,14,12, 0, 1,10, 6, 9,11, 5],
	[0,14, 7,11,10, 4,13, 1,5, 8,12, 6, 9, 3, 2,15],
	[13, 8,10, 1, 3,15, 4, 2,11, 6, 7,12, 0, 5,14, 9]];

S[2] = [[10, 0, 9,14, 6, 3,15, 5,1,13,12, 7,11, 4, 2, 8],
	[13, 7, 0, 9, 3, 4, 6,10,2, 8, 5,14,12,11,15, 1],
	[13, 6, 4, 9, 8,15, 3, 0,11, 1, 2,12, 5,10,14, 7],
	[1,10,13, 0, 6, 9, 8, 7,4,15,14, 3,11, 5, 2,12]];

S[3] = [[7,13,14, 3, 0, 6, 9,10,1, 2, 8, 5,11,12, 4,15],
	[13, 8,11, 5, 6,15, 0, 3,4, 7, 2,12, 1,10,14, 9],
	[10, 6, 9, 0,12,11, 7,13,15, 1, 3,14, 5, 2, 8, 4],
	[3,15, 0, 6,10, 1,13, 8,9, 4, 5,11,12, 7, 2,14]];

S[4] = [[2,12, 4, 1, 7,10,11, 6,8, 5, 3,15,13, 0,14, 9],
	[14,11, 2,12, 4, 7,13, 1,5, 0,15,10, 3, 9, 8, 6],
	[4, 2, 1,11,10,13, 7, 8,15, 9,12, 5, 6, 3, 0,14],
	[11, 8,12, 7, 1,14, 2,13,6,15, 0, 9,10, 4, 5, 3]];

S[5] = [[12, 1,10,15, 9, 2, 6, 8,0,13, 3, 4,14, 7, 5,11],
	[10,15, 4, 2, 7,12, 9, 5,6, 1,13,14, 0,11, 3, 8],
	[9,14,15, 5, 2, 8,12, 3,7, 0, 4,10, 1,13,11, 6],
	[4, 3, 2,12, 9, 5,15,10,11,14, 1, 7, 6, 0, 8,13]];

S[6] = [[4,11, 2,14,15, 0, 8,13,3,12, 9, 7, 5,10, 6, 1],
	[13, 0,11, 7, 4, 9, 1,10,14, 3, 5,12, 2,15, 8, 6],
	[1, 4,11,13,12, 3, 7,14,10,15, 6, 8, 0, 5, 9, 2],
	[6,11,13, 8, 1, 4,10, 7,9, 5, 0,15,14, 2, 3,12]];
	
S[7] = [[13, 2, 8, 4, 6,15,11, 1,10, 9, 3,14, 5, 0,12, 7],
	[1,15,13, 8,10, 3, 7, 4,12, 5, 6,11, 0,14, 9, 2],
	[7,11, 4, 1, 9,12,14, 2,0, 6,10,13,15, 3, 5, 8],
	[2, 1,14, 7, 4,10, 8,13 ,15,12, 9, 0, 3, 5, 6,11]];
		
var IPC = [56,48,40,32,24,16, 8, 0,57,49,41,33,25,17, 9, 1,
			58,50,42,34,26,18,10, 2,59,51,43,35,62,54,46,38,
			30,22,14, 6,61,53,45,37,29,21,13, 5,60,52,44,36,
			28,20,12, 4,27,19,11, 3];
		
var LS = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];

var PC = [13,16,10,23, 0, 4, 2,27,14, 5,20, 9,22,18,11, 3,
		25, 7,15, 6,26,19,12, 1,40,51,30,36,46,54,29,39,
		50,44,32,47,43,48,38,55,33,52,45,41,49,35,28,31];

var IV = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
		0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	
var xor = function(a, b){
	var len = a.length;
	var result = new Array();
	for(var i = 0 ; i < len; i ++){
		result[i] = a[i] ^ b[i];
	}
	return result;
}	

var lshift = function(a,bit){
	var len = a.length;
	var result = a.slice(bit);
	result.push(a[0]);
	if(bit == 2)
		result.push(a[1]);
	return result;
}	

var createKey = function(initk){
	var K = new Array();
	
	var temp1 = new Array();
	var C = new Array();
	var D = new Array();
	var p = 0;
	var q = 0;
	for(var i = 0; i < 56; i++){
		temp1[i] = initk[IPC[i]];
		if(i < 28)
			C[p ++] = temp1[i];
		else
			D[q ++] = temp1[i];
	}
	
	for(var i = 0; i < 6; i ++){		//6 turns
		C = lshift(C, LS[i]);
		D = lshift(D, LS[i]);
		var temp2 = C.concat(D);
		var temp3 = new Array();
		for(var j = 0; j < 48; j ++){
			temp3[j] = temp2[PC[j]];
		}
		K[i] = temp3;
	}				
	return K
}

var F = function(R, K){
	var temp1 = new Array();
	for(var i = 0; i < 48; i ++){
		temp1[i] = R[E[i]];
	}
	
	var temp2 = xor(temp1, K);
	
	var temp3 = new Array();
	for(var i = 0; i < 8; i ++){
		var X = temp2.slice(i * 6, i * 6 + 6);
		var h1 = X[0] * 2 + X[5];
		var h2 = X[1] * 8 + X[2] * 4 + X[3] * 2 + X[4];
		var result = S[i][h1][h2];
		var bin = new Array();
		var h = 0;
		while(result){
			bin[h ++] = result % 2;
			result = Math.floor(result / 2);
		}
		for(var j = 0; j < 4; j ++){
			if(3 - j < bin.length)
				temp3[i * 4 + j] = bin[3 - j];
			else
				temp3[i * 4 + j] = 0;
		}
	}
	
	var temp4 = new Array();
	for(var i = 0; i < 32; i++){
		temp4[i] = temp3[P[i]];
	}
	return temp4;
}

var DES_encrypt = function(m,initk){
	var L,R;
	var p,q;
	p = q = 0;
	L = new Array();
	R = new Array();
	m1 = new Array();
	for(var i = 0; i < 64; i ++){
		m1[i] = m[IP[i]];
		if(i < 32)
			L[p ++] = m1[i];
		else{
			R[q ++] = m1[i];
		}
	}
	
	var K = createKey(initk);
	for(var i = 1; i < 7; i ++){			//R1 - R6  6 turns
		var temp = L.slice(0);				//Li-1
		var F_R = F(R, K[i - 1]);
		L = R.slice(0);					//Li = Ri-1
		R = xor(temp, F_R);					//Ri
	}
	var m2 = R.concat(L);
	//var m2 = L.concat(R);
	
	c = new Array();
	for(var i = 0; i < 64; i ++)
		c[i] = m2[IP_1[i]];	
	return c;
}

var DES_decrypt = function(c,initk){
	var L,R;
	var p,q;
	p = q = 0;
	L = new Array();
	R = new Array();
	c1 = new Array();
	for(var i = 0; i < 64; i ++){
		c1[i] = c[IP[i]];
		if(i < 32)
			L[p ++] = c1[i];
		else{
			R[q ++] = c1[i];
		}
	}
	
	var K = createKey(initk);
	for(var i = 1; i < 7; i ++){			//R1 - R6  6 turns
		var temp = L.slice(0);				//Li-1
		var F_R = F(R, K[6 - i]);
		L = R.slice(0);					//Li = Ri-1
		R = xor(temp, F_R);					//Li
	}
	var c2 = R.concat(L);
	/*for(var i = 1; i < 7; i ++){			//R1 - R6  6 turns
		var temp = R.slice(0);				//Li-1
		var F_L = F(L, K[6 - i]);
		R = L.slice(0);					//Li = Ri-1
		L = xor(temp, F_L);					//Li
	}
	var c2 = L.concat(R);*/
	
	m = new Array();
	for(var i = 0; i < 64; i ++)
		m[i] = c2[IP_1[i]];	
	return m;
}

var CBC = function(m, initk){
	var len = m.length;
	var group = Math.ceil(len / 64);
	var remainder = len % 64;
	var supply;
	var ch = new Array();
	var bin = new Array();
	var h = 0;
	
	if(remainder >=1 && remainder <= 56)
		supply = 64 - remainder - 8;
	else if(remainder == 0){
		supply = 64 - remainder - 8;
		group = group + 1;
	}
	else{
		supply = 64 - remainder + 56;
		group = group + 1;
	}
	
	for(var i = 0; i < supply; i ++){
		ch[i] = Math.round((Math.random()));
	}
	var n = supply + 8;
	if(n == 0)
		bin[0] = 0;
	while(n){
		bin[h ++] = n % 2;
		n = Math.floor(n / 2);
	}
	for(var j = 0; j < 8; j ++){
		if(7 - j < bin.length)
			ch[supply + j] = bin[7 - j];
		else
			ch[supply + j] = 0;
	}
	m = m.concat(ch);
	
	
	var c = new Array();
	var pre = new Array();
	for(var i = 0; i < group; i ++){
		var m_temp = m.slice(64 * i, 64 * i + 64);
		if(i == 0)
			m_temp = xor(IV, m_temp.slice(0));
		else
			m_temp = xor(pre, m_temp.slice(0));
		pre = DES_encrypt(m_temp ,initk);
		c = c.concat(pre.slice(0));
	}
	return c;
}

var CBC_inv = function(c, initk){
	var m = new Array();
	var pre = new Array();
	var group = c.length / 64;
	var m_temp = new Array();
	for(var i = 0; i < group; i ++){
		var c_temp = c.slice(64 * i, 64 * i + 64);
		m_temp = DES_decrypt(c_temp,initk);
		if(i == 0)
			m_temp = xor(IV, m_temp.slice(0));
		else
			m_temp = xor(pre, m_temp.slice(0));
		m = m.concat(m_temp.slice(0));
		pre = c_temp.slice(0);
	}
	var num = 0;
	var len = m.length;
	for(var i = 0; i < 8; i ++)
		num += m[len - i - 1] * (1 << i);
	var m_result = m.slice(0, len - num);
	return m_result;
}

window.onload=function(){
	var mf=document.getElementById("clearfile");
	var cf=document.getElementById("cipherfile");
	mf.onchange=function(){
		var f1=new FileReader;
		f1.onload=function(){
			//alert(f1.result);
			var x=document.getElementById("cl_DES");
			x.value=this.result;
		};
		f1.readAsBinaryString(mf.files[0]);
	};
	cf.onchange=function(){
		var f3=new FileReader;
		f3.onload=function(){
			//alert(f1.result);
			var x=document.getElementById("ci_DES2");
			x.value=this.result;
		};
		f3.readAsBinaryString(cf.files[0]);
	};
};

var toarray = function(str){
	var a = new Array();
	for(var i = 0; i < str.length; i++)
		a[i] = str[i] - '0';
	return a;
}

var printarray = function(a){
	var str = a.join();
	str = str.split(',').join('');
	return str;
};

function show_cipher(){
	var mf=document.getElementById("cl_DES").value;
	var mkf=document.getElementById("cl_DESkey").value;
	if(mf == ""){
		alert("Please input DES data!");
		return false;
	}
	if(mkf == ""){
		alert("DES key hasn't been got!");
		return false;
	}
	var m = toarray(mf);
	var mk = toarray(mkf);
	//var result = DES_encrypt(m, mk)
	var result = CBC(m, mk);
	result = printarray(result);
	alert("加密完成！");
	document.getElementById("ci_DES").value=result;   // 改变内容
	document.getElementById("ci_DES2").value = result;
	return false;
};

function show_clear(){
	var cf=document.getElementById("ci_DES2").value;
	var ckf=document.getElementById("cl_DESkey2").value;
	if(ckf == ""){
		alert("DES key hasn't been got!");
		return false;
	}
	var c = toarray(cf);
	var ck = toarray(ckf);
	var result = CBC_inv(c, ck);
	result = printarray(result);
	alert("解密完成！");
	document.getElementById("cl_DES2").value=result;   // 改变内容
	return false;
};

function clickDownloadcipher(aLink) {  
	str =  document.getElementById("ci_DES").value;  
	aLink.href = "data:text/txt;charset=utf-8,"+str;   
} 

function clickDownloadclear(aLink) {  
	str =  document.getElementById("cl_DES2").value;  
	aLink.href = "data:text/txt;charset=utf-8,"+str;   
} 