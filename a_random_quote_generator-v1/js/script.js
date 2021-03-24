/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


// An array of random quotes 
let quotes = [
  {  
   quote: "Cowards die many times before their deaths, The valiant never taste of death but once.",   
   source: "William Shakespeare",
   citation: "The Tragedy of Julius Caesar",
   year: 1599
  },    
  {  
    quote: "Pain is inevitabe. Suffering is optional.",   
    source: "Haruki Murakami",
    citation: "What I Talk About When I Talk About Running",
    year: 2007
   }, 
   {  
    quote: "Reality is wrong, dreams are real.",   
    source: "Tupac"
   }, 
   {  
    quote: "Don’t just teach your children to read. Teach them to question what they read. Teach them to question everything.",   
    source: "George Carlin",
    year:  1992
   }, 
   {  
    quote: "There is a crack, a crack in everything. That’s how the light gets in.",   
    source: "Leonard Cohen",
    citation: "Anthem",
    year: 1992
   }, 
];


// This function extracts a random quote from the array and returns it
function getRandomQuote( array ) {

  let randomNum = Math.floor(Math.random() * quotes.length);// Iterating through array to generate random quote
  let randomQuote = quotes[randomNum]; // Random quote stored in a variable
  return randomQuote; 
}

// This function prints the random quote to the DOM
function printQuote(){
  let callRandom = getRandomQuote( quotes ); // Variable with random quote value
  let message = "<p class='quote'>" + callRandom.quote + "</p>";
  message += "<p class='source'>" + callRandom.source; // These two lines would display the standard quote with no extra properties

//Checks if optional properties are in array and prints if so
if ( callRandom.citation ) {
  message += "<span class='citation'>" + callRandom.citation + "</span>"; 
} // Checks for extra prop
  if (callRandom.year) {
    message +="<span class='year'>" + callRandom.year + "</span>" + "</p>";
  } // Checks for optional property

  document.getElementById('quote-box').innerHTML = message; 

}




document.getElementById('load-quote').addEventListener("click", printQuote, false);