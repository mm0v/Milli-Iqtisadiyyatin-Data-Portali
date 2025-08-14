import axios from "axios";
import { createContext, useEffect, useState, ReactNode } from "react";


interface dummyType {
    id: number,
    title: string;
    price: number;
    description: string;
    category: string;
    images: string[];
}

interface fakeStoreType {
    id: number,
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}

interface jsonType {
    id: number,
    title: string,
    body: string
}

interface contextType {
    dummyApi: dummyType[];
    fakeStoreApi: fakeStoreType[];
    jsonApi: jsonType[];
}

export const DataContext = createContext<contextType | null>(null);

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
    const [fakestore, setFakestore] = useState<fakeStoreType[]>([]);
    const [dummy, setDummy] = useState<dummyType[]>([]);
    const [json, setJson] = useState<jsonType[]>([]);
    const myApis = {
        dummyApi: dummy || [],
        fakeStoreApi: fakestore || [],
        jsonApi: json || [],
    };


    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then((res) => setFakestore(res.data));
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then((res) => setJson(res.data));
        axios
            .get("https://dummyjson.com/products")
            .then((res) => setDummy(res.data.products));
    }, []);
    console.log(dummy);

    return <DataContext.Provider value={myApis}>{children}</DataContext.Provider>;
};
