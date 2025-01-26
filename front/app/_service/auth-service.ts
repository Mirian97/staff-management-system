import { api } from "../_config/api";
import { TLoginSchema } from "../_schemas/login-schema";
import { TToken, TWhoAmi } from "../_types/auth-type";

class AuthService {
  async whoAmi() {
    return await api.get<TWhoAmi>("/me");
  }
  async login(payload: TLoginSchema) {
    return await api.post<TToken>("/login", payload);
  }
  async logout() {
    return await api.get<TWhoAmi>("/logout");
  }
}

export const authService = new AuthService();
