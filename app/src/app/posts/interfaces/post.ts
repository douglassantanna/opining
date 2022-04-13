import { ViewUser } from "src/app/identity-auth/interfaces/user";

export interface ViewPost {
  id: number,
  user: ViewUser,
  message: string
}
