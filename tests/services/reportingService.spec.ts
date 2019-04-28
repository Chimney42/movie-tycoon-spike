import ReportingService from "../../src/services/reportingService";
import TaskName from "../../src/models/tasks/name";
import BaseTask from "../../src/models/tasks/baseTask";

describe('The reporting service', () => {
  const userId = 'some-user-id';

  it('should report that AddScreenplayToUser task has finished', async () => {
    const reportingService = new ReportingService();
    const task = TaskName.addScreenplayToUser;

    const report = {userId, name: task} as BaseTask;

    reportingService.dispatch(report);
  });
});