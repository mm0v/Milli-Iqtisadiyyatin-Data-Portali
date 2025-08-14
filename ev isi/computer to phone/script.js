//brand, price, playing games, code

class Computer {
    constructor(brand, price, color) {
        this.iBrand = brand;
        this.iPrice = price;
        this.iColor = color;
    }
    aboutDevice() {
        return `${this.iBrand}, ${this.iColor}, ${this.iPrice}`;
    }
    
}


class Phone extends Computer {
    constructor(brand, price, color) {
        super(brand, price, color)
    }
    findContactNumber(contact) {
        
        const call = (contact)
        if (contact == 'aysu') {
            return '+994 51 547 27 09'
        } else {
            return 'Bu kontakt telefonunuzda mövcud deyil'
        }
    }
    
}










class Tablet extends Phone {
    constructor(brand, price, color) {
        super(brand, price, color)
    }
}


const myComputer = new Computer('DELL', 4000, 'Black')
const computerInfo=myComputer.aboutDevice()
console.log(computerInfo)


const myPhone = new Phone('Samsung', 1000, 'Navy')
const phoneInfo=myPhone.aboutDevice()
console.log(phoneInfo)
console.log(myPhone.findContactNumber('aysu'))
console.log(myPhone.findContactNumber('minure'))


const myTablet = new Tablet('Iphone', 5000, 'Gray')
const tabletInfo=myTablet.aboutDevice()
console.log(tabletInfo);
