"use client";
import AllCampers from "@/components/AllCampers/AllCampers";
import Filter, { FormValues } from "@/components/FilterComponents/FilterComponents";
import css from "./styles.module.css";
import { useState } from "react";

export default function Catalog() {
  const initialFilters: FormValues = {
    location: "",
    form: "",
    transmission: "",
    engine: "",
  };

  const [filters, setFilters] = useState<FormValues>(initialFilters);

  const clearFilters = () => setFilters(initialFilters);
  const viewAllCampers = () => setFilters(initialFilters);

  return (
    <section className={css.section}>
      <Filter onSubmit={setFilters} />
      <AllCampers
        filters={filters}
        onViewAll={viewAllCampers}   
        onClearFilters={clearFilters}
      />
    </section>
  );
}
