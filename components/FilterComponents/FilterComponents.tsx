"use client";
import Map from "@/public/Map.svg";
import css from "./FilterComponents.module.css";
import Image from "next/image";
import Clear from "@/public/Clear.svg";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { useQuery } from "@tanstack/react-query";
import { getFilterCampers } from "@/lib/api/api";

export interface FormValues {
  forms: "";
  transmissions: "";
  engines: "";
}
export const initValues: FormValues = {
  forms: "",
  transmissions: "",
  engines: "",
};

export default function Filter({
  onSubmit,
}: {
  onSubmit: (values: FormValues) => void;
}) {
  const { data, isLoading } = useQuery({
    queryKey: ["filter"],
    queryFn: getFilterCampers,
  });

  const handleSubmit = (values: FormValues) => {
    onSubmit(values);
  };
  const clearForm = (formikHelpers: FormikHelpers<FormValues>) => {
    formikHelpers.resetForm();
  };
  return (
    <div className={css.filterWrapper}>
      <Formik initialValues={initValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <fieldset className={css.location}>
            <legend>Location</legend>
            <label htmlFor="">
              <Image src={Map} alt="map" className={css.map} width={20} height={20} />
            </label>
            <Field as="select" name="location" id="location">
              <option value="Kyiv">Kyiv</option>
              <option value="Lviv">Lviv</option>
              <option value="Kharkov">Kharkov</option>
            </Field>
          </fieldset>
            {isLoading && <p>Loading ....</p>}
            <p>Filters</p>
          <fieldset className={css.radio}>
            <legend>Camper form</legend>
            {data?.forms?.map((form: string) => (
              <label key={form} htmlFor={form}>
                <Field type="radio" name="forms" id={form} value={form} />
                {form
                  .replace(/_/g, " ")
                  .replace(/\b\w/g, (c) => c.toUpperCase())}
              </label>
            ))}
          </fieldset>
            
          <fieldset className={css.radio}>
            <legend>Engine</legend>
            {data?.engines?.map((engine: string) => (
              <label key={engine} htmlFor={engine}>
                <Field type="radio" name="engines" id={engine} value={engine} />
                {engine.charAt(0).toUpperCase() + engine.slice(1)}
              </label>
            ))}
          </fieldset>

          <fieldset className={css.radio}>
            <legend>Transmission</legend>
            {data?.transmissions?.map((trans: string) => (
              <label key={trans} htmlFor={trans}>
                <Field
                  type="radio"
                  name="transmissions"
                  id={trans}
                  value={trans}
                />
                {trans.charAt(0).toUpperCase() + trans.slice(1)}
              </label>
            ))}
          </fieldset>

          <button type="submit" className={css.button}>
            Search
          </button>
          <button type="reset" className={css.clear}>
            <Image
              src={Clear}
              onClick={() => clearForm}
              className={css.iconClear}
              alt="clear"
              width={12}
              height={12}
            />
            Clear filters
          </button>
        </Form>
      </Formik>
    </div>
  );
}
