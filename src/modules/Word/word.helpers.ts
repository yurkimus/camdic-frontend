export const detectSubmit = <Element>(e: React.KeyboardEvent<Element>) =>
  e.key === 'Enter' && !e.shiftKey && !e.ctrlKey

export const detectChar = (e: KeyboardEvent) =>
  !e.shiftKey && !e.ctrlKey && e.key.length === 1 && e.key.match(/\p{L}/u)?.pop()

export const getChar = (e: KeyboardEvent) => e.key
