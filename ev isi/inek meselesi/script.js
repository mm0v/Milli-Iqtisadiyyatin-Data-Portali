function ferma(day) {
    let milk = 0
    let money = 0
    let cow = 1
    const sumofmilk = 3
    const costofmilk = 3
    const costofcow = 300
    const costoffarm = 15000
    let farm = false
    for (let i = 1; i <= day; i++) {
        let perdaymilk = cow * sumofmilk
        let perdaysalary = perdaymilk * costofmilk
        milk += perdaymilk
        money += perdaysalary

        while (money >= costofcow) {
            cow++;
            money -= costofcow
        }

        if (money >= costoffarm) {
            farm = true
        }
    }
    console.log(`Toplam sudun miqdari: ${milk}`)
    console.log(`Toplam qazanc: ${money}`)
    console.log(`Ineklerin sayi: ${cow}`)
    console.log(`Ferma alacaq qeder budce var mi: ${farm}`)
}
let sumofsalary = prompt("Nece gunluk qazanci hesablamaq isteyirsiniz?")

ferma(sumofsalary)