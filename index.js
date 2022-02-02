/*const indices = [3, 7]
const minIndex = [4]
function findNextIndex(array, minIndex){
for(var element of array){
	if(element >= minIndex){
		return element + 1;
	}
}
return false;
}
console.log(indices);
console.log(minIndex);
console.log(findNextIndex(indices, minIndex));*/

/*const word = 'string';
console.log(word);
function mapString(string){
	let map={};
  for(let i=0;i<string.length;i++){
  	let letter = string[i];
  	if(map[letter]){
  		map[letter].push(i);
  		}else{map[letter]=[i];
  		}}
    return map;
};
let stringMap = mapString(word);
for(let letter in stringMap){
	console.log(letter+': '+stringMap[
		letter]);
} */

class Person{
	constructor(first, last, bob){
		this.first = first;
		this.last = last;
		this.bob = new Date(bob);
	}
	getBirthYear(){
	  return this.bob.getFullYear();
	}
	getFullName(){
	  return `${this.first} ${this.last}`;
	}
}
const person1=new Person(
	'John', 'Doe', '4-3-1980');
console.log(person1.getFullName());