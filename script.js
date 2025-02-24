//your JS code here. If required.
function dayOfYear(year) {
	if(year%4==0 && year%100!==0 || year%400===0){
		return 366
	}
	else{
		return 365
	}
}
console.log(dayOfYear(2022))
console.log(dayOfYear(2024))
console.log(dayOfYear(1900))
console.log(dayOfYear(2000))

dayOfYear(2000)