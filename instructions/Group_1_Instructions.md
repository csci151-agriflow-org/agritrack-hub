# CSci 151 - Practical Exam 1: Git & GitHub Workflow

## Group 1: AgriTrack Hub

**Duration:** 3 hours  
**Application:** AgriTrack Hub - Farm Crop Management System  
**GitHub Organization:** `csci151-agriflow-org`  
**Repository Name:** `agritrack-hub`

---

## Team Formation and Role Assignment

Your team consists of the following members:

| Full Name             | GitHub Username   | Assigned Atomic Task         |
| --------------------- | ----------------- | ---------------------------- |
| Abenoja, Jaaseia Gian | @jaaseiadev       | Crop Record Management       |
| Balajadia, Ericson    | @ericsonbalajadia | Edit Crop Details            |
| Montera, Mhac Alester | @mteraaa          | Delete Crop Records          |
| Nocerale, Angel       | @NoSeeReally      | Crop List Display            |
| Paloma, Nexus         | @NexusfPaloma     | Growth Stage Indicators      |
| Sinday, Ruel Angelo   | @RASinday         | Filter and Status Management |

### Team Leader Selection and Responsibilities

**Team Leader:** Abenoja, Jaaseia Gian | @jaaseiadev (Select one team member to lead)

The team leader is responsible for:

- Coordinating task delegation among team members, ensuring each member has an atomic task
- Facilitating communication between team members and mentors
- Ensuring the team follows the Git and GitHub workflow
- Coordinating the merge conflict resolution efforts
- Ensuring README.md documentation is comprehensive and accurate
- Verifying submission checklist completion

### Team Member Responsibilities

All team members are responsible for:

- Implementing their assigned atomic task independently
- Creating feature branches and making atomic commits
- Creating and reviewing pull requests with team members and mentors
- Contributing to conflict resolution when necessary
- Documenting their work in the README.md file
- Following the Git workflow and branching strategy

---

## Your Application: AgriTrack Hub

Build a farm crop management application with the following **core features**:

### Required Features:

1. **Crop Record Management** - Create new crop records with crop name, field location, and growth stage (Seedling/Growing/Mature)
2. **Crop List Display** - Show all crops in an organized list with key information
3. **Filter and Status Management** - Toggle between viewing active crops, harvested crops, or all crops; Mark crops as harvested or currently growing
4. **Edit Crop Details** - Modify crop details (name, field location, growth stage, notes)
5. **Delete Crop Records** - Remove crop records with confirmation prompt
6. **Growth Stage Indicators** - Visual indicators (colors/badges) for different growth stages

### Optional Features (if time permits):

- Sort crops by planting date or growth stage
- Search crops by name or field location
- Persist crop data to localStorage
- Crop statistics (total crops, harvested, active)
- Expected harvest date functionality
- Crop type categorization (vegetables, grains, fruits)

---

## Technical Requirements

- **Framework:** React (Vite or Create React App) - mandatory
- **Language:** TypeScript - mandatory
- **Styling:** Tailwind CSS - mandatory
- **State Management:** React Hooks or your choice of state management tools
- Application must be **functional and runnable**

---

## GitHub Setup Instructions

### Step 1: Create Organization

1. One team member creates a GitHub Organization named: **`csci151-agriflow-org`**
2. Invite all team members to the organization
3. Invite professors: **`infinityweaver`** and **`KaelNierras`**

### Step 2: Create Repository

1. Create a **PUBLIC** repository named: **`agritrack-hub`**
2. Initialize with a README.md
3. All team members clone the repository

### Step 3: Setup Branching Strategy

Create a `develop` branch as the main integration branch for all features, separate from the `main` production branch.

---

## Git Workflow Requirements ⚠️ CRITICAL - Main Evaluation Focus

### Branch Strategy (REQUIRED)

- `main` - Protected branch for production-ready code only
- `develop` - Integration branch for all features and Pull Requests
- Feature branches - Individual branches for each feature implementation
- Bug fix branches - For addressing any critical issues (if needed)

### Minimum Git Activities Required:

- ✅ At least **6 feature branches** (one per major feature)
- ✅ At least **18 atomic commits** total across all members (minimum 3 per member)
- ✅ At least **6 pull requests** with descriptive purposes
- ✅ At least **2 PRs must have review comments** from team members
- ✅ At least **1 merge conflict** resolved and documented in README
- ✅ All commits should convey meaningful change descriptions

### Pull Request Workflow:

1. Create a feature branch from the `develop` branch
2. Implement your feature with atomic commits following best practices
3. Push your feature branch to GitHub
4. Create a Pull Request with a description following the PR template
5. Request reviews from your mentors, co-mentors, or team leader
6. Address feedback and discussions from reviewers
7. Merge the PR after approval
8. Delete the feature branch after successful merge

### Pull Request Template:

When creating a PR, use the following template in the description:

```markdown
## Description

Briefly describe the feature or changes implemented in this PR.

## Related Issue

Link to any related issues (if applicable).

## Type of Change

- [ ] New feature
- [ ] Bug fix
- [ ] Refactoring

## How to Test

Provide instructions on how to test the changes.

## Checklist

- [ ] Code follows project conventions
- [ ] Self-review completed
- [ ] No new warnings or errors introduced
- [ ] Related documentation updated
```

**Note:** Reviewers should be assigned from your team's mentors, co-mentors, or team leader.

---

## README.md Requirements

Your README must include:

- ✅ Project title and description
- ✅ Team members table with assigned atomic tasks
- ✅ Features implemented (checklist)
- ✅ Technology stack
- ✅ Setup/installation instructions
- ✅ Git workflow and branching strategy used
- ✅ Merge conflict resolution documentation (describe what happened and how it was resolved)
- ✅ Individual contributions summary per team member

---

## Evaluation Criteria

You will be graded on:

- **Individual (50%):** Your personal Git contributions, commits, PRs, code
- **Team (50%):** Overall workflow, branching strategy, collaboration

**Focus areas:**

- Meaningful commit messages and descriptions
- Atomic commits (one logical change per commit)
- Proper branching strategy
- Pull request workflow with reviews
- Merge conflict resolution
- Working application

---

## Submission Checklist

Before the deadline, verify:

- [x] Organization `csci151-agriflow-org` created
- [x] Repository `agritrack-hub` is PUBLIC
- [x] Professors invited to organization
- [x] All team members listed in README with full names
- [x] At least **6 feature branches** created
- [x] At least **18 commits** made (minimum 3 per member)
- [x] At least **6 pull requests** created
- [x] At least **2 PRs have review comments**
- [ ] README.md complete with all sections
- [ ] Application runs without critical errors
- [ ] `develop` merged into `main`

---

## Important Notes

- **AI tools are allowed** (ChatGPT, GitHub Copilot, etc.)
- **Collaboration within your group is required**
- **Collaboration between groups is prohibited**
- All team members must contribute code via Git
- Focus on Git workflow quality over application perfection
- Document everything in your README

---

**Good luck, Group 1! Show us your Git mastery! 🚀**
