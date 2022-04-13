# Git:
  1. Add files to stage  
    ```git add . #add all files to git stage or```
    ```git add --all ```
      
  2. Remove a file from git stage, but keep in file system  
      ``` git reset fileName          # or git remove --cached fileName  then ```  
      ``` echo fileName >> .gitignore   # add this file to gitignore ```
      
  3. Misspelled commit message with previous commit   
    ```git commit --amend -m "updated commit message" ```    
  
  4. Commit with lastest commit message   
      ```git commit -m --ammend --no-edit ```
      
  5. Undo last commit  
      ``` git reset HEAD^2          # undo last 2 commits, but keep changes   ```   
      ```git reset --hard HEAD^2    # undo last 2 commits, but remove changes ```
      ```git push origin -f #force to push the changes to remote```
      
   6. Check git logs   
      ```git log --oneline ```   
      
   7. Undo pushed commit to remote   
      ```git revert head #head indicate latest commit pointer, it revert last commit with a message```
  
   8. Undo multiple commits   
    ```git rebase -i aeid5 (HashKey) #it will remove all latest commit after this HashKey commit (HashKey is the commit haskey)```
    
    ```
    It will prompt all commit afer the HashKey with a message as 
      "pick ecder2 ....
      d beid3 ....
      pick aeid3 ....
      "    
      Then rename pick to d for drop as
      "d ecder2 ....
      d beid3 ....
      pick aeid5 ....
      "    
    ```

  9. Search a deleted file in commit history:  
      ```git log --all **/test.php*```
  
  10. Search deleted files in commits history  
      ```git log --diff-filter=D --summary | grep delete```
