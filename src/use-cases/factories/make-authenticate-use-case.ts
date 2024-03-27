import { AuthenticateUseCase } from "./../authenticate";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";

export function MakeAuthenticateUseCase() {
  const userRepository = new PrismaUsersRepository();
  const authenticateUseCase = new AuthenticateUseCase(userRepository);

  return authenticateUseCase;
}

// Factories são criadas para automação de caso de uso que pode tem multiplas dependencias
