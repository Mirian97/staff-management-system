import { debounce } from "lodash";
import { FC, useCallback } from "react";
import AsyncSelect from "react-select/async";
import { employeeService } from "../_service/employee-service";
import {
  AsyncSelectProps,
  SelectOptionType,
  selectTheme,
} from "../_types/select-type";

const EmployeeAsyncSelect: FC<AsyncSelectProps> = ({
  value,
  onChange,
  ...restProps
}) => {
  const loadOptionsDebounced = useCallback(
    debounce(
      (inputValue: string, callback: (options: SelectOptionType[]) => void) => {
        if (!inputValue) return;
        employeeService
          .listByName(inputValue)
          .then((data) => callback(data))
          .catch((err) => {
            console.error(
              "An error occurred when loading employee options: ",
              err
            );
          });
      },
      500
    ),
    []
  );

  return (
    <AsyncSelect
      value={value}
      cacheOptions
      onChange={onChange}
      loadOptions={loadOptionsDebounced}
      {...restProps}
      theme={selectTheme}
      placeholder="Digite parte do nome..."
    />
  );
};

export default EmployeeAsyncSelect;
