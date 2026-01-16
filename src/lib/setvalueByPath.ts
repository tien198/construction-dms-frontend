import type { Path } from "./type.recurtion";

export function setValueByPath<T extends object>(
  object: T,
  path: Path<T>,
  value: any
) {
  const pathArr = path.split(".");
  const cp: T = { ...object };
  let acc: any = cp;

  for (let i = 0; i < pathArr.length; i++) {
    // recursion to browse nested object. exam: "obj.something.something"
    const curKey = pathArr[i] as keyof typeof acc;
    if (acc == null) {
      const currPath = pathArr.slice(0, i + 1).join(".");
      throw new Error('path "' + currPath + '" is undedfined!');
    }

    const isLast = i === pathArr.length - 1;
    if (isLast) {
      acc[curKey] = value;
    } else {
      const curVal = acc[curKey];
      if (Array.isArray(curVal)) {
        acc[curKey] = [...curVal];
      } else {
        acc[curKey] = { ...curVal };
      }
      acc = acc[curKey];
    }
  }
  return cp;
}
