import React, { useEffect, useState, useRef } from "react";
import { base_url } from "../../public/api/Services";
import { carTypes } from "../../types/types";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";
import { settings } from "../../config/SliderConfig";
import Header from "./Header";

export default function Cars() {
  const [cars, setCars] = useState<carTypes[]>([]);
  const ref = useRef(null);

  useEffect(() => {
    fetch(`${base_url}/api/cars.json`)
      .then((res) => res.json())
      .then((res) => setCars(res))
      .catch((err) => console.log(err));
  }, []);

  function handleNextSlider() {
    if (ref.current) {
      ref.current?.slickNext();
    }
  }
  function handlePrevSlider() {
    if (ref.current) {
      ref.current?.slickPrev();
    }
  }

  return (
    <>
      <Header />
      <div className="cars-container">
        <Slider ref={ref} {...settings}>
          {cars.length &&
            cars.map((e: carTypes) => (
              <div key={e.id}>
                <span className="body-type">{e.bodyType}</span>
                <div className="modal-type-name">
                  <span className="modal-name">{e.modelName}</span>{" "}
                  <span className="modal-type">{e.modelType}</span>
                </div>
                <Image
                  src={`${base_url}${e.imageUrl}`}
                  alt={e.modelName}
                  layout="responsive"
                  objectFit="contain"
                  width={300}
                  height={200}
                />
                <div className="learn-shop-link">
                  <Link
                    href={{
                      pathname: `/learn/[id]`,
                      query: {
                        name: e.modelName,
                        type: e.modelType,
                        src: e.imageUrl,
                        body: e.bodyType,
                      },
                    }}
                    as={`/learn/${e.id}`}
                    passHref
                  >
                    <div className="learn-link">
                      <span>Learn </span>
                      <span>
                        <Image
                          src="/images/chevron-small.svg"
                          alt={"chevron_small"}
                          width={10}
                          height={10}
                        />
                      </span>
                    </div>
                  </Link>
                  <Link
                    href={{
                      pathname: `/shop/[id]`,
                      query: {
                        name: e.modelName,
                        type: e.modelType,
                        src: e.imageUrl,
                        body: e.bodyType,
                      },
                    }}
                    as={`/shop/${e.id}`}
                    passHref
                  >
                    <div className="shop-link">
                      <span>Shop </span>
                      <span>
                        <Image
                          src="/images/chevron-small.svg"
                          alt={"chevron_small"}
                          width={10}
                          height={10}
                        />
                      </span>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
        </Slider>
        <div className='slider-button-container'>
          <div onClick={handlePrevSlider} className='prev-slider'>
            <Image
              src="/images/chevron-circled.svg"
              alt={"chevron_circled"}
              width={40}
              height={40}
            />
          </div>
          <div onClick={handleNextSlider} style={{cursor:'pointer'}}>
            <Image
              src="/images/chevron-circled.svg"
              alt={"chevron_circled"}
              width={40}
              height={40}
            />
          </div>
        </div>
        {!cars.length && (
          <div style={{ color: "white" }}>
            Something Went Wrong, Please Try Again!
          </div>
        )}
      </div>
    </>
  );
}
