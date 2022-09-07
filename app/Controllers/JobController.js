import { appState } from '../AppState.js';
import { Job } from '../Models/JobModel.js';

function _drawJobs() {
  let jobs = appState.jobs;
  let template = '';
  jobs.forEach((j) => (template += j.JobTemplate));
  document.getElementById('jobs').innerHTML = template;
}
export class JobController {
  constructor() {
    _drawJobs();
  }
}
