import { PrismaCheckInsReposity } from "@/repositories/prisma/prisma-check-ins-repository";
import { ValidateCheckInUseCase } from "../validate-check-in";

export function makeValidateCheckInUseCase() {
  const checkInsRepository = new PrismaCheckInsReposity();
  const useCase = new ValidateCheckInUseCase(checkInsRepository);

  return useCase;
}
