//GlobalVariable
let genderType="female";
//PrintGender
function printGender(){
let colour="brown"
if(genderType.startswithfemale){
    var age=30;
    let colour="pink";
console.log("Inside if block colour:", colour);
}
console.log("Outside if block value of age:", age);

console.log("Outside if block colour:", colour);
}
 printGender();

console.log("the value of genderType:",genderType);

genderType="male";

printGender();