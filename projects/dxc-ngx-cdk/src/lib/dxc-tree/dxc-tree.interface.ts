export interface TreeNode {
  name: string;
  text: string;
  lastName: string;
  ischild: string;
  child_name: string;
  code: string;
  id: number;
  level: string;
  abbreviation: string;
  children: Array<TreeNode>;
  icon: string;
  state: NodeState;
}

interface NodeState {
  opened: boolean;
  disabled: boolean;
}

export interface CheckboxProp {
  /**
   * three_state: to avoid that fact that checking a node also check others.
   */
  three_state: boolean;
   /**
   * whole_node: to avoid checking the box just clicking the node.
   */
  whole_node: boolean;
   /**
   * tie_selection: for checking without selecting and selecting without checking.
   */
  tie_selection: boolean;
}

enum Action {
  SELECTED,
  CHILDEXPAND
}

