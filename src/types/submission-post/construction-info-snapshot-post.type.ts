import type { Optional } from "@/lib/type/optional.type";
import type { ConstructionInfoSnapshot } from "@/types/domain";

export type ConstructionInfoSnapshotPost = Optional<
  ConstructionInfoSnapshot,
  "id"
>;
