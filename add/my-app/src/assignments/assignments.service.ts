import { Injectable } from '@nestjs/common';
import { Assignment } from './interfaces/assignment.interface';

@Injectable()
export class AssignmentsService {
  private assignments: Assignment[] = [
    {
      userId: 1,
      shiftId: 1,
    },
  ];

  getAll() {
    return this.assignments;
  }
}



