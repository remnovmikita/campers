"use client"
import AllCampers from "@/components/AllCampers/AllCampers";
import Filter, { FormValues } from "@/components/FilterComponents/FilterComponents";
import css from "./styles.module.css"
import { useState } from "react";
export default function Catalog() {
  const [filters, setFilters] = useState<FormValues>({
    forms: "",
    transmissions: "",
    engines: "",
  });
  
  return (
    <section className={css.section}>
      <Filter onSubmit={setFilters}/>
      <AllCampers filters={filters}/>
    </section>
  );
}
