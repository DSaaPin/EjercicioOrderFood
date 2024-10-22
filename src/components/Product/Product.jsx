import styles from "./Product.module.css"

function Product({ product, onClick }){
        
    return (
        <div className={styles.wrapperProduct} onClick={() => onClick(product)}>
            {product.name}
        </div>
    );
};

export default Product