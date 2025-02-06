import * as z from "zod";

export const employeeSchema = z
  .object({
    first_name: z.string().min(2, "Nome deve ter no mínimo 2 caracteres"),
    last_name: z.string().min(2, "Sobrenome deve ter no mínimo 2 caracteres"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(2, "Telefone deve ser um número válido"),
    department_id: z
      .string()
      .refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
        message: "O ID do departamento deve ser um número inteiro positivo",
      }),
    department_name: z.string().min(2, "Selecione um departamento"),
    password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "As senhas não coincidem",
    path: ["confirm_password"],
  });

export type TEmployeeSchema = z.infer<typeof employeeSchema>;
