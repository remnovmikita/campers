import { AllCampersResponse } from "@/types/camper";
import axios from "axios";



export const getAllCampers = async (): Promise<AllCampersResponse> =>{
    const {data} = await axios.get<AllCampersResponse>(`${process.env.NEXT_BACKEND_API}/campers`);
    return data;
}
export const GetOneCamper = async (campersId : string) =>{
    const data = axios.get(`${process.env.NEXT_BACKEND_API}/campers/${campersId}`)
    return data
}