const span = document.querySelector('span')
const h1 = document.querySelector('h1')
const preloader = document.querySelector('.preloader')
const bacground = document.querySelector('.bacground')


const clockStart = setInterval(() => {
    let h = new Date().getHours('Baku')
    let m = new Date().getMinutes('Baku')
    let s = new Date().getSeconds('Baku')
    let time = `${h}:${m}<span style="font-size: 30px;">: ${s}</span> `;
    let emoji = ` ☼`
    h1.innerHTML = time + emoji
}, 1000)


setTimeout(() => {
    preloader.style.display = "none";
    background.style.display = "block";
}, 1000);


const wheather = () => {
    fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13', {
        headers: {
            'x-rapidapi-host': ' weatherapi-com.p.rapidapi.com',
            'x-rapidapi-key': 'e2ced47b61msh1908f2636282f0dp197515jsnda1f01f67303'
        }
    })
        .then(res => res.json())
        .then(data => {
          console.log(data)
        })
}

wheather()

// const span =document.querySelector('span')
//  const wheather = () => {
//     fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13', {
//         headers: {
//             'x-rapidapi-host': ' weatherapi-com.p.rapidapi.com',
//             'x-rapidapi-key': '22c74b5670mshf37728e50aea7a5p19dbeejsn22e473e91a84'
//         }
//     })
//         .then(res => res.json())
//         .then(data => {
//             span.innerHTML = Math.round(data.main.temp) - 273 + " °C"
 
//         })
//  

// }

// wheather()