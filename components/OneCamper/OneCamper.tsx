"use client";
import { Camper } from "@/types/camper";
import css from "./OneCamper.module.css";
import Image from "next/image";
import { useState } from "react";
import Star from "@/public/Star.svg";
import Map from "@/public/Map.svg";
import Petrol from "@/public/Petrol.svg";
import Automatic from "@/public/Automatic.svg";
import Alcove from "@/public/Alcove.svg";

export default function OneCamper({ camper }: { camper: Camper }) {
  const [mainImage, setMainImage] = useState(camper.gallery[0].original);

  return (
    <div className="container">
      <div className={css.wrapperGlobal}>
        <div className={css.mainPhoto}>
          <Image
            src={mainImage}
            className={css.mainImage}
            alt="Check Photo"
            width={638}
            height={505}
          />
          <ul className={css.thrumbPhotos}>
            {camper.gallery.map((image, i) => (
              <li
                key={i}
                className={mainImage === image.original ? css.active : ""}
              >
                <button onClick={() => setMainImage(image.original)}>
                  <Image
                    src={image.thumb}
                    className={css.thrumbPhotos}
                    alt={image.camperId}
                    width={136}
                    height={144}
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className={css.info}>
          <div className={css.BlockInfo}>
            <h2>{camper.name}</h2>
            <div className={css.star}>
              <p>
                <Image src={Star} alt="star" width={15} height={14} />{" "}
                {camper.rating} ({camper.totalReviews} Reviews)
              </p>
              <p>
                <Image src={Map} alt="map" width={16} height={16} />{" "}
                {camper.location}
              </p>
            </div>
            <p className={css.prise}>€{camper.price}</p>
            <p className={css.description}>{camper.description}</p>
          </div>
          <div className={css.BlockInfo}>
            <h3 className={css.details}>Vehicle details</h3>
            <ul className={css.detalisList}>
              {camper.amenities.map((amenities, i) => (
                <li className={css.detalisPosition} key={i}>
                  {amenities.toUpperCase()}
                </li>
              ))}
            </ul>
            <div className={css.divider}></div>
              <table className={css.specs}>
                <tbody>
                  <tr>
                    <td>Form</td>
                    <td>{camper.form}</td>
                  </tr>
                  <tr>
                    <td>Length</td>
                    <td>{camper.length} m</td>
                  </tr>
                  <tr>
                    <td>Width</td>
                    <td>{camper.width} m</td>
                  </tr>
                  <tr>
                    <td>Height</td>
                    <td>{camper.height} m</td>
                  </tr>
                  <tr>
                    <td>Tank</td>
                    <td>{camper.tank} l</td>
                  </tr>
                  <tr>
                    <td>Consumption</td>
                    <td>{camper.consumption} l / 100 km</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  );
}
