let john = 0;
let jane = 0;
let mark = 0;

function vote(candidate){

if(candidate=="John Doe"){
john++;
document.getElementById("john").innerHTML=john;
}

else if(candidate=="Jane Smith"){
jane++;
document.getElementById("jane").innerHTML=jane;
}

else{
mark++;
document.getElementById("mark").innerHTML=mark;
}

alert("Thank you for voting for " + candidate);
}