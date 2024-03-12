import { Gym } from "@prisma/client";
import { GymRepository } from "@/repositories/gym-repository";

interface SearchGymUseCaseRequest {
  query: string; // pode buscar tanto no titulo quanto na descirption
  page: number;
}

interface SearchGymUseCaseResponse {
  gyms: Gym[];
}

export class SearchGymUseCase {
  constructor(private gymsRepository: GymRepository) {}

  async execute({
    query,
    page,
  }: SearchGymUseCaseRequest): Promise<SearchGymUseCaseResponse> {
    const gyms = await this.gymsRepository.searchMany(query, page);

    return { gyms };
  }
}
