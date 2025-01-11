"use client";
import { Button } from "@/app/_components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { TaskForm } from "./task-form";

export const AddTaskButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        <Plus className="mr-1 h-4 w-4" /> Nova Tarefa
      </Button>
      <TaskForm isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};
