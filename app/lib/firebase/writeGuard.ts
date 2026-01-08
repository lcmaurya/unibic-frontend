export function assertWriteAllowed() {
  if (process.env.STORAGE_MODE !== "local") {
    throw new Error("Writes disabled in safe mode");
  }
}
