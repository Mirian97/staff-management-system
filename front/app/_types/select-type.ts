import { ComponentProps } from "react";
import { ThemeConfig } from "react-select";
import AsyncSelect from "react-select/async";

export type SelectOptionType = {
  value: number;
  label: string;
};

export interface AsyncSelectProps
  extends ComponentProps<typeof AsyncSelect<SelectOptionType | null, false>> {
  value: SelectOptionType | null;
}

export const selectTheme: ThemeConfig = (theme) => ({
  ...theme,
  borderRadius: 6,
  spacing: {
    ...theme.spacing,
    controlHeight: 40,
  },
  colors: {
    ...theme.colors,
    primary: "hsl(236.8 60% 56.86%)",
  },
});
