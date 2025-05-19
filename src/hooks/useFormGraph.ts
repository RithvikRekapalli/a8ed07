import { useEffect, useState } from "react";
import { fetchFromGraph } from "../api/graph";
import { FormGraph } from "../types/graph";

export const useFormGraph =() => {
    const [graph, setGraph] = useState<FormGraph | null > (null);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const load = async () => {
            try{
                const data = await
                fetchFromGraph();
                setGraph(data);        
            } catch(err){
                console.error("Failed to fetch graph", err);
            }finally {
                setloading(false);
            }
        };
        load();
        }, []);
        return { graph, loading};
};