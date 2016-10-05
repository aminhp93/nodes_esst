// console.log(process.argv);

// function grab(flag){
// 	var index = process.argv.indexOf(flag);
// 	return (index === -1) ? null : process.argv[index + 1];
// }

// var greeting = grab('--greeting');
// var user = grab('--user');

// if (!user || !greeting){
// 	console.log("you blew it")
// } else {
// 	console.log(`Welcome ${user}, ${greeting}`)
// }

var question = [
	"What is your name",
	"What is your fav hobby",
	"What is your prefeered programming language"
]

var answer = [];

function ask(i){
	
	process.stdout.write(`\n\n\n ${question[i]}`);
	process.stdout.write("  >  ");
}

process.stdin.on('data', function(data){
	// process.stdout.write('\n' + data.toString().trim() + '\n');
	answer.push(data.toString().trim());

	if (answer.length < question.length){
		ask(answer.length);
	} else {
		process.exit();
	}
})

process.on('exit', function(){
	process.stdout.write('\n\n\n');

	process.stdout.write(`Go ${answer[1]} ${answer[2]} you can finsih wirting ${answer[2]} late`);

	process.stdout.write('\n\n\n');
})

ask(0);

