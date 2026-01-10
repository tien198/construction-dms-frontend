type Primitive =
  | string
  | number
  | boolean
  | bigint
  | symbol
  | null
  | undefined
  | Date;

export type Path<T> = {
  [K in keyof T & string]: T[K] extends Primitive
    ? K
    : T[K] extends Array<infer U>
    ? `${K}` | `${K}.${Path<U>}`
    : `${K}` | `${K}.${Path<T[K]>}`;
}[keyof T & string];