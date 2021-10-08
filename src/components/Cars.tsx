import { useEffect, useState, useRef } from "react";
import { base_url } from "../../public/api/Services";
import { CarTypes, Next } from "../../types/types";
import Link from "next/link";
import Slider from "react-slick";
import { settings } from "../../config/SliderConfig";
import Header from "./Header";
import Img from "./Img";

export default function Cars() {
  const [cars, setCars] = useState<CarTypes[]>([]);
  const [filterOption, setFilterOption] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("");
  const ref = useRef<Next | null>(null);

  useEffect(() => {
    fetch(`${base_url}/api/cars.json`)
      .then((res) => res.json())
      .then((res) => {
        setCars(res);
        const temp: string[] = [];
        res.forEach((e: CarTypes) => {
          temp.push(e.bodyType);
        });
        setFilterOption(Array.from(new Set(temp)));
      })
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

  const handleFilter = (e: any) => {
    setFilter(e.target.value);
  };

  function CarBodyTypeFilter() {
    const data =
      filterOption.length &&
      filterOption.map((e: string) => (
        <option key={e} value={e}>
          {e}
        </option>
      ));

    return (
      <select onChange={handleFilter} value={filter} className="select-filter">
        <option value="">Select Car Type</option>
        {data}
      </select>
    );
  }

  return (
    <>
      <Header />
      <div className="cars-container">
        <CarBodyTypeFilter />
        <Slider ref={ref} {...settings}>
          {cars.length &&
            cars
              .filter((e: CarTypes) => {
                if (filter) return e.bodyType === filter;
                return e;
              })
              .map((e: CarTypes) => (
                <div key={e.id}>
                  <span className="body-type">{e.bodyType}</span>
                  <div className="modal-type-name">
                    <span className="modal-name">{e.modelName}</span>{" "}
                    <span className="modal-type">{e.modelType}</span>
                  </div>
                  <Img
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
                          <Img
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
                          <Img
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
        <div className="slider-button-container">
          <div onClick={handlePrevSlider} className="prev-slider">
            <Img
              src="/images/chevron-circled.svg"
              alt={"chevron_circled"}
              width={40}
              height={40}
            />
          </div>
          <div onClick={handleNextSlider} style={{ cursor: "pointer" }}>
            <Img
              src="/images/chevron-circled.svg"
              alt={"chevron_circled"}
              width={40}
              height={40}
            />
          </div>
        </div>
        {!cars.length && <div>Something Went Wrong, Please Try Again!</div>}
      </div>
    </>
  );
}
