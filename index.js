let products = [];
let total = 0;

const add = (product, price) => {
    console.log(product, price);
    products.push(product);
    total = total + price;
    document.getElementById("checkout").innerHTML = `Pagar $${total}`
}

const pay = () => {
    window.alert(products.join(", \n"));
}