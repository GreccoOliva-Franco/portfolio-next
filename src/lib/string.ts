class InvalidInputStringError extends Error {
  constructor() {
    super("Input must be string");
  }
}

function validateInput(input: string): void {
  if (typeof input !== "string") {
    throw new InvalidInputStringError();
  }
}

export function firstUpperCase(input: string): string {
  validateInput(input);

  return input.charAt(0).toUpperCase() + input.slice(1);
}

export function firstWordUpperCase(input: string): string {
  validateInput(input);

  return input.split(" ").map(firstUpperCase).join(" ");
}
