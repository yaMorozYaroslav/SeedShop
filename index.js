const breakfast = {first: 'tea',
                    second: 'bread', 
                    third:'steak'};
const lunch = {
	first: 'cofee',
	second: 'soup'
};
function longer(menu1, menu2){
  if(menu1.first.length<menu2.first.length){
  	return menu1
  }else{ return menu2
  }
}
console.log(longer(breakfast, lunch))