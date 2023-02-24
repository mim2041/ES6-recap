const phone = {brand: 'samsung', ram: '4gb', memory: '32gb', camera: '40px'};
const {brand, ram, memory, camera} = phone;
// console.log(ram);

const add = (a,b,c=7) => a+b+c;
const result = add(4,6);
console.log(result);