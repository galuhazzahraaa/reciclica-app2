import { createAction, props } from "@ngrx/store";

// Aksi untuk memulai proses pemulihan password
export const recoverPassword = createAction("[Recover password]");

// Aksi ketika pemulihan password berhasil
export const recoverPasswordSuccess = createAction("[Recover password] success");

// Aksi ketika pemulihan password gagal
export const recoverPasswordFail = createAction(
  "[Recover password] fail",
  props<{ error: any }>() // Sesuaikan tipe error dengan tipe yang Anda gunakan di LoginState
);
