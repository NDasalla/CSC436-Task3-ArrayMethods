import products from "./Products";

const ArrayMap = () => {

    //LONGER ALTERNATIVE
    //const productNames = products.map(product => <li>{product.name}</li>);
    //put in div return: {productNames};

    return <ol>
                <div>

                    <h1><b>Products By Name:</b></h1>
                    {products.map(product => <li>{product.name}</li>)}

                </div>
            </ol>

}
export default ArrayMap;