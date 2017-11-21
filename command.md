1) Tell git who you are- configure the author name and email address to be used with your commits.
 command- git config --global user.name "username"
          git config --global user.email username@example.com

2)Add files- add all files to staging area.
 command-  git add .

3)Commit - commit changes to head 
 command:  git commit -m "Commit message"
 example: git commit -m "Add update feature"

4) Push- send changes to master branch of your remote repository.
command: git push origin master

5)Status- list the files you've changed and those you still need to add or commit
 command: git status

6)update from the remote repository- view all the merge conflicts 
 command: git diff
 
 preview changes,before merging: 
 command: git diff <sourcebranch> <targetbranch>

7)Deletes a feature branch
  command: git branch -d (branchname)

8)Push all branch to your remote repository
  command: git push --all origin

9)Shows a listing of commits on a branch
  command: git log

10)List all branches
  command: git branch


