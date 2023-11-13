export async function waitForMilliseconds(duration: number) {
  return new Promise((resolve) => setTimeout(resolve, duration));
}
