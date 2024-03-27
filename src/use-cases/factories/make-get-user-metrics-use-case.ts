import { GetUserMetricsUseCase } from "../get-user-metrics";
import { PrismaCheckInsReposity } from "@/repositories/prisma/prisma-check-ins-repository";

export function MakeGetUserMetricsUseCase() {
  const checkinsRepository = new PrismaCheckInsReposity();
  const getUserMetricsUseCase = new GetUserMetricsUseCase(checkinsRepository);

  return getUserMetricsUseCase;
}

// Factories são criadas para automação de caso de uso que pode tem multiplas dependencias
