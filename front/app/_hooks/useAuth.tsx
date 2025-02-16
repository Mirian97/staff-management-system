import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { TLoginSchema } from "../_schemas/login-schema";

export function useAuth() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const login = async (data: TLoginSchema) => {
    setIsLoading(true);

    try {
      const response: any = await signIn("credentials", {
        ...data,
        redirect: false,
      });
      if (!response?.error) {
        router.push("/");
        router.refresh();
      }
      toast.success("Login realizado com sucesso!");
    } catch (error: any) {
      toast.error("Erro ao realizar login", error.toString());
      console.error("Erro no login:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    login,
    isLoading,
  };
}
