import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { TLoginSchema } from "../_schemas/login-schema";
import { authService } from "../_service/auth-service";
import { setStorage } from "../_utils/storage";

export function useLogin() {
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: (data: TLoginSchema) => authService.login(data),
    onSuccess: (data) => {
      setStorage("AUTH", data);
      toast.success("Login realizado com sucesso!");
      router.push("/");
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        toast.error(error.response?.data.message || "Erro ao realizar login");
      }
      console.error("Erro no login:", error);
    },
  });

  return {
    login: loginMutation.mutate,
    isLoading: loginMutation.isPending,
  };
}
