import {useState} from 'react';

export type LayoutParams = {
  x: number;
  y: number;
};
export const useMeasureLayout = () => {
  const [measure, setMeasure] = useState<LayoutParams>();

  const handleSetMeasure = (values: LayoutParams) => {
    setMeasure(values);
  };
  return {measure, handleSetMeasure};
};
