export const prodLog = {
  log: (..._args: any[]) => {},
  warn: (..._args: any[]) => {},
  error: (...args: any[]) => {
    if (process.env.NODE_ENV !== "production") {
      console.error(...args);
    }
  },
};
