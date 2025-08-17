export interface RegisterUserPayload {
  userId: string;
  firstName: string;
  lastName: string;
  email: string;
  imageUrl: string;
}

export interface RegisterUserResponse {
  access_token: string;
}