import DepartmentAsyncSelect from "@/app/_components/department-async-select";
import { Button } from "@/app/_components/ui/button";
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
import { useEmployee } from "@/app/_hooks/useEmployee";
import {
  employeeSchema,
  TEmployeeSchema,
} from "@/app/_schemas/employee-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface EmployeeFormProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  employeeID?: number;
  employee?: TEmployeeSchema;
}

export const EmployeeForm: FC<EmployeeFormProps> = ({
  isOpen,
  setIsOpen,
  employeeID,
  employee,
}) => {
  const { createEmployee, updateEmployee } = useEmployee({
    closeDialog: () => setIsOpen(false),
  });
  const isEditting = employeeID !== undefined;
  const form = useForm<TEmployeeSchema>({
    resolver: zodResolver(employeeSchema),
    defaultValues: employee,
  });

  const onSubmit = (values: TEmployeeSchema) => {
    if (isEditting) {
      updateEmployee({
        id: employeeID,
        payload: values,
      });
    } else {
      createEmployee(values);
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
            {isEditting ? "Editar Funcionário" : "Novo Funcionário"}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="first_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="last_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sobrenome</FormLabel>
                    <FormControl>
                      <Input placeholder="Due" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="(00) 00000 - 0000"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="example@gmail.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="department_id"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Departamento</FormLabel>
                  <DepartmentAsyncSelect
                    value={
                      field.value
                        ? {
                            label: form.getValues().department_name,
                            value: Number(form.getValues().department_id),
                          }
                        : null
                    }
                    isDisabled={field.disabled}
                    onChange={(newValue) => {
                      if (newValue) {
                        form.setValue("department_id", String(newValue.value));
                        form.setValue("department_name", newValue.label);
                      }
                    }}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirm_password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmar Senha</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="********" {...field} />
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
