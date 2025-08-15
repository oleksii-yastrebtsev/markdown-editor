export type Row = {
  id: string;
  columnIds: Array<Column["id"]>;
};

export enum ContentType {
  TEXT = "text",
  IMAGE = "image",
}

export enum Alignment {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "start",
}

type ColumnBase = {
  id: string;
  perentRowId: Row["id"];
  contentType?: ContentType;
};

export type ImageColumn = ColumnBase & {
  contentType: typeof ContentType.IMAGE;
  imageUrl: string;
};

export type TextColumn = ColumnBase & {
  contentType: typeof ContentType.TEXT;
  text: string;
  alignment: Alignment;
};

export type Column = ColumnBase | TextColumn | ImageColumn;

export enum NodeType {
  ROW = "Row",
  COLUMN = "Column",
  STAGE = "Stage",
}

export type SelectedRow = {
  selectedNodeType: NodeType.ROW;
  selectedNodeId: Row["id"];
};

export type SelectedColumn = {
  selectedNodeType: NodeType.COLUMN;
  selectedNodeId: Column["id"];
} & Pick<Column, "perentRowId">;

export type SelectedStage = {
  selectedNodeType: NodeType.STAGE;
  selectedNodeId: undefined;
};

export type SelectedNode = SelectedRow | SelectedColumn | SelectedStage;

export type GlobalState = {
  rowsIds: Array<Row["id"]>;
  rows: Record<Row["id"], Row>;
  columns: Record<Column["id"], Column>;
  selectedNode: SelectedNode;
};
