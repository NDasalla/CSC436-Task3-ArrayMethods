import products from "./Products";

const ArrayFilter = () => {

    const productsOnSale = products.filter(product => product.onSale == true).map(({id, name}) => <li key = {id}>{name}</li>);

    return <ol>
        {
            <div>
                <h1><b>Products On Sale:</b></h1>
                {productsOnSale}
            </div>
        }
    </ol>
}

export default ArrayFilter;