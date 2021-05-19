type TReturnData = {
  status: number;
  statusText: string;
};

export const deleteData = async (url: string): Promise<TReturnData> => {
  const res = await fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  const { ok, status, statusText } = res;

  if (!ok) {
    throw new Error(`${status}: ${statusText}`);
  }

  return {
    status,
    statusText,
  };
};
