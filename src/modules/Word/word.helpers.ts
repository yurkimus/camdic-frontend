export const helpers = {
  detect: {
    submit: <Element>(e: React.KeyboardEvent<Element>) => e.key === 'Enter' && !e.shiftKey && !e.ctrlKey,

    // char: (e: KeyboardEvent) =>
    //   !e.shiftKey && !e.ctrlKey && e.key.length === 1 && e.key.match(/\p{L}/u)?.pop()
  },

  get: {
    char: (e: KeyboardEvent) => e.key
  }
}
