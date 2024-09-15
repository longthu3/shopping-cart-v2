import { useLocation } from "react-router-dom"

interface IParamsUrl {
    condition: "page" | "category" | "search";
}

export const usePages = ({ condition }: IParamsUrl) => {
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const page = parseInt(query.get(condition) || '1', 10);
    return page;
}
