export type TopicStatus = 'Not Started' | 'In Progress' | 'Revised';

export interface Topic {
  id: string;
  title: string;
  status: TopicStatus;
}

export interface Subject {
  id: string;
  name: string;
  color: string;
  topics: Topic[];
}
