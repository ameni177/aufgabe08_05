function aufgabe1(s)
{
 let s1="";
 let i;
 let i1;
 
for (i=s.length-1;i>=0;i--){
    
   s1 = s1 + s[i];
 
}

console.log(s + " rückwärts ist: " + s1);
}


aufgabe1("hallo");