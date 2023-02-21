import products from "./Products";

const ArrayReduce = () => {

    const totalPrice = products.reduce((accumulator, product) => {
        return accumulator + product.price;
    }, 0);

    const productNames = products.reduce((accumulator, product, i, products) => {
        return `
            ${accumulator}
            ${i === 0 ? '' : ', '}
            ${i === product.length - 1 ? 'and ' : ''}
            ${product.name}`;
    }, '');


    return  <div>
                <p className="text-center">Total Price of All Products = <b>${totalPrice}</b></p>
                <p className="text-center">Products included in the calculation are the {productNames}</p>
            </div>
}

export default ArrayReduce;