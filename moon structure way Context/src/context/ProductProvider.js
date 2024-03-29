import { createContext, useContext, useEffect, useState } from "react";

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("./products.json")
            .then((res) => res.json())
            .then((data) => setData(data));
    }, []);

    const value = {
        data: data,
    };
    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};
export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT);
    console.log("context",context);
    return context;
};
export default ProductProvider;
