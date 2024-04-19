import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";
import { useState } from "react";

const useContacts = () => {
    const myAxios = useAxios();
    const [asc, setAsc] = useState(false)
    const { data: contacts = [], refetch } = useQuery({
        queryKey: ["contactsList", asc],
        queryFn: async () => {
            const res = await myAxios.get(`/contacts?sort=${asc ? '' : 'asc'}`);
            return res.data;
        }
    })
    return [contacts, refetch]
};

export default useContacts;