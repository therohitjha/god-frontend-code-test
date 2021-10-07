import { useRouter } from "next/router";
import CarInfo from "../CarInfo";

export default function Shop() {
  const router = useRouter();
  return <CarInfo data={router.query} />;
}
