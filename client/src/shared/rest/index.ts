import axios from "axios";

const Methods = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
} as const;
type Methods = typeof Methods[keyof typeof Methods];

export async function makeRequest<T>(
  url: string,
  method: Methods,
  isAuthRequired: boolean,
  data?: any,
  hasFullURL?: boolean,
): Promise<T> {
  let token: string | null = null;

  if (isAuthRequired) {
    token = localStorage.getItem("token");
  }
  if (!hasFullURL) {
    url = import.meta.env.VITE_SERVER_DOMAIN + url;
  }

  const response = await axios({
    url,
    method,
    data,
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined
    }
  });
  return response.data;
}

export async function get<T>(
  url: string,
  isAuthRequired: boolean,
  body?: any,
  hasFullURL: boolean = false,
): Promise<T> {
  return makeRequest<T>(
    url,
    Methods.GET,
    isAuthRequired,
    hasFullURL,
    body
  );
}

export async function post<T>(
  url: string,
  isAuthRequired: boolean,
  body?: any,
  hasFullURL: boolean = false,
): Promise<T> {
  return makeRequest<T>(
    url,
    Methods.POST,
    isAuthRequired,
    hasFullURL,
    body
  );
}

export async function put<T>(
  url: string,
  isAuthRequired: boolean,
  body?: any,
  hasFullURL: boolean = false,
): Promise<T> {
  return makeRequest<T>(
    url,
    Methods.PUT,
    isAuthRequired,
    hasFullURL,
    body
  );
}

export async function patch<T>(
  url: string,
  isAuthRequired: boolean,
  body?: any,
  hasFullURL: boolean = false,
): Promise<T> {
  return makeRequest<T>(
    url,
    Methods.PATCH,
    isAuthRequired,
    hasFullURL,
    body
  );
}

export async function del<T>(
  url: string,
  isAuthRequired: boolean,
  body?: any,
  hasFullURL: boolean = true,
): Promise<T> {
  return makeRequest<T>(
    url,
    Methods.DELETE,
    isAuthRequired,
    hasFullURL,
    body
  );
}