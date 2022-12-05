export interface Action {
  type: String,
  payload?: any //charge utile
}

type ActionType = "NEW_TODO" | "LOAD_TODO" | "DELETE_TODO";
