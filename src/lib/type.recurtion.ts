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
    : T[K] extends Array<any>
    ? `${K}`
    : `${K}` | `${K}.${Path<NonNullable<T[K]>>}`;
}[keyof T & string];
