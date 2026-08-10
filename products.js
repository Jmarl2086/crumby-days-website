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
    {id:"classic-chip", category:"cookies", name:"Salted Chocolate Chip", price:3.50, image:"assets/cookie_hq01.png", description:"Soft-centered chocolate chip cookie."},
    {id:"double-choc", category:"cookies", name:"Double Chocolate Chunk", price:4.25, image:"assets/Double-Chocolate-Chip-Cookies-stock.jpg", description:"Soft cookie base backed with double chocolate."},
    {id:"coco-nut", category:"cookies", name:"Coco(nut) Butter Cookies", price:3.50, image:"assets/coconut-cookie-stock.png", description:"Decadent butter cookies with shredded coconut on top."},
    {id:"future-offering", category:"cookies", name:"Future offerings TBD", price:5.75, image:"assets/istockphoto-oatmeal.jpg", description:"Maybe an oatmeal cookie?."}
  ]
};