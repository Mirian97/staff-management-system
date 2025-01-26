import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authService } from "../_service/auth-service";
import { clearAllStorage, getStorage, setStorage } from "../_utils/storage";

export const useAuth = () => {
  const router = useRouter();

  const checkAuth = () => {
    authService
      .whoAmi()
      .then((res) => setStorage("AUTH_USER", res.data.user))
      .catch(() => {
        clearAllStorage();
        router.push("/login");
      });
  };

  const logout = () => {
    router.push("/login");
    authService.logout().then(() => clearAllStorage());
  };

  useEffect(() => {
    const token = getStorage("AUTH_TOKEN");
    if (token) {
      checkAuth();
    }
  }, []);

  return {
    logout,
  };
};
