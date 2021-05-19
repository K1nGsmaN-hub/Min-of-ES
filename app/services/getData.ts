type TReturnData = {
  status: number;
  statusText: string;
  result: Promise<string>;
};

export const getData = async (url: string): Promise<TReturnData> => {
  const res = await fetch(url);

  const { ok, status, statusText } = res;

  if (!ok) {
    throw new Error(`${status}: ${statusText}`);
  }

  return {
    status,
    statusText,
    result: res.json(),
  };
};
