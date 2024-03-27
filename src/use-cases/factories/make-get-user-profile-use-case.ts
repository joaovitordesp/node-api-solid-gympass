import { GetUserProfileUseCase } from "../get-user-profile";
import { PrismaUsersRepository } from "@/repositories/prisma/prisma-users-repository";

export function MakeGetUserProfileUseCase() {
  const userRepository = new PrismaUsersRepository();
  const getUserProfileUseCase = new GetUserProfileUseCase(userRepository);

  return getUserProfileUseCase;
}

// Factories são criadas para automação de caso de uso que pode tem multiplas dependencias
