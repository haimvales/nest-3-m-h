import { AssignmentsMiddleware } from './assignments.middleware';

describe('AssignmentsMiddleware', () => {
  it('should be defined', () => {
    expect(new AssignmentsMiddleware()).toBeDefined();
  });
});
