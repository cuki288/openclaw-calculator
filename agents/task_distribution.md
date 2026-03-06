# Task Distribution Logic

## Controller Responsibilities
- Receives user requests
- Calls Planner for complex tasks
- Manages agent queue (max 2 concurrent)
- Routes completed tasks to next stage

## Planner Responsibilities
- Breaks down user requirements
- Creates task sub-steps
- Selects appropriate agent type
- Manages task dependencies

## Researcher Tasks
- API documentation fetching
- External service investigation
- Data gathering for requirements

## Coder Tasks
- Code generation
- Bug fixes
- Implementation
- Code refactoring

## Executor Tasks
- Shell command execution
- Build processes
- Testing and verification
- Deployment scripts

## Reviewer Triggers
- Automatically invoked when:
  - Coder completes task
  - Executor completes task
- Validates:
  - Code syntax and logic
  - Security concerns
  - Build success
  - Test coverage

## Summarizer Tasks
- Collapses session logs
- Generates final reports
- Documents decisions
- Archives completed work
