import OneCamper from "@/components/OneCamper/OneCamper";
import Revies from "@/components/Revies/Revies";
import { GetOneCamper, getReviesbyId } from "@/lib/api/api";
import css from "../styles.module.css"

type PropsCampersId = {
    params: Promise<{campersId: string}>;
}

export default async function CamperById(props: PropsCampersId){
    const params = await props.params;
    const res = await GetOneCamper(params.campersId);
    const reviews = await getReviesbyId(params.campersId)
    
    return(
        <section className={css.sectionRevies}>
            <OneCamper camper={res.data}/>
            <div>
                <Revies reviews={reviews} camperId={params.campersId}/>
            </div>
        </section>
    )
}