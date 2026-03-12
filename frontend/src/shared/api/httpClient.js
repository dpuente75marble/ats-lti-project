import { config } from "../config";

export async function httpGet(path) {
  const url = `${config.api.baseUrl}${path}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error ${response.status}`);
  }

  return response.json();
}
