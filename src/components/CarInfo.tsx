import Link from "next/link";
import Img from "./Img";
import { CarTypes } from "../../types/types";
export default function CarInfo({
  data,
  width,
  height,
  isSlider,
  layout,
  objectFit,
}: {
  data: CarTypes;
  width: number;
  height: number;
  isSlider: boolean;
  layout?: "responsive";
  objectFit?: "contain";
}) {
  const {
    bodyType,
    modelName,
    imageUrl = `/images/404.jpg`,
    modelType,
    id,
  } = data;
  return (
    <div
      style={{
        textAlign: !isSlider ? "center" : undefined,
      }}
    >
      <span className="body-type">{bodyType}</span>
      <div className="modal-type-name">
        <span className="modal-name">{modelName}</span>{" "}
        <span className="modal-type">{modelType}</span>
      </div>
      <Img
        src={`${imageUrl}`}
        alt={modelName}
        layout={layout}
        objectFit={objectFit}
        width={width}
        height={height}
      />
      <div
        className="learn-shop-link"
        style={{ marginTop: !isSlider ? "1%" : "5%" }}
      >
        <Link
          href={{
            pathname: `/learn/[id]`,
            query: {
              modelName,
              modelType,
              imageUrl,
              bodyType,
              id,
            },
          }}
          as={`/learn/${id}`}
          passHref
        >
          <div className="learn-link">
            <span>LEARN </span>
            <span>
              <Img
                src="/images/chevron-small.svg"
                alt={"chevron_small"}
                width={10}
                height={10}
              />
            </span>
          </div>
        </Link>
        <Link
          href={{
            pathname: `/shop/[id]`,
            query: {
              modelName,
              modelType,
              imageUrl,
              bodyType,
              id,
            },
          }}
          as={`/shop/${id}`}
          passHref
        >
          <div className="shop-link">
            <span>SHOP </span>
            <span>
              <Img
                src="/images/chevron-small.svg"
                alt={"chevron_small"}
                width={10}
                height={10}
              />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
