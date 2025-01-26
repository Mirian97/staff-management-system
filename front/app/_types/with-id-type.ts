export type EntityId = {
  id: number;
};

export type EntityWithId<T> = T & EntityId;
