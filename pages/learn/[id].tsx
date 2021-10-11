import CarInfo from "../../src/components/CarInfo";
import { CarTypes } from "../../types/types";
import Header from "../../src/components/Header";
import { server } from "../../public/api/config";

const Learn = ({ data }: { data: CarTypes }) => {
  return (
    <>
      <Header />
      <CarInfo data={data} width={800} height={500} isSlider={false} />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${server}/api/cars.json`);
  const posts = await res.json();

  const paths = posts.map((post: CarTypes) => ({
    params: { id: post.id },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({
  params: { id },
}: {
  params: { id: string };
}) {
  const res = await fetch(`${server}/api/cars.json`);
  const data = await res.json();
  const carInfo = data.find((e: any) => e.id === id);
  return { props: { data: carInfo } };
}

export default Learn;
