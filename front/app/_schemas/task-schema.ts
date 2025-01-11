import * as z from "zod";

export const taskSchema = z.object({
  title: z.string().min(2, "Título deve ter no mínimo 2 caracteres"),
  description: z.string().min(2, "Descrição deve ter no mínimo 2 caracteres"),
  assignee_id: z.string().refine((val) => !isNaN(Number(val)) && Number(val) > 0, {
    message: "O ID do responsável deve ser um número inteiro positivo",
  }),
  due_date: z.date().refine((date) => date > new Date(), {
    message: "Data de vencimento deve ser posterior a hoje",
  }),
});

export type TTaskSchema = z.infer<typeof taskSchema>