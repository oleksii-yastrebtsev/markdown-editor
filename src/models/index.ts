export type Row = {
  id: string;
  columnIds: Array<ColumnMetada["id"]>;
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

export type ColumnMetada = {
  id: string;
  perentRowId: Row["id"];
  contentType?: ContentType;
};

export type ImageColumn = Pick<ColumnMetada, "id"> & {
  imageUrl: string;
};

export type TextColumn = Pick<ColumnMetada, "id"> & {
  text: string;
  alignment: Alignment;
};

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
  selectedNodeId: ColumnMetada["id"];
} & Pick<ColumnMetada, "perentRowId">;

export type SelectedStage = {
  selectedNodeType: NodeType.STAGE;
  selectedNodeId: undefined;
};

export type SelectedNode = SelectedRow | SelectedColumn | SelectedStage;

export type GlobalState = {
  rowsIds: Array<Row["id"]>;
  rows: Record<Row["id"], Row>;
  columns: Record<ColumnMetada["id"], ColumnMetada>;
  textColumns: Record<TextColumn["id"], TextColumn>;
  imageColumns: Record<ImageColumn["id"], ImageColumn>;
  selectedNode: SelectedNode;
};
