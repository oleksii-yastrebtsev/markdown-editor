export const CREATE_ROW = "CREATE_ROW";

export const createRow = () => {
  const id = crypto.randomUUID();
  return {
    type: CREATE_ROW,
    payload: id,
  } as const;
};

export type RowActions = ReturnType<typeof createRow>;
