import CarInfo from "../../src/components/CarInfo";
import { CarTypes } from "../../types/types";
import Header from "../../src/components/Header";
const Learn = ({ data }: { data: CarTypes }) => {
  return (
    <>
      <Header />
      <CarInfo
        data={data}
        width={800}
        height={500}
        isSlider={false}
        layout={undefined}
        objectFit={undefined}
      />
    </>
  );
};

Learn.getInitialProps = async function (props: any) {
  return {
    data: props.query,
  };
};

export default Learn;
