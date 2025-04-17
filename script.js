let cars  = [
    { modul: "BMW", count: "13000"},
    { modul: "Merce", count: "28000"},
    { modul: "kia", count: "80000"},
    { modul: "Toyoto", count: "10000"},
    { modul: "Hundai", count: "47000"}
]

let cheap = cars.filter(car => car.count < 35000)

console.log(cheap);
