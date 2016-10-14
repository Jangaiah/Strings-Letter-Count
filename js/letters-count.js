//By default it gives case sensitive results.
//If you are expecting case insensitive just pass 'false' as parameter
"use strict";
String.prototype.lettersCount = function(){
 var self=this.trim();
 if(arguments[0]==false) self=self.toLowerCase();
 let len=self.length;
 var countObj = {};
 countObj[self[0]] = 1;
 for(let i=1;i<len;i++) {
	if(self[i]!=' '){
		if(countObj[self[i]]) ++countObj[self[i]];
		else countObj[self[i]]=1;
	} 
 } 
 var retStr = "";
 for(let x in countObj) retStr += x+ "="+countObj[x]+" "; 
 return retStr.trim();
}
