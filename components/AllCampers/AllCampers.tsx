"use client"

import Image from "next/image"
import { AllCampersResponse } from "@/types/camper"
import Star from "@/public/Star.svg"
import Map from "@/public/Map.svg"
import Petrol from "@/public/Petrol.svg"
import Automatic from "@/public/Automatic.svg"
import Alcove from "@/public/Alcove.svg"
import css from "./AllCampers.module.css"
import Link from "next/link"

export default function AllCampers({ campers }: { campers: AllCampersResponse }) {
  return (
    <section className={css.section}>
        <ul className={css.MainWrapper}>
      {campers.campers.map((info) => (
        <li key={info.id} className={css.wrapper}>
          <Image src={info.coverImage} className={css.coverImage} width={219} height={240} alt={info.name} />
          <ul>
            <li className={css.wrapperMainInfo}>
              <p className={css.mainInfo}>{info.name}</p>
              <p className={css.mainInfo}>€{info.price}</p>
            </li>
            <li className={css.afterMain}>
              <p>
                <Image src={Star} alt="star" width={15} height={14} /> {info.rating} ({info.totalReviews} Reviews)
              </p>
              <p>
                <Image src={Map} alt="map" width={16} height={16} /> {info.location}
              </p>
            </li>
            <li>
              <p className={css.description}>{info.description.slice(0, 60) + "..."}</p>
            </li>
            <li className={css.afterDescr}>
              <p className={css.afterDescrText}><Image className={css.icon} src={Petrol} alt="Petrol" width={20} height={20} /> Petrol</p>
              <p className={css.afterDescrText}><Image className={css.icon} src={Automatic} alt="Automatic" width={20} height={15} /> Automatic</p>
              <p className={css.afterDescrText}><Image className={css.icon} src={Alcove} alt="Alcove" width={15} height={13} /> Alcove</p>
            </li>
            <Link href={`/catalog/${info.id}`} className={css.button}>Show more</Link>
          </ul>
        </li>
      ))}
    </ul>
    </section>
  )
}
