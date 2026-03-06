# HEARTBEAT.md - The Autonomous Loop Driver

When read, execute the following protocol (The "SDE Loop"):

1.  **Check Status:** Read `docs/PROJECT_STATUS.md` and `docs/BACKLOG.md`.
2.  **Determine Action:**
    - If there is a high-priority task, **execute it**.
    - If all high-priority tasks are done, **find the next task**.
    - If the backlog is empty, **perform maintenance (cleanup, refactor)**.
3.  **Self-Correction:** If a previous build failed, **prioritize fixing it**.
4.  **Log:** Record actions in `docs/LOG.md`.

## Current State: Active Development
- Mode: **Autonomous** (Gemini 3 Pro Optimized)
- Goal: Complete Backlog Items autonomously.
