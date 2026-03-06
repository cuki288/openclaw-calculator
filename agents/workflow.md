# ADP v4.0 Agent Workflow v5.3

## Session Flow

```
[Controller] → [Planner] → [Coder/Executor] → [Reviewer] → [Summarizer]
```

## Parallelization Rules

- Maximum 2 agents running concurrently
- Controller + Planner can run simultaneously (orchestration)
- Only ONE of {Coder, Executor, Researcher} active at any time
- Reviewer waits until Coder/Executor completes

## Mandatory Review Process

```
Task Submitted
    ↓
[Controller] Routes to Planner
    ↓
[Planner] Decomposes task
    ↓
[Coder/Executor/Researcher] Executes
    ↓ (Completion Event)
[Reviewer] Validates integrity
    ↓
[Controller] Re-routes next task
    ↓
[Summarizer] Consolidates results
```

## Context Management

- All agents use context hygiene to prevent token overflow
- Controller: 4K for routing decisions
- Planner: 8K for task decomposition  
- Coder: 16K for implementation details
- Reviewer: 8K for validation
- Others: 4K for focused tasks
