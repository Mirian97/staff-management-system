import { debounce } from "lodash";
import React, {
  ComponentProps,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Input } from "./ui/input";

interface DebouncedInputProps
  extends Omit<ComponentProps<"input">, "onChange"> {
  delay?: number;
  value?: string;
  onChange?: (value: string) => void;
}

export const DebouncedInput: React.FC<DebouncedInputProps> = ({
  value = "",
  placeholder = "Digite a busca...",
  delay = 750,
  className,
  onChange,
  ...props
}) => {
  const [inputValue, setInputValue] = useState(value);

  const debouncedOnChange = useMemo(
    () => debounce((newValue: string) => onChange?.(newValue), delay),
    [delay, onChange]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const nextValue = e.target.value;
      setInputValue(nextValue);
      debouncedOnChange(nextValue);
    },
    [debouncedOnChange]
  );

  useEffect(() => setInputValue(value), [value]);

  useEffect(() => {
    return () => {
      debouncedOnChange.cancel();
    };
  }, [debouncedOnChange]);

  return (
    <Input
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
      className={className}
      {...props}
    />
  );
};
