import { ChangeEvent } from "react";
import Image from "next/image";

const SliderArrows = (props: { carSlider: any }) => {
  const { carSlider } = props;
  return (
    <div className="slick-slide-button-nav">
      <button
        aria-label="Previous"
        className="previous-icon"
        onClick={() => carSlider?.current?.slickPrev()}
      >
        <Image
          src="/icons/chevron-circled.svg"
          alt="Previous"
          width={25}
          height={25}
        />
      </button>
      <button aria-label="Next" onClick={() => carSlider?.current?.slickNext()}>
        <Image
          src="/icons/chevron-circled.svg"
          alt="Next"
          width={25}
          height={25}
        />
      </button>
    </div>
  );
};

export default SliderArrows;
