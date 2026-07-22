import { NextResponse } from "next/server";
import { api } from "../api";
import { ApiError, createErrorResponce } from "../utils/utils";


export async function GET(){
    try{
        const res = await api.get('/campers');
        return NextResponse.json(res.data, {status: res.status})
    }
    catch(error){
    return createErrorResponce(error as ApiError);
    }
}