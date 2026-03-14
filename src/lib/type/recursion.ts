type Primitive =
  | Array<any>
  | Date
  | string
  | number
  | boolean
  | symbol
  | null
  | undefined;

export type RecursivePath<T> = {
  [K in keyof T & string]: T[K] extends Primitive
    ? K
    : K | `${K}.${RecursivePath<NonNullable<T[K]>>}`;
}[keyof T & string];
