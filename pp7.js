const devices = [
    {id: 1, name: 'phone', price: 60000},
    {id: 2, name: 'Laptop', price: 90000},
    {id: 3, name: 'bag', price: 5000},
    {id: 4, name: 'ipad', price: 35000},
    {id: 5, name: 'earphone', price: 5000}
];

const product = devices.find(x => x.price === 5000);
console.log(product);