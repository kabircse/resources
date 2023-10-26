# Git:
  1. Add files to the stage  
    ```git add . #add all files to git stage or```
    ```git add --all ```
      
  2. Remove a file from the git stage, but keep it in the file system  
      ``` git reset fileName          # or git remove --cached fileName  then ```  
      ``` echo fileName >> .gitignore   # add this file to gitignore ```
      
  3. Misspelled previous commit message with a new commit message
    ```git commit --amend -m "updated commit message" ```    
  
  4. Commit with the latest commit message   
      ```git commit -m --ammend --no-edit ```
      
  5. Undo last commit  
      ``` git reset HEAD^2          # undo last 2 commits, but keep changes   ```   
      ```git reset --hard HEAD^2    # undo last 2 commits, but remove changes ```   
      ```git push origin -f #force to push the changes to remote```
      
   6. Check git logs   
      ```git log --oneline ```   
      
   7. Undo pushed commit to remote   
  (a).  ``` git revert head 
           #head indicates latest commit pointer, it reverts the last commit with the message ```

      (b).  ``` git revert commit_hash 
           #commit_hash hash of a commit need to revert. Then change the commit message. 
           After that press, ESC then write :wq! (write and quit). ``` 
  
   9. Undo multiple commits   
      
      (a). ``` git revert HEAD~<number_of_commits>..HEAD #number_of_commits indicates how many commits need to revert from the top. ```

        To prevent a commit message add --no-commit after the command
   
      (b). ``` git rebase -i aeid5 (HashKey) #it will remove all latest commit after this HashKey commit (HashKey is the commit has key) ```
      
It will prompt all commits after the HashKey with a message as 

      pick ecder2 ....
      pick beid3 ....
      pick aeid5 ....
     
Then rename pick to d for drop as
      
      d ecder2 ....
      d beid3 ....
      pick aeid5 ....
    
   
For deleting a commit but keep the commit  message to the previous one as
 
    
     pick ecder2 ....
     pick beid3 ....
     pick aeid5 ....
     
Then rename pick to d for drop as
      
      pick ecder2 ....
      squash beid3 ....
      squash aeid5 ....    
    
After these changes press first ESC, then :wq! . After this another prompt will open just press ESC then :wq!
    It will move the head to aeid5 and the commit message will be this also.

(c). Cherry-pick: Take a commit from another branch to the current branch.

main branch: A (head) #Current branch

dev branch: C->D->E (head) #Another branch

     git cherry-pick <commit-hash> #commit-hash is the commit of the dev branch here (D)

After cherry pick D to the main branch from the dev branch as
main branch: A->D (head)
    
     
  9. Search a deleted file in the commit history:  
      ```git log --all **/test.php*```
  
  10. Search deleted files in commits history  
      ```git log --diff-filter=D --summary | grep delete```

  11. Git alias
      ```
      /users/pc name/.gitconfig
      [alias]
      gt = git
      st = status
      pl = pull
      co = checkout
      br = branch
      a = add
      aa = add .
      ci = commit
      ps = push
      
      /users/pc name/.bashrc:
      alias gam='git commit --amend'
      alias gt=git
      alias ga='git add'
      alias gaa='git add --all'
      alias gb='git branch'
      alias gba='git branch -a'
      alias gbl='git blame -b -w'
      alias gbnm='git branch --no-merged'
      alias gbr='git branch --remote'
      alias gc='git commit'
      alias gcob='git checkout -b'
      alias gcf='git config --list'
      alias gco='git checkout'
      alias gd='git diff'
      alias gdca='git diff --cached'
      alias gdtc='git difftool --cached'
      alias gdw='git diff --word-diff'
      alias gf='git fetch'
      alias gpl='git pull'
      alias gm='git merge'
      alias gps='git push'
      alias grh='git reset HEAD'
      alias grhh='git reset HEAD --hard'
      alias gs='git status'
      alias gsta='git stash'
      alias gstaa='git stash apply'
      alias gstd='git stash drop'
      alias gstl='git stash list'
      alias gstp='git stash pop'
      alias wip='git add . && git commit -m "WIP"'
      alias nowip='git reset HEAD~'  
      ```
       
