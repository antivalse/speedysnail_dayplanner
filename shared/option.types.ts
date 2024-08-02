/**
 * Option types
 */

export interface Option {
  id: number;
  title: string;
}

export type NewOption = Omit<Option, "id, active, completed">;
