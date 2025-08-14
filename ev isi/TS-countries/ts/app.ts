var list= document.querySelector(".row") as HTMLElement;
const fifty = document.querySelector('.fifty') as HTMLButtonElement
const hundred = document.querySelector('.hundred') as HTMLButtonElement
const hundredFifty = document.querySelector('.hundredfifty') as HTMLButtonElement
const twohundred = document.querySelector('.twohundred') as HTMLButtonElement
const twohundredfifty = document.querySelector('.twohundredfifty') as HTMLButtonElement



interface userTypes {
    name:{
        common:string,
        official:string
    },
    flags:{
        png:string
    },
    maps:{
        googleMaps:string
    }
}

var countries = (a:number,b:number)=>{
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res=>res.json())
    .then((data:userTypes[])=>{

        let li:string="";
        data.slice(a,b).map((item:userTypes,index:number)=>{
            li+=`<div class="col-lg-4 col-md-4 col-sm-6 g-4">
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