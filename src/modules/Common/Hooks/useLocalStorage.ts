export const useLocalStorage = () => {
  const setItem = <Value extends unknown>(key: string, value: Value) =>
    localStorage.setItem(key, JSON.stringify(value))

  const getItem = (key: string) => localStorage.getItem(key)

  return [setItem, getItem] as [typeof setItem, typeof getItem]
}
