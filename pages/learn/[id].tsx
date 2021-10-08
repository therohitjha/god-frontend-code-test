import CarInfo from "../CarInfo";
import { CarInfoTypes } from "../../types/types";

const Learn = ({ data }: { data: CarInfoTypes }) => {
  return <CarInfo data={data} />;
};

Learn.getInitialProps = async function (props: any) {
  
  return {
    data: props.query,
  };
};

export default Learn;
