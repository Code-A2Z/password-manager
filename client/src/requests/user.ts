import { post } from "../shared/rest";
import type {
  RegisterUserPayload,
  RegisterUserResponse,
} from "../typings";

export const registerUser = async(
  userId: string,
  firstName: string,
  lastName: string,
  email: string,
  imageUrl: string,
) => {
  return post<RegisterUserResponse, RegisterUserPayload>(
    '/api/user/register',
    false,
    {
      userId,
      firstName,
      lastName,
      email,
      imageUrl
    }
  )
}
