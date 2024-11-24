let body="";
fetch("https://fakestoreapi.com/products")
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
        console.log(element);
        
        body+= `
        <div class="col">
<div class="card shadow-sm" data-aos="flip-left">
  <img src="${element.image}" alt="">
  <div class="card-body">
    <h5 class="card-text">${element.title}</h5>
    <p class="cart-text">${element.description}</p>
    <div class="d-flex justify-content-between align-items-center">
      <div class="btn-group">
        <button type="button" class="btn btn-sm btn-outline-secondary">Buy now</button>
        <button type="button" class="btn btn-sm btn-outline-secondary">Add to card</button>
      </div>
      <small class="text-body-secondary">${element.price}$</small>
    </div>
  </div>
</div>
</div> 
        `;
    });

    document.getElementById("row").innerHTML=body;
})


console.log(body);