import Image from "next/image";
import Link from "next/link";

type Car = {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
};

function Card(props: { car: Car }) {
  const { car } = props;
  return (
    <div className="m-8">
      <h1 className="font-14 font-medium gray t-uppercase">{car.bodyType}</h1>
      <div className="heading-card-flex mb-16">
        <h2 className=" font-medium">{car.modelName}</h2>
        <h3 className="font-medium gray">{car.modelType}</h3>
      </div>
      <Image
        src={car.imageUrl}
        layout="responsive"
        width="200px"
        height="150px"
        style={{ objectFit: "contain" }}
        alt={car.modelName}
      />
      <div className="text-center card-link mt-16">
        <Link href={`learn/${car.id}`}>
          <a className="button-text mr-8 font-14 stack-text">Learn</a>
        </Link>
        <Link href={`shop/${car.id}`}>
          <a className="button-text font-14 stack-text">Shop</a>
        </Link>
      </div>
    </div>
  );
}

export default Card;
