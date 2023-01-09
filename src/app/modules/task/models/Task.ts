export interface Task {
  id?: string;
  title: string;
  description: string;
  isCompleted: boolean;
  type: string;
  createdTimestamp?: string;
  updatedTimestamp?: string;
  completedTimestamp?: string;
}
