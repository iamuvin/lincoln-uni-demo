interface Payment {
  id: string;
  amount: number;
  date: string;
  status: 'success' | 'failed';
  description?: string;
}

interface ExamResit {
  id: string;
  courseName: string;
  fee: number;
  date: string;
}

interface SportsClub {
  id: string;
  name: string;
  fee: number;
  schedule: string;
}

export const mockPayments: Payment[] = [
  {
    id: '1',
    amount: 75000,
    date: '2024-02-15',
    status: 'success',
    description: 'First installment'
  },
  {
    id: '2',
    amount: 75000,
    date: '2024-01-15',
    status: 'success',
    description: 'Second installment'
  },
  {
    id: '3',
    amount: 75000,
    date: '2023-12-15',
    status: 'success',
    description: 'Third installment'
  },
  {
    id: '4',
    amount: 25000,
    date: '2023-11-15',
    status: 'failed',
    description: 'Failed transaction'
  }
];

export const mockExamResits: ExamResit[] = [
  {
    id: '1',
    courseName: 'Mathematics 101',
    fee: 15000,
    date: 'March 20, 2024'
  },
  {
    id: '2',
    courseName: 'Computer Science 202',
    fee: 15000,
    date: 'March 25, 2024'
  }
];

export const mockSportsClubs: SportsClub[] = [
  {
    id: '1',
    name: 'Basketball Club',
    fee: 7500,
    schedule: 'Mon, Wed 4:00 PM'
  },
  {
    id: '2',
    name: 'Swimming Club',
    fee: 10000,
    schedule: 'Tue, Thu 5:00 PM'
  },
  {
    id: '3',
    name: 'Tennis Club',
    fee: 8500,
    schedule: 'Fri 3:00 PM'
  }
];