# Project Context

This file serves as a persistent memory bank for the AI assistant working on this repository.

## Project: IndiBiotek

### Overview
This project contains the Markdown documentation and specifications for the IndiBiotek project, organized within the `Doc's` directory.

### AI Assistant Workflow Rules
- Every time a change is made to the repository, the AI must update the following files before pushing:
  1. `log.md` - Append a summary of the changes made, along with the date and time.
  2. `Context.md` - Update any new architectural decisions, rules, or state changes.
  3. `README.md` - Ensure the project overview and structure remain accurate.
- After updating these files, the AI must commit and push the changes to `https://github.com/bhawenmaroo/INDI-MD.git`.

### Directory Structure
- `/Doc's/` - Contains various `.md` documentation files (PRD, Design System, Tech Spec, etc.).
- `README.md` - Main entry point.
- `Context.md` - AI context rules (this file).
- `log.md` - AI action history.
