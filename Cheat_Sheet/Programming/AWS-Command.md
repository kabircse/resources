# AWS Commands
#### A. AWS configure
##### 1. Configure AWS by access key and token:
    aws configure    

##### 2. List:
    aws configure list    

##### 3. Set Profile:
    aws configure --profile profileName    

## B. S3
##### 1. list bucket:
    aws s3 ls    
##### 2. list files in a bucket:
    aws s3 ls bucketName    
##### 3. create bucket on user's configured rezion:
    aws s3 mb s3://bucketName    
##### 4. create bucket on a zone:
    aws s3 mb s3://bucketName --region app-south-1    
##### 5. delete bucket:
    aws s3 rb s3://bucketName    
##### 6. delete bucket:
    aws s3 rb s3://bucketName --force    
##### 7. upload folder and files to a bucket folder:
    aws s3 cp uploadFolder s3://bucketName/demo --recursive    
##### 8. delete object from bucket:
    aws s3 rm s3://bucketName/demo/deleteFileName    
##### 9. copy an s3 object to local file:
    aws s3 cp s3://bucketName/index.html test.html    
##### 10. Upload some files from local to s3 and delete mismatch files:
    aws s3 sync . s3://bucketName    
##### 11. Download some files from s3 to local and delete mismatch files:
    aws s3 sync s3://bucketName .    
