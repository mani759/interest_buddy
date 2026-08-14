import DurationInput from "../components/DurationInput";
import InputField from "../components/InputField";
import CalculateButton from "../components/CalculateButton";
import ResultCard from "../components/ResultCard";
import CompoundFrequency from "../components/CompoundFrequency";
import { useState } from "react";

const CompoundInterest = ({ t }) => {
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");

  const [timeUnit, setTimeUnit] = useState("years");
  const [result, setResult] = useState(null);
  const [frequency, setFrequency] = useState("annually");
  const frequencyMap = {
    annually: 12,
    "half-yearly": 6,
    quarterly: 3,
    monthly: 1,
    daily: 1 / 365,
  };

  const calculateCompoundInterest = () => {
    const p = Number(principal);
    const r = Number(rate);
    const t = Number(time);

    // Validation
    if (p <= 0 || r < 0 || t <= 0) {
      alert("Please enter valid values.");
      return;
    }

    // Convert duration to months
    let timeInMonths;

    if (timeUnit === "years") {
      timeInMonths = t * 12;
    } else if (timeUnit === "months") {
      timeInMonths = t;
    } else {
      timeInMonths = t / 30;
    }

    const monthsPerPeriod = frequencyMap[frequency];
    const numberOfPeriods = timeInMonths / monthsPerPeriod;
    const ratePerPeriod = (r * monthsPerPeriod) / 100;
    const totalAmount = p * Math.pow(1 + ratePerPeriod, numberOfPeriods);
    const totalInterest = totalAmount - p;
    setResult({
      totalInterest,
      totalAmount,
    });
  };

  return (
    <div>
      <h2>{t.compoundInterest}</h2>

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
        time={time}
        setTime={setTime}
        timeUnit={timeUnit}
        setTimeUnit={setTimeUnit}
        t={t}
      />

      <CompoundFrequency
        frequency={frequency}
        setFrequency={setFrequency}
        t={t}
      />

      <CalculateButton onClick={calculateCompoundInterest} t={t} />

      <ResultCard result={result} t={t} />
    </div>
  );
};

export default CompoundInterest;
