export class UserAlreadyExistsError extends Error {
  constructor() {
    super("E-rmail already exists.");
  }
}
