const preloader =document.querySelector('.preloader')
const buttons = document.querySelector('.buttons')
const container = document.querySelector('.container')
const list = document.querySelector('.row');
const electronics = document.querySelector('.electronics');
const jewelery = document.querySelector('.jewelery');
const men = document.querySelector('.men');
const women = document.querySelector('.women');


setTimeout(()=>{
  preloader.style.display='none'
  container.style.display='block'
  buttons.style.display='flex'
},3000);


const categories = async (category) => {
  const comingData = await fetch(`https://fakestoreapi.com/products`)
  const covertData = await comingData.json();
  const filteredData = covertData.filter((item) => item.category === category);

  let li = "";
  if (!category) {
    covertData.map((item) => {
      li += `<div class="col-lg-3 col-md-4 col-sm-6 g-4">
    <div class="card p-2">
      <img src="${item.image}" class="card-img-top" alt="country flag">
      <div class="card-body">
        <h5 class="card-title">${item.title.substring(0, 20)}</h5>
        <p class="card-text">${item.description.substring(0, 30)} <a href="#">Read More</a></p>
        <span class="price">${item.price} AZN</span>
      </div>
    </div>
  </div>`;
    });
  }
  filteredData.map((item) => {
    li += `<div class="col-lg-3 col-md-4 col-sm-6 g-4">
        <div class="card p-2">
          <img src="${item.image}" class="card-img-top" alt="country flag">
          <div class="card-body">
            <h5 class="card-title">${item.title.substring(0, 20)}</h5>
            <p class="card-text">${item.description.substring(0, 30)} <a href="#">Read More</a></p>
            <span class="price">${item.price} AZN</span>
          </div>
        </div>
      </div>`;
  });
  list.innerHTML = li;
};

categories()

electronics.onclick = () => {
  categories("electronics");
}

jewelery.onclick = () => {
  categories("jewelery");
}

men.onclick = () => {
  categories("men's clothing");
}

women.onclick = () => {
  categories("women's clothing");
}