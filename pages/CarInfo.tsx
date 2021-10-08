import Header from "../src/components/Header";
import Img from "../src/components/Img";
import { CarInfoTypes } from "../types/types";
import { base_url } from "../public/api/Services";
export default function CarInfo({ data }: { data: CarInfoTypes | any }) {
  const {
    body,
    name,
    src = `${base_url}/images/404.jpg`,
    type,
  } = data;

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
        <Img src={src} width={800} height={500} alt={name} />
      </div>
    </>
  );
}