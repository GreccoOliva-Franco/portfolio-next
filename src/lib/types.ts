export type ArrayItemType<T> = T extends Array<infer K> ? K : never;
