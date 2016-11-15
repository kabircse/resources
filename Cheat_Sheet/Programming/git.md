Git:
  1. Search a deleted file in commit history:
      git log --all **/test.php*
  
  2. Search deleted files commits history
      git log --diff-filter=D --summary | grep delete
