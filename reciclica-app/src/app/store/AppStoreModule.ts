import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { loginReducer } from "./login/login.reducers";
import { registerReducer } from "./register/register.reducers";
import { loadingReducer } from "src/loading/loading.reducers";
import { LoginEffects } from "src/store/login/login.effects";
import { RegisterEffects } from "../pages/register/register.effects";

export const AppStoreModule = [
  StoreModule.forRoot({
    // Define your root state and reducers if needed
  }),
  StoreModule.forFeature("loading", loadingReducer),
  StoreModule.forFeature("login", loginReducer),
  StoreModule.forFeature("register", registerReducer),
  EffectsModule.forRoot([]), // Define root effects if needed
  EffectsModule.forFeature([
    LoginEffects,
    RegisterEffects
    // Add other feature effects if needed
  ])
];
