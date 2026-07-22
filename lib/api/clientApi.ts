import { AllCampersResponse } from "@/types/camper";
import { NextServer } from "./api";


export const getAllCampers = async (): Promise<AllCampersResponse> =>{
    const {data} = await NextServer.get<AllCampersResponse>("/campers");
    return data;
}