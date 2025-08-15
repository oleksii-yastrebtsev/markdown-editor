import { Column, TextColumn, ImageColumn, Row } from "../../models";

export const CREATE_COLUMN = "CREATE_COLUMN";
export const UPDATE_TEXT_COLUMN = "UPDATE_TEXT_COLUMN";
export const UPDATE_IMAGE_COLUMN = "UPDATE_COLUMN";

export const createColumn = (rowId: Row["id"]) => {
  const columnId = crypto.randomUUID();
  return {
    type: CREATE_COLUMN,
    payload: { rowId, columnId },
  } as const;
};

export const updateTextColumn = (
  columnId: Column["id"],
  updates: Omit<TextColumn, "id" | "perentRowId" | "contentType">
) =>
  ({
    type: UPDATE_TEXT_COLUMN,
    payload: { columnId, updates },
  } as const);

export const updateImageColumn = (
  columnId: Column["id"],
  updates: Omit<ImageColumn, "id" | "perentRowId" | "contentType">
) =>
  ({
    type: UPDATE_IMAGE_COLUMN,
    payload: { columnId, updates },
  } as const);

export type ColumnActions = ReturnType<typeof createColumn | typeof updateImageColumn | typeof updateTextColumn>;
