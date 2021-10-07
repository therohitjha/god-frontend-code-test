import Image from "next/image";
import Header from "../src/components/Header";

export default function CarInfo({ data }: { data: any }) {
  const { body, name, src, type } = data;
  return (
    <>
      <Header />
      <div className="car-info" style={{ padding: "25px" }}>
        <span className="body-type" style={{ marginLeft: "0" }}>
          {body}
        </span>
        <div
          className="modal-type-name"
          style={{ marginBottom: "1%", marginLeft: "0", marginTop: "0" }}
        >
          <span className="modal-name">{name}</span>{" "}
          <span className="modal-type">{type}</span>
        </div>
        <Image src={src} width={800} height={500} alt={name} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(`http://localhost:3000/api/cars.json`);
  const data = await res.json();
  console.log("Rohit", data);

  return { props: { data } };
}

export async function getStaticPaths() {
  console.log("jha");

  return {
    paths: [],
    fallback: "blocking",
  };
}
