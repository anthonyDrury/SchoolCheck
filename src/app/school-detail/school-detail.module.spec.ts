import { SchoolDetailModule } from './school-detail.module';

describe('SchoolDetailModule', () => {
  let schoolDetailModule: SchoolDetailModule;

  beforeEach(() => {
    schoolDetailModule = new SchoolDetailModule();
  });

  it('should create an instance', () => {
    expect(schoolDetailModule).toBeTruthy();
  });
});
