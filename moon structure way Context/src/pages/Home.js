import React from "react";
import { useProducts } from "../context/ProductProvider";

const Home = () => {
    const { data } = useProducts();
    // console.log(useProducts());
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl gap-14 mx-auto my-10">
            <p>Home</p>
        </div>
    );
};

export default Home;
