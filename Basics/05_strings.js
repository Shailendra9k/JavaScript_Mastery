// String basics
const area = "Hakaniemenranta";
const postCode = 530;

//Using back-tick `` in contatenate strings.

console.log(`The ${area} postal code is ${postCode}.`)

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
const sliceFromBack = courseName.slice(-8,3);
console.log(sliceFromBack);

//Trim method

const stringTrim = "     Software Developer     ";
console.log(stringTrim);
console.log(stringTrim.trim());

//Replace method
const url = "https://shailendra.com/shailendra%20kushwaha";
const change = url.replace("%20", "-");
console.log(change);