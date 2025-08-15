import { ColumnActions } from "./column-actions";
import { PersistActions } from "./persist-actions";
import { RowActions } from "./row-actions";
import { SelectActions } from "./select-actions";

export type ActionType = ColumnActions | RowActions | SelectActions | PersistActions;
