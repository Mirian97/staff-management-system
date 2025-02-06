import { debounce } from "lodash";
import { FC, useCallback } from "react";
import AsyncSelect from "react-select/async";
import { departmentService } from "../_service/department-service";
import {
  AsyncSelectProps,
  SelectOptionType,
  selectTheme,
} from "../_types/select-type";

const DepartmentAsyncSelect: FC<AsyncSelectProps> = ({
  value,
  onChange,
  ...restProps
}) => {
  const loadOptionsDebounced = useCallback(
    debounce(
      (inputValue: string, callback: (options: SelectOptionType[]) => void) => {
        if (!inputValue) return;
        departmentService
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

export default DepartmentAsyncSelect;
