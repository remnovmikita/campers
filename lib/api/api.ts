import { FormValues } from "@/components/FilterComponents/FilterComponents";
import { AllCampersResponse, Filters } from "@/types/camper";
import axios from "axios";



export const getAllCampers = async (page: number, filters:FormValues) =>{
    const res = await axios.get<AllCampersResponse>(`https://campers-api.goit.study/campers`, {
        params:{
            page,
            perPage : 5,
            ...filters
        }
    });
    return res.data;
}
export const GetOneCamper = async (campersId : string) =>{
    const data = axios.get(`${process.env.NEXT_BACKEND_API}/campers/${campersId}`)
    return data
}



export const getFilterCampers = async()=>{
    const res = await axios.get<Filters>(`https://campers-api.goit.study/campers/filters`)
    return res.data;
}