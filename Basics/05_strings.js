// String basics
const city = "Helsinki";
const postCode = 530;

//Using back-tick `` in contatenate strings.

console.log(`The ${city} postal code is ${postCode}.`)

//String object constructor and Strings methods
const courseName = new String("FullStack");

//Somemethods
console.log(courseName);
console.log(courseName.length);
console.log(courseName.charAt(4));
console.log(courseName.indexOf('u'));

//substring method
const newString = courseName.substring(0,5 );
console.log(newString);
//slice method
const sliceString = courseName.slice(0,5);
console.log(sliceString);
const sliceFromBack = courseName.slice(-9,3);
console.log(sliceFromBack);

//Trim method

const stringTrim = "     Software Developer     ";
console.log(stringTrim);
console.log(stringTrim.trim());