const topRside = {
    az: ["Yardım mərkəzi", "Sifariş izləmə", "Azerb.", "AZN"],
    en: ["Help Center", "Order tracking", "English", "USD"]
}

const mainheaderelmnt = {
    az: ["Axtarış", "Daxil ol/Qeydiyyat"],
    en: ["SEARCH", "Login/Register"]
}

const downheaderelmnt = {
    az: ["Kateqoriya ilə Alisış-veriş", "Ev", "Moda", "Yeniliklər", "Bütün brendlər", "Daha çox", "Pulsuz Beynəlxalq Çatdırılma"],
    en: ["SHOP BY CATEGPRIES", "Home", "Fashion", "New Arrivalls", "All Brands", "More", "Free International Delivery"]
}

const carouselLangelmnt = {
    az: ["Böyük Qənaət Günləri Satışı", "Qadın Solid Dəyirmi Yaşıl T-Shirt", "Yalnız Başlayır", "İNDİ Al", "İNDİ Al", "Qara Rəngdə Müasir Kreslo Al", "Yalnız Başlayandan", "Indi Al", "Indi Al", "Marsel yemək otağı kreslosu", "Indi Al", "Ağıllı planşet", "Krep köynək", "Dəri qol saatı", "Yuvarlanan brilyant", "Taxta kürsü", "Krossovka ayaqqabıları"],
    en: ["Big Saving Days Sale", "Woman Solid Round Green T-Shirt", "Starting At Only", "SHOP NOW", "Big Saving Days Sale", "Buy Modern Chair In Black Color", "Starting At Only ", "SHOP NOW", "SHOP NOW", "Marcel dining room chair", "SHOP NOW", "Smart Tablet", "Crape T-Shirt", "Leather Watch", "Rolling Diamond", "Wooden Chair", "Sneaker Shoes"]
}

const promotionLangelmnt = {
    az: ["PULSUZ GÖNDƏRİLMƏ", "İlk Sifarişinizdə İndi Pulsuz Çatdırılma və 200$-dan yuxarı", "-YALNIZ 200$*", "S22 Samsung Smartphone", "İNDİ ALIN", "Sgopstic tərəfindən hazırlanmış kreslo", "İNDİ ALIN", "Səsli Simsiz Qulaqlıqlar ", "İNDİ MAĞAZA"],
    en: ["FREE SHIPPING", "Free delivery NowON Your First Order and over $200", "-ONLY $200*", "S22 Samsung Smartphone", "SHOP NOW", "Armchair Made By sgopstic", "SHOP NOW", "Noise Wireless Headphones", "SHOP NOW"]
}

const cardLangelmnt = {
    az: ["Moda", "Elektronika", "Mebel", "Apple Ağıllı Saat / Midnight Aluminium", "Kısılmış Satin Bomber Gödəkçə", "Kişilər üçün Pambıq Gündəlik Qısaqol T-shirtlər", "Çoxrəngli Açıq Trikotaj Yaka", "Son Məhsullar", "Plastik Bambuk Tozsoran və Qara Fırça", "Nike Air Max Invigor 'Black'7496980", "Ağıllı Dinamik və Google Assistant, Açıq Boz", "Çoxrəngli Açıq Trikotajlı Boğaz"],
    en: ["Fashion", "Electronics", "Furniture", "Apple Smart Watch / Midnight Aluminium", "Cropped Satin Bomber Jacket", "Mens Cotton Casual Short Sleeve T-Shirts", "Multicolored Open-Knit Crewneck", "Latest Products", "Plastic Bamboo Dustpan & Brush Black", "Nike Air Max Invigor 'Black'7496980", "Smart Speaker & Google Assistant, Light Grey", "Multicolored Open-Knit Crewneck"]
}

const commericalLangelmnt = {
    az: ["SAAT", "M6 Ağıllı Brend 2.3-Fitness Band kişi qumu Qadın Sağlamlığının İzlənməsi, Qırmızı Kəmər"],
    en: ["WATCH", "M6 Smart Brand 2.3-Fitness Band men's sand Women's Health Tracking, Red Strap"]
}

const topli = document.querySelectorAll('.top-li')
const btn = document.querySelector('.language')
const topLside = document.querySelector('.left-side')
const mainheader = document.querySelectorAll('#main-header')
const downheader = document.querySelectorAll('#down-header')
const carouselLang = document.querySelectorAll('.carousel-lang')
const promotionLang = document.querySelectorAll('#promotion-lang')
const cardLang = document.querySelectorAll('#card-lang')
const commercialLang = document.querySelectorAll('.commercial-lang')
const header = document.querySelector('header')
const main = document.querySelector('main')
const preloader = document.querySelector('.preloader')

const changeData = () => {
    if (btn.innerHTML === 'Az') {
        btn.innerHTML = 'En'
        localStorage.setItem('language','Az')
        topRside.az.map((i, c) => {
            topli[c].innerHTML = i;
        })
        topLside.innerHTML = 'Yeni mövsüm üslublarına 50%-ə qədər endirim əldə edin, yalnız məhdud vaxt'
        mainheaderelmnt.az.map((i, c) => {
            mainheader[c].innerHTML = i;
        })
        downheaderelmnt.az.map((i, c) => {
            downheader[c].innerHTML = i;
        })
        carouselLangelmnt.az.map((i, c) => {
            carouselLang[c].innerHTML = i;
        })
        promotionLangelmnt.az.map((i, c) => {
            promotionLang[c].innerHTML = i;
        })
        cardLangelmnt.az.map((i, c) => {
            cardLang[c].innerHTML = i;
        })
        commericalLangelmnt.az.map((i, c) => {
            commercialLang[c].innerHTML = i;
        })
    } else {
        btn.innerHTML = 'Az'
        localStorage.setItem('language','En')
        topRside.en.map((i, c) => {
            topli[c].innerHTML = i;
        })
        topLside.innerHTML = 'Get up to 50% off new season styles, limited time only'
        mainheaderelmnt.en.map((i, c) => {
            mainheader[c].innerHTML = i;
        })
        downheaderelmnt.en.map((i, c) => {
            downheader[c].innerHTML = i;
        })
        carouselLangelmnt.en.map((i, c) => {
            carouselLang[c].innerHTML = i;
        })
        promotionLangelmnt.en.map((i, c) => {
            promotionLang[c].innerHTML = i;
        })
        cardLangelmnt.en.map((i, c) => {
            cardLang[c].innerHTML = i;
        })
        commericalLangelmnt.en.map((i, c) => {
            commercialLang[c].innerHTML = i;
        })
    }
}

//-----------------------------Dark Light Mode--------------

const button=document.querySelector('.darkmode')
const toggleMode = () => {
    if (document.body.className === 'light') {
        document.body.className = 'dark';
        localStorage.setItem('mode', 'dark');
    } else {
        document.body.className = 'light';
        localStorage.setItem('mode', 'light');
    }
};

button.onclick=toggleMode;

if (localStorage.getItem('mode') === 'light') {
    document.body.className = 'light';
} else {
    document.body.className = 'dark';
}

console.log(localStorage.getItem("mode"));


//---------------------------Navigator-----------------------

const userLang = navigator.language;

if (userLang.includes('az')) {
  btn.innerHTML = 'Az';
  localStorage.setItem('language', 'Az');
} else {
  btn.innerHTML = 'En';
  localStorage.setItem('language', 'En');
}


//--------------------------LocalStorage-----------------------

if (localStorage.getItem('language') === 'Az') {
    btn.innerHTML = 'Az';
} else {
    btn.innerHTML = 'En';
}

changeData();

btn.onclick = changeData;


//-----------------------------PreLoader--------------------

setTimeout(()=>{
    preloader.style.display='none'
    header.style.display='block'
    main.style.display='block'
}, 1000)


//--------------------------Carousel---------------------------

const slickside =document.querySelectorAll('.slick')

slickside.forEach(slide=>{
    slide.onmouseover=()=>{
        slide.classList.add('animate__animated', 'animate__swing')
    }
    slide.onmouseout=()=>{
        slide.classList.remove('animate__animated', 'animate__swing')
    }
})