import { UsersRepository } from "@/repositories/user-repository";
import { User } from "@prisma/client";
import { compare } from "bcryptjs";
import { InvalidCredentialError } from "./errors/invalid-credential-error";

interface AuthenticateUseCaseRequest {
  email: string;
  password: string;
}

interface AuthenticateUseCaseResponse {
  user: User;
}

export class AuthenticateUseCase {
  constructor(private userRepository: UsersRepository) {}

  async execute({
    email,
    password,
  }: AuthenticateUseCaseRequest): Promise<AuthenticateUseCaseResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new InvalidCredentialError();
    }

    const doesntPasswordMatches = await compare(password, user.password_hash);

    if (!doesntPasswordMatches) {
      throw new InvalidCredentialError();
    }

    return { user };
  }
}
