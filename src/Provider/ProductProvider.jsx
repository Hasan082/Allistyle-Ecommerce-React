import { createContext } from "react";
import useProducts from "../hooks/useProducts";

export const productContext = createContext(null)

const ProductProvider = ({ children }) => {

    const { products, productLoading } = useProducts()

    const recomendedProduct = products?.filter(item => item.discount < 1).slice(0, 12)
    const discountedProduct = products?.filter(item => item.discount > 0).slice(0, 6)
    const dealsProduct = products?.filter(item => item.discount > 0)
    const productUnderFifty = products?.filter(item => (item.price - (item.discount < 1 ? 0 : ((item.price * item.discount) / 100)) < 50))

    let uniqueCategoryFilter = []
    for (let i = 0; i < products.length; i++) {
        if (!uniqueCategoryFilter.includes(products[i].category)) uniqueCategoryFilter.push(products[i].category);
    }

    let uniqueBrandFilter = new Map();
    for (let i = 0; i < products.length; i++) {
        let counts = products[i].manufacturer;
        uniqueBrandFilter.has(counts) ? uniqueBrandFilter.set(counts, uniqueBrandFilter.get(counts) + 1) : uniqueBrandFilter.set(counts, 1);
    }

    const productsData = { products, uniqueBrandFilter, uniqueCategoryFilter, recomendedProduct, discountedProduct, dealsProduct, productUnderFifty, productLoading }

    return (
        <productContext.Provider value={productsData}>
            {children}
        </productContext.Provider>
    );
};

export default ProductProvider;