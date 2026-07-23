import AllCampers from "@/components/AllCampers/AllCampers";
import { getAllCampers } from "@/lib/api/api";


export default async function Catalog() {

  const campers = await getAllCampers()
  
  return (
<>
  <AllCampers campers={campers}/>
</>
  );
}