import OneCamper from "@/components/OneCamper/OneCamper";
import { GetOneCamper } from "@/lib/api/api";


type PropsCampersId = {
    params: Promise<{campersId: string}>;
}

export default async function CamperById(props: PropsCampersId){
    const params = await props.params;
    const res = await GetOneCamper(params.campersId);
    console.log(res)
    return(
        <OneCamper camper={res.data}/>
    )
}