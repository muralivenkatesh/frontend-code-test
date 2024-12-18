import { ChangeEvent } from "react";

const Filter = (props: {
  carType: string[];
  onChangeFilter: (e: ChangeEvent<HTMLSelectElement>) => void;
}) => {
  const { carType, onChangeFilter } = props;
  return (
    <select className="mb-32" onChange={onChangeFilter} aria-label="car filter">
      <option value="All Cars">All Cars</option>
      {carType.map((item: string) => {
        return (
          <option value={item} key={item}>
            {item.toUpperCase()}
          </option>
        );
      })}
    </select>
  );
};

export default Filter;
