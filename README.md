# Make the AI Judge Laugh: Developer Excuses

One funny single-line excuse a developer gives when code breaks in production.

## The line

> The postmortem says root cause: me. Specifically the me from Friday at 6 p.m. who thought 'what could go wrong' was a deployment strategy.

## Run it

```sh
node main.ts
```

Writes the line to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`).
Gate: UTF-8 text, 1–200 characters, not only whitespace.

## Why it lands

The twist is the culprit: not the code, not the infra — past-me, the Friday 6 p.m. deployer who treated "what could go wrong" as a deployment strategy. Every developer recognises that person, because they have been that person.
