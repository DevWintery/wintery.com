import {
  Jyantama3Response,
  SolvedacResponse,
  fetchJyantama3,
  fetchJyantama4,
  fetchSolvedac,
} from "./loaders";
import { BaekjoonResponse, fetchBaekjoon } from "./loaders/baekjoon";

const gameLoaders = [fetchJyantama3, fetchJyantama4] as const;

type TransformLoader<Loaders extends readonly [...any[]]> = {
  [K in keyof Loaders]: Loaders[K] extends () => Promise<infer T>
    ? T | null
    : never;
};

type LoadersResult = TransformLoader<typeof gameLoaders>;

export interface GameDynamicProfile {
  jyantama3: Jyantama3Response | null;
  jyantama4: Jyantama3Response | null;
}

export const loadGameDynamicProfile = async (): Promise<GameDynamicProfile> => {
  const loaded = await Promise.all(
    gameLoaders.map((loader) => loader().catch((e) => null))
  );
  const [jyantama3, jyantama4] = loaded as unknown as LoadersResult;

  return {
    jyantama3,
    jyantama4,
  };
};
