// src/app/store/AppState.ts

import { LoadingState } from "src/loading/LoadingState";
import { LoginState } from "./login/loginState";
import { RegisterState } from "./register/RegisterState";

export interface AppState {
  loading: LoadingState; // Pastikan nama dan tipe ini sesuai dengan state di reducer
  login: LoginState;
  register:RegisterState;
}
