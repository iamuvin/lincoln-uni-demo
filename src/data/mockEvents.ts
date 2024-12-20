interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
  courseId?: string;
  type: 'class' | 'exam' | 'assignment' | 'holiday';
}

export const mockEvents: CalendarEvent[] = [
  {
    id: '1',
    title: 'CS101 Lecture',
    start: new Date().toISOString(),
    end: new Date(new Date().setHours(new Date().getHours() + 2)).toISOString(),
    courseId: 'cs101',
    type: 'class'
  },
  {
    id: '2',
    title: 'Midterm Exam',
    start: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString(),
    end: new Date(new Date().setDate(new Date().getDate() + 7)).toISOString(),
    courseId: 'cs102',
    type: 'exam'
  },
  {
    id: '3',
    title: 'Spring Break',
    start: new Date(new Date().setDate(new Date().getDate() + 14)).toISOString(),
    end: new Date(new Date().setDate(new Date().getDate() + 21)).toISOString(),
    type: 'holiday'
  }
];