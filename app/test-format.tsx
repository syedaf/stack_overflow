import { useRouter } from 'next/router';
import React, { useState } from 'react';

interface Props {
  title: string;
  count: number;
}

const TestComponent: React.FC<Props> = ({ title, count }) => {
  const [value, setValue] = useState(0);
  const router = useRouter();
  const handleClick = () => {
    setValue(prev => prev + 1);
  };
  return (
    <div className="p-4">
      <h1>{title}</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default TestComponent;
