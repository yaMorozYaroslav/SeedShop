function yaroslav(age, gender, job){
	this.age = age;
	this.gender = gender;
	this.job = job;
	this.getFullName = function(){
return `${this.age} ${this.job}`;
	}
}
const yaro = new yaroslav(
	22, 'male', 'developer')
console.log(yaro.getFullName())