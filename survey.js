const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
  rl.question('Why do you exist?', (answer2) => {
    rl.question('what is your highest ambition?', (answer3) => {
      rl.question('Who is your favorite Politician?', (answer4) => {
        rl.question('What is your opinion of hookup culture?', (answer5) => {
          
  console.log(`Your answers have been loged to no ends: Name: ${answer}, Reason'existance: ${answer2}, Earthly-goal: ${answer3}, Political mindset: ${answer4}, Sexual outlook: ${answer5}`);

  rl.close();
})})})});
});