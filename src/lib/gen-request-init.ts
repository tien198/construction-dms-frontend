export function genRequestInit(method: string, bodyStr: string): RequestInit {
  return {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: bodyStr,
  };
}
