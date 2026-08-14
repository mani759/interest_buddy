import { useState } from "react";
import InputField from "../components/InputField";
import CalculateButton from "../components/CalculateButton";
import ResultCard from "../components/ResultCard";
import DurationInput from "../components/DurationInput";
const SimpleInterest = ({ t }) => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [result, setResult] = useState(null);
  const [timeUnit, setTimeUnit] = useState("years");
  const calculateSimpleInterest = () => {
    const p = Number(principal);
    const r = Number(rate);
    const t = Number(time);
    let timeInMonths;
    if (timeUnit === "years") {
      timeInMonths = t * 12;
    } else if (timeUnit === "months") {
      timeInMonths = t;
    } else if (timeUnit === "days") {
      timeInYears = t / 30;
    }
    const monthlyRate = p * (r / 100);
    const totalInterest = monthlyRate * timeInMonths;
    const totalAmount = p + totalInterest;

    setResult({ totalInterest, totalAmount });
  };

  return (
    <div>
      <h2 className="mb-7 flex justify-center text-3xl font-bold">
        {t.simpleInterest}
      </h2>
      <InputField
        label={t.principal}
        value={principal}
        onChange={setPrincipal}
        placeholder={t.enterPrincipal}
      />
      <InputField
        label={t.rate}
        value={rate}
        onChange={setRate}
        placeholder={t.enterRate}
      />

      <DurationInput
        t={t}
        time={time}
        setTime={setTime}
        timeUnit={timeUnit}
        setTimeUnit={setTimeUnit}
      />
      <CalculateButton onClick={calculateSimpleInterest} t={t} />
      <ResultCard result={result} t={t} />
    </div>
  );
};
export default SimpleInterest;
