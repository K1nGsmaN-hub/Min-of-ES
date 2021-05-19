type TInit = {
  method: string;
  body: string;
};

type TReturnData = {
  status: number;
  statusText: string;
};

export const postData = async (
  url: string,
  init: TInit
): Promise<TReturnData> => {
  const res = await fetch(url, {
    ...init,
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
