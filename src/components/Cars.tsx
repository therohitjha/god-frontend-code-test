import { useEffect, useState, useRef } from "react";
import { base_url } from "../../public/api/Services";
import { CarTypes } from "../../types/types";
import CarInfo from "./CarInfo";
import Slider from "react-slick";
import { settings } from "../../config/SliderConfig";
import Header from "./Header";
import Img from "./Img";

export default function Cars() {
  const [cars, setCars] = useState<CarTypes[]>([]);
  const [filterOption, setFilterOption] = useState<string[]>([]);
  const [filter, setFilter] = useState<string>("");
  const ref = useRef<Slider>(null);

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
                <CarInfo
                  data={e}
                  width={300}
                  height={200}
                  key={e.id}
                  isSlider={true}
                  layout="responsive"
                  objectFit="contain"
                />
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
