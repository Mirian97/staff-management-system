import * as z from "zod";

export const departmentSchema = z.object({
  name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
});

export type TDepartmentSchema = z.infer<typeof departmentSchema>