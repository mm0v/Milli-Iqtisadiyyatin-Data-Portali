const list = document.querySelector('.row')
const fifty = document.querySelector('.fifty')
const hundred = document.querySelector('.hundred')
const hundredFifty = document.querySelector('.hundredfifty')
const twohundred = document.querySelector('.twohundred')
const twohundredfifty = document.querySelector('.twohundredfifty')

const countries = (a,b) => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => {
            let li = '';
            data.slice(a,b).map(item => {
               
                li += `<div class="col-lg-4 col-md-4 col-sm-6 g-4">
                           <div class="card">
                                <img src="${item.flags.png}" class="card-img-top" alt="country flag">
                                <div class="card-body">
                                    <h5 class="card-title">${item.name.common}</h5>
                                    <p class="card-text">${item.name.official.substring(0, 30)} <a href="#">Read More</a></p>
                                    <a href="${item.maps.googleMaps}" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>`
            })
            list.innerHTML = li;
        })
}

fifty.onclick = () => {
    countries(0, 50)
}
hundred.onclick = () => {
    countries(50, 100)
}
hundredFifty.onclick = () => {
    countries(100, 150)

}
twohundred.onclick = () => {
    countries(150, 200)

}
twohundredfifty.onclick = () => {
    countries(200, 250)

}


//     const fifty = document.querySelector('.fifty')
//     const hundred = document.querySelector('.hundred')
//     const hundredFifty = document.querySelector('.hundredfifty')
//     const twohundred = document.querySelector('.twohundred')
//     const twohundredfifty = document.querySelector('.twohundredfifty')
//   fifty.onclick=()=>{
//     console.log(data.slice(0,50))
//   }
//   hundred.onclick=()=>{
//     console.log(data.slice(50,100))
//   }
//   hundredFifty.onclick=()=>{
//     console.log(data.slice(100,150))
//   }
//   twohundred.onclick=()=>{
//     console.log(data.slice(150,200))
//   }
//   twohundredfifty.onclick=()=>{
//     console.log(data.slice(200,250))
//   }