export async function delay(fn: () => void, ms: number = 1000): Promise<void> {
  await new Promise((resolve) => {
    setTimeout(() => resolve(fn()), ms);
  });
}
