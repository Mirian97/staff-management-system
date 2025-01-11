type StorageValue = string | Record<string, any>;

export const setStorage = (key: string, value: StorageValue): void => {
  try {
    const storageValue =
      typeof value === "string" ? value : JSON.stringify(value);

    localStorage.setItem(key, storageValue);
  } catch (error) {
    console.error("Erro ao salvar no storage:", error);
  }
};

export const getStorage = <T = StorageValue>(
  key: string,
  parseJson = true
): T | null => {
  try {
    const item = localStorage.getItem(key);
    if (!item) return null;
    if (parseJson) {
      try {
        return JSON.parse(item);
      } catch {
        return item as unknown as T;
      }
    }
    return item as unknown as T;
  } catch (error) {
    console.error("Erro ao ler do storage:", error);
    return null;
  }
};

export const removeStorage = (key: string): void => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error("Erro ao remover do storage:", error);
  }
};

export const clearAllStorage = (key: string): void => {
  try {
    localStorage.clear();
  } catch (error) {
    console.error("Erro ao limpar tudo do storage");
  }
};
