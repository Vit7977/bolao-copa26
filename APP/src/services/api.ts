export const api = async (url: string, options: RequestInit) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options?.headers,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    return {
      success: false,
      message: data?.error?.message || data?.message,
      path: data?.error?.path || null,
      status: response.status,
    };
  }

  return {
    success: true,
    ...data,
  };
};
