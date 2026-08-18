// Edit this file to add/remove products and categories.
// Replace image paths with your real product photos when available.
const STORE = {
  categories: [
    {id:"cookies", name:"Cookies", status:"available"},
    {id:"breakfast-breads", name:"Breakfast Breads", status:"coming"},
    {id:"custom-cakes", name:"Custom Cakes", status:"coming"}
  ],
  products: [
    {id:"classic-chip", category:"cookies", name:"Salted Choc. Chip(12)", price:17.99, image:"assets/cookie_hq01.png", description:"You're a true cookie connoisseur, and you deserve decadence. Here at last."},
    {id:"double-choc", category:"cookies", name:"Salted Choc. Chip(36)", price:39.99, image:"assets/cookie_hq01.png", description:"A salty soft bite with a smooth chocolate finish."},
    {id:"coco-nut", category:"cookies", name:" Coconut Cookie(12)", price:14.99, image:"assets/coconut-cookie-stock.png", description:"Coconut flakes toasted atop a smooth, buttery cookie base."},
    {id:"future-offering", category:"cookies", name:" Coconut Cookie(36)", price:38.99, image:"assets/coconut-cookie-stock.png", description:"Buttery smooth cookies topped with lightly toasted coconut flakes."}
  ]
};