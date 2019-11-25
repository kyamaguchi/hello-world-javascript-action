# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## References

https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-a-javascript-action#commit-and-push-your-action-to-github

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.

## Outputs

### `time`

The time we greeted you.

## Example usage

uses: actions/hello-world-javascript-action@v1
with:
  who-to-greet: 'Mona the Octocat'
