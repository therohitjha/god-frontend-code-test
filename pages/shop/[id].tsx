import { useRouter } from "next/router";
import CarInfo from "../../src/components/CarInfo";

export default function Shop() {
  const router = useRouter();
  return <CarInfo data={router.query} />;
}
