class InvalidInputStringError extends Error {
  constructor() {
    super("Input must be string");
  }
}

export function firstUpperCase(input: string): string {
  if (typeof input !== "string") {
    throw new InvalidInputStringError();
  }

  return input[0].toUpperCase() + input.slice(1);
}

export function firstWordUpperCase(input: string): string {
  if (typeof input !== "string") {
    throw new InvalidInputStringError();
  }

  return input.split(" ").map(firstUpperCase).join(" ");
}
