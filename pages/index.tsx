import { ChangeEvent, EventHandler, useRef, useState } from "react";
import Card from "../src/components/Card";
import Slider from "react-slick";
import Filter from "../src/components/Filter";
import SliderArrows from "../src/components/SliderArrows";

interface Car {
  id: string;
  modelName: string;
  bodyType: string;
  modelType: string;
  imageUrl: string;
}

const HomePage = (props: { cars: Car[] }) => {
  const { cars } = props;
  const [filterData, setFilterData] = useState<Car[]>(cars);
  const carType: string[] = [...new Set(cars.map((car: Car) => car.bodyType))];
  const carSlider = useRef<Slider>(null);

  if (cars.length === 0) {
    return "No Data found";
  }

  const settings = {
    slidesToShow: filterData.length < 4 ? filterData.length : 4,
    dots: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: filterData.length < 4 ? filterData.length : 4,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1.2,
          dots: true,
        },
      },
    ],
  };

  const onChangeFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const filteredCars: Car[] = cars.filter(
      (i: Car) => (e.target as HTMLSelectElement).value === i.bodyType
    );

    if (filteredCars.length) {
      setFilterData(filteredCars);
    } else {
      setFilterData(cars);
    }
  };

  return (
    <div className="container-xl">
      <div className="mt-24">
        <Filter carType={carType} onChangeFilter={onChangeFilter} />
        {filterData.length === 0 && <h1>No Car Data found!</h1>}
        <Slider {...settings} ref={carSlider}>
          {filterData.map((item: Car) => (
            <Card car={item} />
          ))}
        </Slider>
        <SliderArrows carSlider={carSlider} />
      </div>
    </div>
  );
};

export async function getServerSideProps(context: any) {
  try {
    const { req } = context;
    const host = req.headers.host;
    const res = await fetch(`http://${host}/api/cars.json`);
    const data = await res.json();

    // Pass data as props to the component
    return {
      props: {
        cars: data,
      },
    };
  } catch (error) {
    console.log("error", error);
    return {
      props: {
        cars: [],
      },
    };
  }
}

export default HomePage;
