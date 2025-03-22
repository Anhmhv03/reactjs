import "./Home.css";
import { useEffect, useState } from "react";
export const HomePage = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [ketqua, setKetqua] = useState(0);

  useEffect(() => {
    console.log("hello");
    setKetqua(Number(number1) + Number(number2));
  }, [number1, number2]);
  const handleNumber1Change = (event) => {
    console.log(event);
    setNumber1(event.target.value);
  };
  const handleNumber2Change = (event) => {
    console.log(event);
    setNumber2(event.target.value);
  };

  return (
    <div>
      <form>
        <div>
          <input className="" type="text" onChange={handleNumber1Change} />
        </div>

        <div>
          <input type="text" onChange={handleNumber2Change} />
        </div>
        <div>
          {/* {number1 || 0} + {number2 || 0} = {Number(number1) + Number(number2)} */}
          {ketqua}
        </div>
      </form>
    </div>
  );
};
