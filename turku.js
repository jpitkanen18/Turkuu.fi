// For generating the highlighting effect animations


for(var i = 0; i <= 100; i += 0.33){
	let style = `${i}% {
		background: linear-gradient(42deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%);
	}`
	let output = ((i - 44)/(55 - 44)) * (100 - 0) + 0
	if(i > 44 && i < 55) {
		style = `${i}% {
		background: linear-gradient(42deg, rgba(255,255,255,1) ${output - 33}%, rgba(177,177,177,1) ${output}%, rgba(255,255,255,1) ${output + 33}%);
		}`
	}
	if(i >= 33 && i <= 44) {
		style = `${i}% {
			background: linear-gradient(42deg, rgba(255,255,255,1) 0%, rgba(177,177,177,1) 0%, rgba(255,255,255,1) ${output + 33}%);
			}`
	}
	if(i >= 55 && i <= 66) {
		style = `${i}% {
			background: linear-gradient(42deg, rgba(255,255,255,1) ${output - 33}%, rgba(177,177,177,1) 100%, rgba(255,255,255,1) 100%);
			}`
	}
	console.log(style)
}