# Strings-Letter-Count
letters-counts.js file can be used as plug-in to find the each letter count in String.

Please Note: 
  By default provided "lettersCount()" function will return case sensitive results. 
  In case you are expecting case insensitive results just pass false as parameter list

Example:
 var str="A Big space bar";
    //Case sensitive :   
    str.lettersCount() // returns "A=1 B=1 i=1 g=1 s=1 p=1 a=2 c=1 e=1 b=1 r=1"
    //Case Insensitive:
    str.lettersCount(false) // returns "a=3 b=2 i=1 g=1 s=1 p=1 c=1 e=1 r=1"
