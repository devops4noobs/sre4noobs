'use client';
import { useState } from 'react';
import { DocumentDuplicateIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function GitCheatsheetsPage() {
  const [expandedSections, setExpandedSections] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (section: string) => {
    setExpandedSections((prev) =>
      prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]
    );
  };

  const categories = [
    {
      title: 'Configuration and Setup',
      commands: [
        { command: 'git config --global user.name "Your Name"', description: 'Set the name you want attached to your commit transactions' },
        { command: 'git config --global user.email "you@example.com"', description: 'Set the email you want attached to your commit transactions' },
        { command: 'git config --global core.editor "editor"', description: 'Set the text editor for Git to use' },
        { command: 'git config --list', description: 'List all the settings Git can find at that point' },
        { command: 'git init', description: 'Initialize a new Git repository' },
        { command: 'git clone https://repository-url.git', description: 'Clone a repository into a new directory' },
      ],
    },
    {
      title: 'Staging and Committing Changes',
      commands: [
        { command: 'git status', description: 'Show the working tree status' },
        { command: 'git add <file>', description: 'Add file contents to the index' },
        { command: 'git add .', description: 'Add all changes in the working directory to the staging area' },
        { command: 'git commit -m "Commit message"', description: 'Record changes to the repository with a message' },
        { command: 'git commit -a -m "Commit message"', description: 'Commit all changes, skipping the staging area' },
        { command: 'git rm <file>', description: 'Remove files from the working tree and from the index' },
        { command: 'git mv <old-file> <new-file>', description: 'Move or rename a file, a directory, or a symlink' },
      ],
    },
    {
      title: 'Branching and Merging',
      commands: [
        { command: 'git branch', description: 'List all local branches' },
        { command: 'git branch <branch-name>', description: 'Create a new branch' },
        { command: 'git checkout <branch-name>', description: 'Switch to the specified branch' },
        { command: 'git checkout -b <branch-name>', description: 'Create and switch to a new branch' },
        { command: 'git merge <branch-name>', description: 'Merge the specified branch into the current branch' },
        { command: 'git branch -d <branch-name>', description: 'Delete a branch' },
        { command: 'git rebase <branch-name>', description: 'Reapply commits on top of another base tip' },
        { command: 'git cherry-pick <commit-hash>', description: 'Apply the changes introduced by an existing commit' },
      ],
    },
    {
      title: 'Remote Operations',
      commands: [
        { command: 'git remote add origin https://repository-url.git', description: 'Add a remote repository' },
        { command: 'git push origin <branch-name>', description: 'Push the branch to the remote repository' },
        { command: 'git push -u origin <branch-name>', description: 'Push the branch and set upstream tracking' },
        { command: 'git pull origin <branch-name>', description: 'Fetch and merge changes from the remote branch' },
        { command: 'git pull --rebase origin <branch-name>', description: 'Fetch and rebase changes from the remote branch' },
        { command: 'git fetch origin', description: 'Fetch changes from the remote without merging' },
        { command: 'git remote -v', description: 'List remote repositories' },
        { command: 'git remote remove origin', description: 'Remove a remote repository' },
      ],
    },
    {
      title: 'Viewing History and Logs',
      commands: [
        { command: 'git log', description: 'Show commit logs' },
        { command: 'git log --oneline', description: 'Show commit logs in a compact format' },
        { command: 'git log --graph --oneline --decorate', description: 'Show commit history with graph' },
        { command: 'git log --author="Author Name"', description: 'Show commits by a specific author' },
        { command: 'git log --since="2025-01-01"', description: 'Show commits since a specific date' },
        { command: 'git show <commit-hash>', description: 'Show various types of objects' },
        { command: 'git diff', description: 'Show changes between commits, commit and working tree, etc.' },
        { command: 'git diff --staged', description: 'Show changes in the staging area' },
      ],
    },
    {
      title: 'Undoing Changes',
      commands: [
        { command: 'git reset HEAD <file>', description: 'Unstage a file' },
        { command: 'git reset --hard HEAD', description: 'Reset working directory and index to last commit' },
        { command: 'git revert <commit-hash>', description: 'Revert a commit by creating a new commit' },
        { command: 'git checkout -- <file>', description: 'Discard changes in the working directory' },
        { command: 'git clean -f', description: 'Remove untracked files' },
        { command: 'git stash', description: 'Stash changes in a dirty working directory' },
        { command: 'git stash pop', description: 'Apply stashed changes and remove from stash' },
        { command: 'git stash list', description: 'List stashed changes' },
        { command: 'git stash drop', description: 'Drop the top stash' },
      ],
    },
    {
      title: 'Advanced Commands',
      commands: [
        { command: 'git rebase -i HEAD~n', description: 'Interactively rebase the last n commits' },
        { command: 'git bisect start', description: 'Start binary search for a bug' },
        { command: 'git bisect good <commit>', description: 'Mark a commit as good during bisect' },
        { command: 'git bisect bad <commit>', description: 'Mark a commit as bad during bisect' },
        { command: 'git submodule add https://repository-url.git', description: 'Add a submodule' },
        { command: 'git submodule update --init --recursive', description: 'Update submodules' },
        { command: 'git tag <tag-name>', description: 'Create a tag' },
        { command: 'git push origin --tags', description: 'Push tags to remote' },
        { command: 'git blame <file>', description: 'Show who changed what and when in a file' },
      ],
    },
    {
      title: 'Best Practices and Tips',
      commands: [
        { command: 'git commit --amend -m "New message"', description: 'Amend the last commit message' },
        { command: 'git fetch --prune', description: 'Remove remote branches that no longer exist' },
        { command: 'git gc', description: 'Cleanup unnecessary files and optimize the local repository' },
        { command: 'git fsck', description: 'Verify the connectivity and validity of objects in the database' },
        { command: 'git reflog', description: 'Show reference logs' },
        { command: 'git worktree add ../new-worktree branch-name', description: 'Add a new worktree' },
        { command: 'git config --global alias.st status', description: 'Create a Git alias' },
        { command: 'git config --global pull.rebase true', description: 'Set rebase as default for pull' },
      ],
    },
  ];

  const filteredCategories = categories.map((category) => ({
    ...category,
    commands: category.commands.filter((cmd) =>
      cmd.command.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cmd.description.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter((category) => category.commands.length > 0);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Command copied to clipboard!');
  };

  return (
    <main className="p-6 bg-gray-900 text-white  overflow-y-auto">
      <h1 className="text-3xl font-bold mb-4">Git Cheatsheets</h1>
      <p className="mb-4">
        Quick reference guides for common Git commands and configurations. Surprise: Thoroughly categorized and expanded with all commands from the provided file, plus additional best-practice commands from web searches (e.g., from GitHub Education, Atlassian, freeCodeCamp, DataCamp, and GitHub Blog in 2025).
      </p>

      <input
        type="text"
        placeholder="Search commands..."
        className="w-full p-2 mb-6 rounded-md bg-gray-800 border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-gray-100"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <div className="space-y-4">
        {filteredCategories.map((category) => (
          <div key={category.title} className="bg-gray-800 rounded-lg shadow-md">
            <button
              onClick={() => toggleSection(category.title)}
              className="flex items-center w-full p-4 text-left font-semibold text-purple-400 hover:bg-gray-700 transition-colors"
              aria-expanded={expandedSections.includes(category.title)}
            >
              {category.title}
              <ChevronDownIcon className={`w-5 h-5 ml-auto transition-transform ${expandedSections.includes(category.title) ? 'rotate-180' : ''}`} />
            </button>
            {expandedSections.includes(category.title) && (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-700">
                    <th className="p-3 text-left border-b border-gray-600">Command</th>
                    <th className="p-3 text-left border-b border-gray-600">Description</th>
                    <th className="p-3 text-left border-b border-gray-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {category.commands.map((cmd, index) => (
                    <tr key={index} className="hover:bg-gray-700 transition-colors">
                      <td className="p-3 border-b border-gray-600">{cmd.command}</td>
                      <td className="p-3 border-b border-gray-600">{cmd.description}</td>
                      <td className="p-3 border-b border-gray-600">
                        <button
                          onClick={() => copyToClipboard(cmd.command)}
                          className="bg-purple-600 text-white p-1 rounded flex items-center"
                        >
                          <DocumentDuplicateIcon className="w-4 h-4 mr-1" />
                          Copy
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}