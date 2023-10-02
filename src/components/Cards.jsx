import card_data from "../data/data.json";
import CarData from "./CarData";

export default function Cards() {
  return (
    <div>
      <h1 className="text-center m-4 p-4">List of Cars</h1>
      <div className="container" style={{ width: "90%" }}>
        <div className="row p-1 m-1  ">
          {card_data.map((car, index) => (
            <CarData key={index} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}
