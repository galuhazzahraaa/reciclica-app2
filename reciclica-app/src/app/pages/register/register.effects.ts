import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, switchMap } from 'rxjs/operators';
import { AuthService } from "src/app/services/auth/auth.service";
import { of } from "rxjs";

import { UserRegister } from "src/app/model/user/UserRegister";
import { register, registerFail, registerSuccess } from "src/app/store/register/register.action";

@Injectable()
export class RegisterEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService
  ) {}

  register$ = createEffect(() => this.actions$.pipe(
    ofType(register),
    switchMap(action =>
      this.authService.register(action.userRegister).pipe(
        map(() => registerSuccess()),
        catchError(error => of(registerFail({ error })))
      )
    )
  ));
}
