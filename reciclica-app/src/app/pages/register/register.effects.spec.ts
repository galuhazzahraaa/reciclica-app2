import { TestBed } from "@angular/core/testing";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule, Action } from "@ngrx/store";
import { Observable, of, throwError } from "rxjs";
import { provideMockActions } from '@ngrx/effects/testing';
import { AuthService } from "src/app/services/auth/auth.service";
import { RegisterEffects } from "./register.effects";

import { UserRegister } from "src/app/model/user/UserRegister";
import { register, registerSuccess, registerFail } from "src/app/store/register/register.action";
import { User } from "src/app/model/user/User";

describe('RegisterEffects', () => {
  let effects: RegisterEffects;
  let actions$: Observable<Action>;
  let user = new User();
  user.id = "anyUserId";

  let authServiceMock = {
    register(userRegister: UserRegister) {
      if (userRegister) {
        return throwError(() => new Error('Registration failed')); // Replace with actual error handling
      }
      return of({});
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot([]),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([
          RegisterEffects
        ])
      ],
      providers: [
        provideMockActions(() => actions$),
        { provide: AuthService, useValue: authServiceMock }
      ]
    });

    effects = TestBed.inject(RegisterEffects); // Use TestBed.inject instead of TestBed.get
  });

  it('should register return error', (done) => {
    const userRegister = new UserRegister();
    userRegister.email = "error@email.com"; // Set email or other properties to simulate error

    actions$ = of(register({ userRegister }));

    effects.register$.subscribe(newAction => {
      expect(newAction).toEqual(registerFail({ error: 'Registration failed' })); // Adjust 'error' as needed
      done();
    });
  });

});
