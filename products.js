// Edit this file to add/remove products and categories.
// Replace image paths with real product photos 
//Added: orderUrl parameter to handle orders until Square integration complete
const STORE = {
  categories: [
    {id:"cookies", name:"Cookies", status:"available"},
    {id:"breakfast-breads", name:"Breakfast Breads", status:"coming"},
    {id:"custom-cakes", name:"Custom Cakes", status:"coming"}
  ],
  products: [
    {id:"salted-chip-12", category:"cookies", name:"Salted Choc. Chip(12)", price:17.99, image:"assets/cookie_hq12.png",  orderUrl: "https://square.link/u/cjqPTlSd", description:"A smooth bite that delivers a hint of salt and fades into a rich chocolate finish."},
    {id:"salted-chip-36", category:"cookies", name:"Salted Choc. Chip(36)", price:39.99, image:"assets/cookie_hq36.png", orderUrl: "https://square.link/u/KqNjtcEp",  description:"You're a true cookie connoisseur, and you deserve decadence. Here at last."},
    {id:"coconut-cookies-12", category:"cookies", name:" Coconut Cookie(12)", price:14.99, image:"assets/cookie-placeholder.png", orderUrl: "https://square.link/u/xULCE9rX",  description:"Coconut flakes toasted atop a smooth, buttery cookie base."},
    {id:"coconut-cookies-36", category:"cookies", name:" Coconut Cookie(36)", price:39.99, image:"assets/cookie-placeholder.png", orderUrl: "https://square.link/u/I49pFYJW", description:"Buttery smooth cookies topped with lightly toasted coconut flakes."}
  ]
};