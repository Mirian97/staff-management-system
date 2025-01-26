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
import { useDepartment } from "@/app/_hooks/useDepartment";
import {
  departmentSchema,
  TDepartmentSchema,
} from "@/app/_schemas/department-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FC } from "react";
import { useForm } from "react-hook-form";

interface DepartmentFormProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  departmentID?: number;
  department?: TDepartmentSchema;
}

export const DepartmentForm: FC<DepartmentFormProps> = ({
  isOpen,
  setIsOpen,
  departmentID,
  department,
}) => {
  const { createDepartment, updateDepartment } = useDepartment({
    closeDialog: () => setIsOpen(false),
  });
  const isEditting = departmentID !== undefined;
  const form = useForm<TDepartmentSchema>({
    resolver: zodResolver(departmentSchema),
    defaultValues: {
      name: department?.name || "",
    },
  });

  const onSubmit = (values: TDepartmentSchema) => {
    if (isEditting) {
      updateDepartment({
        id: departmentID,
        payload: values,
      });
    } else {
      createDepartment({
        ...values,
      });
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
            {isEditting ? "Editar Departamento" : "Novo Departamento"}
          </DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="RH" {...field} />
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
