let cart = JSON.parse(localStorage.getItem("bakeryCart") || "[]");

function money(n){return Number(n).toFixed(2)}
function save(){localStorage.setItem("bakeryCart",JSON.stringify(cart)); renderCart()}
function render(){
  categories.innerHTML=STORE.categories.map(c=>`<article class="category ${c.status==='coming'?'coming':''}">
    <h3>${c.name}</h3><p>${c.status==='coming'?'Coming soon':'Shop now'}</p>
  </article>`).join("");
  products.innerHTML=STORE.products.map(p=>`<article class="product">
    <img src="${p.image}" alt="${p.name}">
    <div class="product-body"><h3>${p.name}</h3><p>${p.description}</p><div class="price">$${money(p.price)}</div>
    <button onclick="addToCart('${p.id}')">Add to order</button></div></article>`).join("");
  renderCart();
}
function addToCart(id){
  const p=STORE.products.find(x=>x.id===id), item=cart.find(x=>x.id===id);
  item ? item.qty++ : cart.push({id:p.id,qty:1});
  save(); openCart();
}
function changeQty(id,delta){
  const item=cart.find(x=>x.id===id); if(!item)return;
  item.qty+=delta; if(item.qty<=0)cart=cart.filter(x=>x.id!==id); save();
}
function renderCart(){
  const rows=cart.map(i=>{const p=STORE.products.find(x=>x.id===i.id);return `<div class="cart-row">
    <img src="${p.image}" alt=""><div><strong>${p.name}</strong><br>$${money(p.price)} × ${i.qty}
    <div><button onclick="changeQty('${p.id}',-1)">−</button> <button onclick="changeQty('${p.id}',1)">+</button></div></div></div>`}).join("");
  cartItems.innerHTML=rows||"<p>Your cart is empty.</p>";
  const total=cart.reduce((s,i)=>s+STORE.products.find(p=>p.id===i.id).price*i.qty,0);
  cartTotal.textContent=money(total); cartCount.textContent=cart.reduce((s,i)=>s+i.qty,0);
}
function openCart(){cartEl().classList.add("open");overlay.classList.add("open")}
function closeCart(){cartEl().classList.remove("open");overlay.classList.remove("open")}
function cartEl(){return document.getElementById("cart")}
function checkout(){
  if(!cart.length){alert("Your cart is empty.");return}
  alert("Checkout connection unavailable at this time.");
}
render();