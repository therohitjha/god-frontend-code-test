import { useRouter } from "next/router";
import CarInfo from "../CarInfo";

const Learn = () => {
  const router = useRouter();

  return <CarInfo data={router.query} />;
};

export default Learn;
