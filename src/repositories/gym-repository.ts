import { Gym, Prisma } from "@prisma/client";

export interface FetchNearbyParams {
  latitude: number;
  longitude: number;
}

export interface GymRepository {
  findById(id: string): Promise<Gym | null>;
  searchMany(query: string, page: number): Promise<Gym[]>;
  create(data: Prisma.GymCreateInput): Promise<Gym>;
  findManyNearby(params: FetchNearbyParams): Promise<Gym[]>;
}
