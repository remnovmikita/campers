"use client";
import Image from "next/image";
import Star from "@/public/Star.svg";
import Map from "@/public/Map.svg";
import Petrol from "@/public/Petrol.svg";
import Automatic from "@/public/Automatic.svg";
import Alcove from "@/public/Alcove.svg";
import css from "./AllCampers.module.css";
import Link from "next/link";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getAllCampers } from "@/lib/api/api";
import { FormValues } from "../FilterComponents/FilterComponents";

export default function AllCampers({ filters }: { filters: FormValues }) {
  const {
    data,
    fetchNextPage,
    isFetching,
    hasNextPage,
    isFetchingNextPage,
    isError,
    isLoading,
    isFetched,
  } = useInfiniteQuery({
    queryKey: ["campers", filters],
    queryFn: ({ pageParam }) => {
      return getAllCampers(pageParam, filters);
    },
    initialPageParam: 1,
    retry: 1,
    getNextPageParam: (lastResponse) => {
      const nextPage = lastResponse.page + 1;
      return nextPage < lastResponse.totalPages ? nextPage : undefined;
    },
    select: (data) => {
      return {
        ...data,
        campers: data.pages.flatMap((page) => page.campers),
      };
    },
  });

  const campers = data?.campers ?? [];
  const hasCampers = campers.length > 0;
  const showNoResult = isFetched && !isError && !hasCampers;
  return (
    <section className={css.section}>
      <div className={css.wrapperList}>
        <ul className={css.MainWrapper}>
          {isLoading && <p>Loading data please wait</p>}
          {isError && <p>Error Message</p>}
          {showNoResult && <p>No campers found. Try another search</p>}
          {hasCampers &&
            campers.map((info) => (
              <li key={info.id} className={css.wrapper}>
                <Image
                  src={info.coverImage}
                  className={css.coverImage}
                  width={219}
                  height={240}
                  alt={info.name}
                />
                <div className={css.cardContent}>
                  <div className={css.wrapperMainInfo}>
                    <p className={css.mainInfo}>{info.name}</p>
                    <p className={css.mainInfo}>€{info.price}</p>
                  </div>
                  <div className={css.afterMain}>
                    <p>
                      <Image src={Star} alt="star" width={15} height={14} />{" "}
                      {info.rating} ({info.totalReviews} Reviews)
                    </p>
                    <p>
                      <Image src={Map} alt="map" width={16} height={16} />{" "}
                      {info.location}
                    </p>
                  </div>
                  <p className={css.description}>
                    {info.description.slice(0, 60) + "..."}
                  </p>
                  <div className={css.afterDescr}>
                    <p className={css.afterDescrText}>
                      <Image
                        className={css.icon}
                        src={Petrol}
                        alt="Petrol"
                        width={20}
                        height={20}
                      />{" "}
                      {info.engine}
                    </p>
                    <p className={css.afterDescrText}>
                      <Image
                        className={css.icon}
                        src={Automatic}
                        alt="Automatic"
                        width={20}
                        height={15}
                      />{" "}
                      {info.transmission}
                    </p>
                    <p className={css.afterDescrText}>
                      <Image
                        className={css.icon}
                        src={Alcove}
                        alt="Alcove"
                        width={15}
                        height={13}
                      />{" "}
                      {info.form
                        .replace(/_/g, " ")
                        .replace(/\b\w/g, (c) => c.toUpperCase())}
                    </p>
                  </div>
                  <Link href={`/catalog/${info.id}`} className={css.button}>
                    Show more
                  </Link>
                </div>
              </li>
            ))}
        </ul>

        <button
          className={css.loadMore}
          type="button"
          disabled={isFetching || !hasNextPage}
          onClick={() => fetchNextPage()}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
              ? "Load more"
              : "Nothing more load"}
        </button>
      </div>
    </section>
  );
}
