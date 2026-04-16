---
description: Automatically commit changes to git with conventional commit messages
auto_execution_mode: 3
---

# Auto Commit Workflow

This workflow automatically commits your changes to git with intelligent conventional commit message analysis.

## When to Use

- After making significant code changes
- When you want to quickly save your progress
- Before running builds or deployments
- At the end of a coding session

## Steps

1. **Stage and commit changes with auto-generated message**

   ```bash
   # Add all changes and commit with intelligent message
   git add .
   git commit -m "feat: implement code splitting and bundle optimization"
   ```

2. **Or use the git-commit skill for intelligent analysis**
   - The skill will analyze your changes and generate appropriate conventional commit messages
   - It will automatically stage relevant files in logical groups
   - Supports interactive mode where you can override type/scope/description

3. **Push to remote (optional)**
   ```bash
   git push origin main
   ```

## Auto-Generated Message Types

- `feat:` - New features or functionality
- `fix:` - Bug fixes and error resolution
- `refactor:` - Code restructuring without functional changes
- `perf:` - Performance improvements
- `build:` - Build system and dependency changes
- `chore:` - Maintenance tasks and updates

## Best Practices

- Run this after completing a logical unit of work
- Review the generated commit message before pushing
- Use descriptive branch names for better context
- Consider enabling auto-push for trusted environments

## Integration with Vercel

Since you're using Vercel, commits will automatically trigger deployments when pushed to your main branch.
