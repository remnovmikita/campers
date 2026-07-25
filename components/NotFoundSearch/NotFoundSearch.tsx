"use client";
import css from "./NotFoundSearch.module.css";
import Image from "next/image";
import Clear from "@/public/Clear.svg";

export default function NotFoundSerch({
  viewAllClick,

}: {
  viewAllClick: () => void;

}) {
  const handleClear = () => {
  const btn = document.querySelector<HTMLButtonElement>("#clear");
  btn?.click();
};
  return (
    <div className={css.wrapperNotFound}>
      <Image
        className={css.photo}
        src="/NotFoundSearch.png"
        alt="Not Found"
        width={488}
        height={463}
      />
      <p className={css.Maintext}>No campers found</p>
      <p className={css.secText}>
        We couldn`t find any campers that match your filters.Try adjusting your
        search or clearing some filters.
      </p>
      <div className={css.wrapperButton}>
        <button type="reset" onClick={handleClear} className={css.clear}>
          <Image
            src={Clear}
            className={css.iconClear}
            alt="clear"
            width={12}
            height={12}
          />
          Clear filters
        </button>
        <button type="button" onClick={viewAllClick} className={css.getallCampers}>
          View all campers
        </button>
      </div>
    </div>
  );
}
