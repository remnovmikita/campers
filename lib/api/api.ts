import { FormValues } from "@/components/FilterComponents/FilterComponents";
import { FormValuesPost } from "@/components/Revies/Revies";
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

export type DataReviews ={
   id:string,
   camperId:string,
   reviewer_name:string,
   reviewer_rating:number,
   comment:string,
}

export const getReviesbyId= async(campersId : string)=>{
    const res = await axios.get<DataReviews[]>(`${process.env.NEXT_BACKEND_API}/campers/${campersId}/reviews`)
    return res.data
}

export const postReqest = async(campersId : string, value:FormValuesPost)=>{
    const res = await axios.post(`https://campers-api.goit.study/campers/${campersId}/booking-requests`, value)
    return res.data
}