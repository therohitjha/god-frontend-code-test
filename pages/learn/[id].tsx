import { useState, useEffect } from "react";
import CarInfo from "../../src/components/CarInfo";
import { CarTypes } from "../../types/types";
import Header from "../../src/components/Header";
import { useRouter } from "next/router";

const Learn = ({ data }: { data: CarTypes }) => {
  const router = useRouter();
  const [state, setState] = useState<CarTypes>(data);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`/api/cars.json`);
        const data = await res.json();
        const carInfo = data.find((e: any) => e.id === router.query.id);
        setState(carInfo);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [router]);

  return (
    <>
      <Header />
      <CarInfo data={state} width={800} height={500} isSlider={false} />
    </>
  );
};

Learn.getInitialProps = async () => {
  return {
    data: {
      bodyType: "suv",
      id: "xc90-recharge",
      imageUrl: "/images/xc90_recharge.jpg",
      modelName: "XC90 Recharge",
      modelType: "plug-in hybrid",
    },
  };
};

export default Learn;
