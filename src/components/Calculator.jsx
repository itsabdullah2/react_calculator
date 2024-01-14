import { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    // check if result is undefined and initialize it to an empty array
    const newResult = result === undefined ? [] : result;

    setResult(newResult.concat(e.target.id));
  };

  const clear = () => setResult("");

  const DeleteEl = () => setResult(result.slice(0, -1));

  const calculate = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(result).toString());
    } catch {
      setResult(alert("Please try again"));
    }
  };

  const buttonsClassNames =
    "transition duration-300 active:translate-x-1 text-xl";
  const NumClassNames = "bg-[#f1f5f90d] text-indigo-700 rounded-lg p-2";
  const OperatorsClassNames = "bg-indigo-700 text-white rounded-lg p-2";

  return (
    <div className="calculator bg-black w-96 mx-auto mt-10 rounded-lg shadow-lg z-10 shadow-xl">
      <input
        type="text"
        value={result}
        disabled
        className="bg-white text-white w-full h-44 text-right rounded-t-lg p-4 px-5 text-2xl bg-indigo-700"
      />

      <div className="buttons grid grid-cols-4 gap-4 mt-4 p-4">
        <button
          className={`${OperatorsClassNames} ${buttonsClassNames}`}
          onClick={clear}
        >
          AC
        </button>
        <button
          className={`${OperatorsClassNames} ${buttonsClassNames}`}
          onClick={DeleteEl}
        >
          DE
        </button>

        <button
          id="."
          className={`${OperatorsClassNames} ${buttonsClassNames}`}
          onClick={handleClick}
        >
          .
        </button>
        <button
          id="/"
          className={`${OperatorsClassNames} ${buttonsClassNames}`}
          onClick={handleClick}
        >
          /
        </button>

        <button
          id="7"
          className={`${NumClassNames} ${buttonsClassNames}`}
          onClick={handleClick}
        >
          7
        </button>
        <button
          id="8"
          className={`${NumClassNames} ${buttonsClassNames}`}
          onClick={handleClick}
        >
          8
        </button>
        <button
          id="9"
          className={`${NumClassNames} ${buttonsClassNames}`}
          onClick={handleClick}
        >
          9
        </button>
        <button
          id="*"
          className={`${OperatorsClassNames} ${buttonsClassNames}`}
          onClick={handleClick}
        >
          *
        </button>

        <button
          id="4"
          className={`${NumClassNames} ${buttonsClassNames}`}
          onClick={handleClick}
        >
          4
        </button>
        <button
          id="5"
          className={`${NumClassNames} ${buttonsClassNames}`}
          onClick={handleClick}
        >
          5
        </button>
        <button
          id="6"
          className={`${NumClassNames} ${buttonsClassNames}`}
          onClick={handleClick}
        >
          6
        </button>
        <button
          id="-"
          className={`${OperatorsClassNames} ${buttonsClassNames}`}
          onClick={handleClick}
        >
          -
        </button>

        <button
          id="1"
          className={`${NumClassNames} ${buttonsClassNames}`}
          onClick={handleClick}
        >
          1
        </button>
        <button
          id="2"
          className={`${NumClassNames} ${buttonsClassNames}`}
          onClick={handleClick}
        >
          2
        </button>
        <button
          id="3"
          className={`${NumClassNames} ${buttonsClassNames}`}
          onClick={handleClick}
        >
          3
        </button>
        <button
          id="+"
          className={`${OperatorsClassNames} ${buttonsClassNames}`}
          onClick={handleClick}
        >
          +
        </button>

        <button
          id="00"
          className={`${NumClassNames} ${buttonsClassNames}`}
          onClick={handleClick}
        >
          00
        </button>
        <button
          id="0"
          className={`${NumClassNames} ${buttonsClassNames}`}
          onClick={handleClick}
        >
          0
        </button>
        <button
          id="="
          className={`${OperatorsClassNames} col-span-2`}
          onClick={calculate}
        >
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
