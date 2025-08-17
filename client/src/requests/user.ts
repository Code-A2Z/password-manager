import { post } from "../shared/rest";
import type {
  RegisterUserPayload,
  RegisterUserResponse,
} from "../typings";

export const registerUser = async(body: RegisterUserPayload) => {
  return post<RegisterUserResponse, RegisterUserPayload>(
    '/api/user/register',
    false,
    body,
  )
}
