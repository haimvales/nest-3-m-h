import { Injectable } from '@nestjs/common';
import { Shift } from './interfaces/shift.interface';
import { CreateShiftDto } from './dto/create-shift.dto';

@Injectable()
export class ShiftsService {
  private shifts: Shift[] = [
    {
      id: 1,
      location: 'שער ראשי',
      startTime: '08:00',
      endTime: '12:00',
    },
  ];

  getAll() {
    return this.shifts;
  }

  create(dto: CreateShiftDto) {
    const newShift: Shift = {
      id: this.shifts.length + 1,
      ...dto,
    };

    this.shifts.push(newShift);
    return newShift;
  }
}



