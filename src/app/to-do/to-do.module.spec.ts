import { ToDoModule } from './to-do.module';

describe('ToDoModule', () => {
  let toDoModule: ToDoModule;

  beforeEach(() => {
    toDoModule = new ToDoModule();
  });

  it('should create an instance', () => {
    expect(toDoModule).toBeTruthy();
  });
});
