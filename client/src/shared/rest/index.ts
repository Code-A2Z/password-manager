import axios from "axios";

const Methods = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
} as const;
type Methods = typeof Methods[keyof typeof Methods];

export async function makeRequest<T, D>(
  url: string,
  method: Methods,
  isAuthRequired: boolean,
  data?: D,
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

export async function get<T, D>(
  url: string,
  isAuthRequired: boolean,
  body?: D,
  hasFullURL: boolean = false,
): Promise<T> {
  return makeRequest<T, D>(
    url,
    Methods.GET,
    isAuthRequired,
    body,
    hasFullURL,
  );
}

export async function post<T, D>(
  url: string,
  isAuthRequired: boolean,
  body?: D,
  hasFullURL: boolean = false,
): Promise<T> {
  return makeRequest<T, D>(
    url,
    Methods.POST,
    isAuthRequired,
    body,
    hasFullURL,
  );
}

export async function put<T, D>(
  url: string,
  isAuthRequired: boolean,
  body?: D,
  hasFullURL: boolean = false,
): Promise<T> {
  return makeRequest<T, D>(
    url,
    Methods.PUT,
    isAuthRequired,
    body,
    hasFullURL,
  );
}

export async function patch<T, D>(
  url: string,
  isAuthRequired: boolean,
  body?: D,
  hasFullURL: boolean = false,
): Promise<T> {
  return makeRequest<T, D>(
    url,
    Methods.PATCH,
    isAuthRequired,
    body,
    hasFullURL,
  );
}

export async function del<T, D>(
  url: string,
  isAuthRequired: boolean,
  body?: D,
  hasFullURL: boolean = false,
): Promise<T> {
  return makeRequest<T, D>(
    url,
    Methods.DELETE,
    isAuthRequired,
    body,
    hasFullURL,
  );
}