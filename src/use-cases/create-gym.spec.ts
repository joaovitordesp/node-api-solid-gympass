import { CreateGymUseCase } from "./create-gym";
import { InMemoryGymsRepository } from "@/repositories/in-memory/in-memory-gyms-repository";
import { expect, describe, it, beforeEach } from "vitest";

let gymsRepository: InMemoryGymsRepository;
let sut: CreateGymUseCase;

describe("Gym Use Case", () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new CreateGymUseCase(gymsRepository);
  });
  it("should be able create gym", async () => {
    const { gym } = await sut.execute({
      title: "JS Gym",
      description: null,
      phone: null,
      latitude: -15.8053793,
      longitude: -48.1101396,
    });

    expect(gym.id).toEqual(expect.any(String));
  });
});
