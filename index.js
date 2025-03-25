// Code your solutions in this file
function countDown(num) {
    while (num >= 0) {
      console.log(num);
      num--;
    }
  }
  
  function writeCards(names, event) {
    const messages = [];
    let i = 0;
    
    while (i < names.length) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      i++;
    }
    
    return messages;
  }
  
  console.log("Countdown from 10:");
  countDown(10);
  
  console.log("\nThank you cards:");
  const thankYouMessages = writeCards(["Charlie", "Samip", "Ali"], "birthday");
  console.log(thankYouMessages);