import { Alignment, ColumnMetada, GlobalState, ImageColumn, NodeType, Row, TextColumn } from "../../models";
import {
  ActionType,
  CREATE_COLUMN,
  CREATE_ROW,
  SELECT_NODE,
  UPDATE_TEXT_COLUMN,
  UPDATE_IMAGE_COLUMN,
  PERSIT_GLOBAL_STATE,
  CHANGE_CONTENT_TYPE,
  REMOVE_IMAGE_COLUMN,
  REMOVE_TEXT_COLUMN,
  CREATE_IMAGE_COLUMN,
  CREATE_TEXT_COLUMN,
} from "../actions";

export const globalStateReducer = (state: GlobalState, action: ActionType): GlobalState => {
  switch (action.type) {
    case CREATE_ROW: {
      const newRowId = action.payload;
      const newRow: Row = {
        id: newRowId,
        columnIds: [],
      };

      return {
        ...state,
        rowsIds: [...state.rowsIds, newRowId],
        rows: {
          ...state.rows,
          [newRowId]: newRow,
        },
        selectedNode: {
          selectedNodeId: newRowId,
          selectedNodeType: NodeType.ROW,
          ...newRow,
        },
      };
    }

    case CREATE_COLUMN: {
      const { rowId, columnId } = action.payload;
      const rowToUpdate = state.rows[rowId];

      const newColumn: ColumnMetada = {
        id: columnId,
        perentRowId: rowId,
      };

      return {
        ...state,
        rows: {
          ...state.rows,
          [rowId]: {
            ...rowToUpdate,
            columnIds: [...rowToUpdate.columnIds, columnId],
          },
        },
        columns: {
          ...state.columns,
          [columnId]: newColumn,
        },
        selectedNode: {
          selectedNodeId: columnId,
          selectedNodeType: NodeType.COLUMN,
          ...newColumn,
        },
      };
    }

    case CHANGE_CONTENT_TYPE: {
      const { columnId, contentType } = action.payload;
      const columnnToChange = state.columns[columnId];

      return {
        ...state,
        columns: {
          ...state.columns,
          [columnId]: {
            ...columnnToChange,
            contentType,
          },
        },
      };
    }

    case UPDATE_IMAGE_COLUMN: {
      const { columnId, updates } = action.payload;
      const columnBeforeUpdate = state.imageColumns[columnId];

      const columnAfterUpdate: ImageColumn = {
        ...columnBeforeUpdate,
        ...updates,
      };

      return {
        ...state,
        imageColumns: {
          ...state.imageColumns,
          [columnId]: columnAfterUpdate,
        },
      };
    }

    case UPDATE_TEXT_COLUMN: {
      const { columnId, updates } = action.payload;
      const columnBeforeUpdate = state.textColumns[columnId];

      const columnAfterUpdate: TextColumn = {
        ...columnBeforeUpdate,
        ...updates,
      };

      return {
        ...state,
        textColumns: {
          ...state.textColumns,
          [columnId]: columnAfterUpdate,
        },
      };
    }

    case SELECT_NODE: {
      return {
        ...state,
        selectedNode: action.payload,
      };
    }

    case REMOVE_IMAGE_COLUMN: {
      const idToRemove = action.payload;

      const { [idToRemove]: _removedColumn, ...rest } = state.imageColumns;

      return {
        ...state,
        imageColumns: rest,
      };
    }

    case REMOVE_TEXT_COLUMN: {
      const idToRemove = action.payload;
      const { [idToRemove]: _removedColumn, ...rest } = state.textColumns;

      return {
        ...state,
        textColumns: rest,
      };
    }
    case CREATE_IMAGE_COLUMN: {
      const id = action.payload;

      const newImageColumn: ImageColumn = {
        id,
        imageUrl: "",
      };

      return {
        ...state,
        imageColumns: { ...state.imageColumns, [id]: newImageColumn },
      };
    }

    case CREATE_TEXT_COLUMN: {
      const id = action.payload;

      const newTextColumn: TextColumn = {
        id,
        text: "",
        alignment: Alignment.LEFT,
      };

      return {
        ...state,
        textColumns: { ...state.textColumns, [id]: newTextColumn },
      };
    }

    case PERSIT_GLOBAL_STATE: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
};
