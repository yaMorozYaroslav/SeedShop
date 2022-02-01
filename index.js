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

const word = 'string';
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
} 