export const ACCESS_TOKEN = "access_token";
export const ACCOUNT_ADDRESS = "account_address";

export const getItem = (key: string) => {
  return localStorage.getItem(key);
};

export const saveItem = (key: string, value: string) => {
  if (typeof window !== undefined) {
    localStorage.setItem(key, value);
  }
};

export const deleteItem = () => {
  return localStorage.clear();
};
