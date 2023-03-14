import { RouterProvider } from "react-router-dom";
import ProductProvider from "./context/ProductProvider";
import routes from "./routes/routes";
// const PRODUCT_CONTEXT = createContext();
// function App() {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         fetch("./products.json")
//             .then((res) => res.json())
//             .then((data) => setData(data));
//     }, []);

//     const value = {
//         data: data,
//     };
//     return (
//         <PRODUCT_CONTEXT.Provider value={value}>
//             <RouterProvider router={routes} />
//         </PRODUCT_CONTEXT.Provider>
//     );
// }

// export default App;

function App() {

    return (
        <ProductProvider>
            <RouterProvider router={routes} />
        </ProductProvider>
    );
}

export default App;