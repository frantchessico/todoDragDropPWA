export interface Board {
  id?: string;
  title?: string;
  priority?: number;
  author?: string;
  createdAt?: string;
  tasks?: Task[];
}

export interface Task {
  description?: string;
  label?: 'purple' | 'blue' | 'green' | 'yellow' | 'red' | 'gray' | 'orange' | 'coral';
}
