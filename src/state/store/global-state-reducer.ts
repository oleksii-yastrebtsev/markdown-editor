import { Column, ContentType, GlobalState, ImageColumn, NodeType, Row, TextColumn } from "../../models";
import {
  ActionType,
  CREATE_COLUMN,
  CREATE_ROW,
  SELECT_NODE,
  UPDATE_TEXT_COLUMN,
  UPDATE_IMAGE_COLUMN,
  PERSIT_GLOBAL_STATE,
} from "../actions";

export const globalStateReducer = (state: GlobalState, action: ActionType): GlobalState => {
  switch (action.type) {
    case CREATE_COLUMN: {
      const { rowId, columnId } = action.payload;
      const rowToUpdate = state.rows[rowId];

      const newColumn: Column = {
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

    case UPDATE_IMAGE_COLUMN: {
      const { columnId, updates } = action.payload;
      const { perentRowId } = state.columns[columnId];

      const updatedColumn: ImageColumn = {
        id: columnId,
        perentRowId,
        contentType: ContentType.IMAGE,
        ...updates,
      };

      return {
        ...state,
        columns: {
          ...state.columns,
          [columnId]: updatedColumn,
        },
        selectedNode: {
          selectedNodeId: columnId,
          selectedNodeType: NodeType.COLUMN,
          perentRowId,
        },
      };
    }
    case UPDATE_TEXT_COLUMN: {
      const { columnId, updates } = action.payload;
      const { perentRowId } = state.columns[columnId];

      const updatedColumn: TextColumn = {
        id: columnId,
        perentRowId,
        contentType: ContentType.TEXT,
        ...updates,
      };

      return {
        ...state,
        columns: {
          ...state.columns,
          [columnId]: updatedColumn,
        },
        selectedNode: {
          selectedNodeId: columnId,
          selectedNodeType: NodeType.COLUMN,
          perentRowId,
        },
      };
    }

    case SELECT_NODE: {
      return {
        ...state,
        selectedNode: action.payload,
      };
    }

    case PERSIT_GLOBAL_STATE: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
};
