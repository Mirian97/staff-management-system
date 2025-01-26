"use client";
import { Button } from "@/app/_components/ui/button";
import { TTaskSchema } from "@/app/_schemas/task-schema";
import { EntityId } from "@/app/_types/with-id-type";
import { Edit2 } from "lucide-react";
import { FC, useState } from "react";
import { TaskForm } from "./task-form";

interface EditTaskButtonProps extends EntityId {
  task: TTaskSchema;
}

export const EditTaskButton: FC<EditTaskButtonProps> = ({ id, task }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        size="xs"
        variant="ghost"
        onClick={() => setIsOpen(true)}
        className="hover:text-green-600"
      >
        <Edit2 />
      </Button>
      <TaskForm isOpen={isOpen} setIsOpen={setIsOpen} taskID={id} task={task} />
    </>
  );
};
