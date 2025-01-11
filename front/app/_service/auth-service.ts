import { api } from "../_config/api";
import { TEmployeeSchema } from "../_schemas/employee-schema";
import { TLoginSchema } from "../_schemas/login-schema";
import { TToken } from "../_types/auth-type";

class AuthService {
  async login(payload: TLoginSchema) {
    return await api.post<TToken>("/login", payload);
  }

  async register(payload: TEmployeeSchema) {
    await api.post("/register", payload);
  }
}

export const authService = new AuthService();
