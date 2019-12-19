const core = require('@actions/core');
const github = require('@actions/github');

const exec = require('@actions/exec');

try {
  // `who-to-greet` input defined in action metadata file
  const nameToGreet = core.getInput('who-to-greet');
  console.log(`Hello ${nameToGreet}!`);
  const time = (new Date()).toTimeString();
  core.setOutput("time", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  // console.log(`The event payload: ${payload}`);

  console.log(`Commands from custom action`);
  exec.exec('pwd');
  exec.exec('ls -al');
  exec.exec('ls -al vendor');
  exec.exec('which ruby');
  exec.exec('ruby -v');
} catch (error) {
  core.setFailed(error.message);
}
