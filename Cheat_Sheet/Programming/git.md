# Git:
  1. Search a deleted file in commit history:  
      ```git log --all **/test.php*```
  
  2. Search deleted files in commits history  
      ```git log --diff-filter=D --summary | grep delete```
  
  3. Undo last commit  
      ``` git reset head~2          # undo last 2 commits, but keep changes   ```   
      ```git reset --hard head~2    # undo last 2 commits, but remove changes ```
      
  3. Remove a file from git stage, but keep in file system  
      ``` git reset fileName          # or git remove --cached fileName  then ```  
      ``` echo fileName >> .gitignore   # add this file to gitignore ```
