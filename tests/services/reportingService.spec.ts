import ReportingService from "../../src/services/reportingService";
import Report from "../../src/models/report";
import Task from "../../src/models/tasks/task";

describe('The reporting service', () => {
  const userId = 'some-user-id';

  it('should report that AddScreenplayToUser task has finished', async () => {
    const reportingService = new ReportingService();
    const task = Task.addScreenplayToUser;

    const report = {userId, task} as Report;

    reportingService.dispatch(report);
  });
});