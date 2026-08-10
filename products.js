// Edit this file to add/remove products and categories.
// Replace image paths with your real product photos when available.
const STORE = {
  categories: [
    {id:"cookies", name:"Cookies", status:"available"},
    {id:"breakfast-breads", name:"Breakfast Breads", status:"coming"},
    {id:"custom-cakes", name:"Custom Cakes", status:"coming"},
    {id:"more", name:"More", status:"coming"}
  ],
  products: [
    {id:"classic-chip", category:"cookies", name:"Classic Chocolate Chip", price:3.00, image:"assets/cookie-placeholder.jpg", description:"Soft-centered chocolate chip cookie."},
    {id:"double-choc", category:"cookies", name:"Double Chocolate Chunk", price:3.25, image:"assets/cookie-placeholder.jpg", description:"Rich chocolate cookie with chocolate chunks."},
    {id:"oatmeal-cranberry", category:"cookies", name:"Oatmeal Cranberry", price:3.25, image:"assets/cookie-placeholder.jpg", description:"Chewy oatmeal cookie with dried cranberries."},
    {id:"white-macadamia", category:"cookies", name:"White Chocolate Macadamia", price:3.25, image:"assets/cookie-placeholder.jpg", description:"Buttery cookie with white chocolate and macadamias."}
  ]
};