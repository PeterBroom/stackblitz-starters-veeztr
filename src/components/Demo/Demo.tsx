import { FC, useState } from 'react';
import { Button } from '../Button';
import { DemoComponentBlock } from '../Demo/types';

export const DemoComponent: FC<DemoComponentBlock> = ({ text }) => {
  const [buttonText, setButtonText] = useState('Unset data');

  const toggleData = () => {
    setButtonText('Refresh');
  };

  return (
    <div>
      <Button text={buttonText} onClick={() => toggleData()} />
    </div>
  );
};
