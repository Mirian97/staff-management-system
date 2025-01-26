import { Button } from "@/app/_components/ui/button";
import { DatePicker } from "@/app/_components/ui/date-picker";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/app/_components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/_components/ui/form";
import { Input } from "@/app/_components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/_components/ui/select";
import { Textarea } from "@/app/_components/ui/textarea";
import { useTask } from "@/app/_hooks/useTask";
import { taskSchema, TTaskSchema } from "@/app/_schemas/task-schema";

import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface TaskFormProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  taskID?: number;
  task?: TTaskSchema;
}

export const TaskForm: FC<TaskFormProps> = ({
  isOpen,
  setIsOpen,
  taskID,
  task,
}) => {
  const { createTask, updateTask } = useTask({
    closeDialog: () => setIsOpen(false),
  });
  const isEditting = taskID !== undefined;
  const form = useForm<TTaskSchema>({
    resolver: zodResolver(taskSchema),
    defaultValues: task,
  });

  const onSubmit = (values: TTaskSchema) => {
    if (isEditting) {
      updateTask({
        id: taskID,
        payload: values,
      });
    } else {
      createTask(values);
    }
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          form.reset();
        }
        setIsOpen(open);
      }}
    >
      <DialogTrigger asChild />
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>
            {isEditting ? "Editar Tarefa" : "Nova Tarefa"}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Gerar relatórios no PowerBI"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="assignee_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Funcionário</FormLabel>
                  <Select
                    value={field.value}
                    disabled={field.disabled}
                    onValueChange={(e) => field.onChange(e)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um funcionário..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2">Mirian</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="due_date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Vencimento</FormLabel>
                  <DatePicker value={field.value} onChange={field.onChange} />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descriçao</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Descreva a tarefa..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DialogClose>
              <Button type="submit">Salvar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};
