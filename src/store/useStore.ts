import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { v4 as uuidv4 } from 'uuid';
import { Subject, Topic } from '../types';

interface StudyState {
  subjects: Subject[];
  addSubject: (subject: Omit<Subject, 'id' | 'topics'>) => void;
  updateSubject: (id: string, updates: Partial<Omit<Subject, 'id' | 'topics'>>) => void;
  deleteSubject: (id: string) => void;
  addTopic: (subjectId: string, topic: Omit<Topic, 'id' | 'status'>) => void;
  updateTopic: (subjectId: string, topicId: string, updates: Partial<Omit<Topic, 'id'>>) => void;
  deleteTopic: (subjectId: string, topicId: string) => void;
}

export const useStore = create<StudyState>()(
  persist(
    (set) => ({
      subjects: [],
      addSubject: (subject) =>
        set((state) => ({
          subjects: [
            ...state.subjects,
            { ...subject, id: uuidv4(), topics: [] },
          ],
        })),
      updateSubject: (id, updates) =>
        set((state) => ({
          subjects: state.subjects.map((sub) =>
            sub.id === id ? { ...sub, ...updates } : sub
          ),
        })),
      deleteSubject: (id) =>
        set((state) => ({
          subjects: state.subjects.filter((sub) => sub.id !== id),
        })),
      addTopic: (subjectId, topic) =>
        set((state) => ({
          subjects: state.subjects.map((sub) =>
            sub.id === subjectId
              ? {
                  ...sub,
                  topics: [
                    ...sub.topics,
                    { ...topic, id: uuidv4(), status: 'Not Started' },
                  ],
                }
              : sub
          ),
        })),
      updateTopic: (subjectId, topicId, updates) =>
        set((state) => ({
          subjects: state.subjects.map((sub) =>
            sub.id === subjectId
              ? {
                  ...sub,
                  topics: sub.topics.map((t) =>
                    t.id === topicId ? { ...t, ...updates } : t
                  ),
                }
              : sub
          ),
        })),
      deleteTopic: (subjectId, topicId) =>
        set((state) => ({
          subjects: state.subjects.map((sub) =>
            sub.id === subjectId
              ? {
                  ...sub,
                  topics: sub.topics.filter((t) => t.id !== topicId),
                }
              : sub
          ),
        })),
    }),
    {
      name: 'studyscope-storage',
    }
  )
);
