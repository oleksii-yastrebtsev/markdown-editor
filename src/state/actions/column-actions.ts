import { ColumnMetada, TextColumn, ImageColumn, Row, ContentType } from "../../models";

export const CREATE_COLUMN = "CREATE_COLUMN";
export const CHANGE_CONTENT_TYPE = "CHANGE_CONTENT_TYPE";
//
export const CREATE_TEXT_COLUMN = "CREATE_TEXT_COLUMN";
export const CREATE_IMAGE_COLUMN = "CREATE_IMAGE_COLUMN";
//
export const UPDATE_TEXT_COLUMN = "UPDATE_TEXT_COLUMN";
//
export const UPDATE_IMAGE_COLUMN = "UPDATE_IMAGE_COLUMN";
export const REMOVE_TEXT_COLUMN = "REMOVE_TEXT_COLUMN";
export const REMOVE_IMAGE_COLUMN = "REMOVE_IMAGE_COLUMN";

export const createColumn = (rowId: Row["id"]) => {
  const columnId = crypto.randomUUID();
  return {
    type: CREATE_COLUMN,
    payload: { rowId, columnId },
  } as const;
};

export const changeContentType = (columnId: ColumnMetada["id"], contentType: ContentType) => {
  return {
    type: CHANGE_CONTENT_TYPE,
    payload: { columnId, contentType },
  } as const;
};

export const updateTextColumn = (columnId: TextColumn["id"], updates: Omit<TextColumn, "id">) =>
  ({
    type: UPDATE_TEXT_COLUMN,
    payload: { columnId, updates },
  } as const);

export const updateImageColumn = (columnId: ImageColumn["id"], updates: Omit<ImageColumn, "id">) =>
  ({
    type: UPDATE_IMAGE_COLUMN,
    payload: { columnId, updates },
  } as const);

export const removeImageColumn = (columnId: ImageColumn["id"]) =>
  ({
    type: REMOVE_IMAGE_COLUMN,
    payload: columnId,
  } as const);

export const createTextColumn = (columnId: TextColumn["id"]) =>
  ({
    type: CREATE_TEXT_COLUMN,
    payload: columnId,
  } as const);

export const createImageColumn = (columnId: ImageColumn["id"]) =>
  ({
    type: CREATE_IMAGE_COLUMN,
    payload: columnId,
  } as const);

export const removeTextColumn = (columnId: TextColumn["id"]) =>
  ({
    type: REMOVE_TEXT_COLUMN,
    payload: columnId,
  } as const);

export type ColumnActions = ReturnType<
  | typeof createColumn
  | typeof changeContentType
  //create
  | typeof createImageColumn
  | typeof createTextColumn
  // update
  | typeof updateImageColumn
  | typeof updateTextColumn
  // remoove
  | typeof removeImageColumn
  | typeof removeTextColumn
>;
