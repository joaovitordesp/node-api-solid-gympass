import { Gym } from "@prisma/client";
import { GymRepository } from "@/repositories/gym-repository";

interface FetchNearbyGymUseCaseRequest {
  userLatitude: number; // pode buscar tanto no titulo quanto na descirption
  userLongitude: number;
}

interface FetchNearbyGymUseCaseResponse {
  gyms: Gym[];
}

export class FetchNearbyGymUseCase {
  constructor(private gymsRepository: GymRepository) {}

  async execute({
    userLatitude,
    userLongitude,
  }: FetchNearbyGymUseCaseRequest): Promise<FetchNearbyGymUseCaseResponse> {
    const gyms = await this.gymsRepository.findManyNearby({
      latitude: userLatitude,
      longitude: userLongitude,
    });

    return { gyms };
  }
}
