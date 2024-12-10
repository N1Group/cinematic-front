import { ChangeEvent, FC, useEffect, useRef, useState } from 'react';
import { Input } from '../Input';
import { $CodeInputs } from './style';

type CodeInputsProps = {
  onChange?: (value: string) => void;
};

export const CodeInputs: FC<CodeInputsProps> = ({ onChange }) => {
  const inputArray = new Array(4).fill('');
  const [codeArray, setCodeArray] = useState<string[]>([]);
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const _onChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    if (!event.target.value) {
      refs.current[index - 1]?.focus();
      setCodeArray((codeArray) => [...codeArray.slice(0, index), '']);
    } else {
      refs.current[index + 1]?.focus();
    }
    setCodeArray((codeArray) => [...codeArray, event.target.value]);
  };

  useEffect(() => {
    onChange && onChange(codeArray.join(''));
  }, [codeArray]);

  return (
    <$CodeInputs>
      {inputArray.map((_, index) => (
        <Input
          ref={(el) => {
            refs.current[index] = el;
          }}
          key={index}
          data-index={index}
          onChange={(e) => _onChange(e, index)}
          maxLength={1}
        />
      ))}
    </$CodeInputs>
  );
};
