REM Run this after exiting the vim editor
cd "c:\Users\HP\DeshDarshan"

REM Check if rebase completed
git status

REM If rebase is still in progress, continue it
git rebase --continue

REM If there are still issues, force push
git push origin doc-fixes --force-with-lease

echo ✅ GitHub conflicts should now be resolved!
