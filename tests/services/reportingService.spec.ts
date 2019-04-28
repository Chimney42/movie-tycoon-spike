import ReportingService from "../../src/services/reportingService";
import TaskName from "../../src/tasks/name";
import BaseTask from "../../src/tasks/base";

describe('The reporting service', () => {
  const userId = 'some-user-id';

  it('should report that AddScreenplayToUser task has finished', async () => {
    const reportingService = new ReportingService();
    const task = TaskName.addScreenplayToUser;

    const report = {userId, name: task} as BaseTask;

    reportingService.dispatch(report);
  });
});