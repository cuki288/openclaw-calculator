# Multi-Agent System Configuration v5.3 Supreme

## Agent Model Mapping

| Agent | Model | Parameters | Role |
|-------|-------|------------|------|
| Controller | qwen3.5:latest | 9.7B | Orchestration, Routing |
| Planner | qwen3.5:27b | 27B | High-level Reasoning, Task Decomposition |
| Researcher | qwen3.5:latest | 9.7B | Information Gathering, API Analysis |
| Coder | qwen3-coder:30b | 30B | Code Implementation & Fixes |
| Executor | qwen3.5-a3b-gguf | 3B | Command Execution, Build/Testing |
| Reviewer | codestral:22b | 22B | Validation, Security, QA |
| Summarizer | qwen3.5:latest | 9.7B | Log Summarization, Results |

## System Operating Rules

1. **Context Hygiene**: Each agent must strictly adhere to their assigned context limits (4K~16K)
2. **Max Concurrency 2**: Schedule execution to maintain maximum 2 concurrent agents for resource protection
3. **Mandatory Review**: Reviewer must be invoked automatically after Coder or Executor completes any task to validate integrity

## Workflow

1. Controller receives and routes tasks
2. Planner decomposes tasks into sub-tasks
3. Appropriate agents execute based on task type
4. Reviewer validates all Coder/Executor work
5. Summarizer consolidates results
