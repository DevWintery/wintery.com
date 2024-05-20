import {
  SolvedacResponse,
  fetchSolvedac,
} from "./loaders";
import { BaekjoonResponse, fetchBaekjoon } from "./loaders/baekjoon";

const loaders = [
  fetchBaekjoon,
  fetchSolvedac,
] as const;

type TransformLoader<Loaders extends readonly [...any[]]> = {
  [K in keyof Loaders]: Loaders[K] extends () => Promise<infer T>
    ? T | null
    : never;
};

type LoadersResult = TransformLoader<typeof loaders>;

export interface DynamicProfile {
  baekjoon: BaekjoonResponse | null;
  solvedac: SolvedacResponse | null;
}

export const loadDynamicProfile = async (): Promise<DynamicProfile> => {
  const loaded = await Promise.all(
    loaders.map((loader) => loader().catch((e) => null))
  );
  const [baekjoon, solvedac] =
    loaded as unknown as LoadersResult;

  return {
    baekjoon,
    solvedac,
  };
};
