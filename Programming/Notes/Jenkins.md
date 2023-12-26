# Jenkins
**Jenkins**: Jenkins is an open-source automation server used for building, testing, and deploying software.

**Somme key aspects and functionalities of Jenkins**:

#### A. Continuous Integration (CI):
1. **Automated Builds**: Jenkins can automatically trigger builds whenever changes are pushed to a code repository, ensuring that code changes are integrated continuously.

2. **Testing and Quality Checks**: It can run automated tests, static code analysis, and other quality checks to ensure the code meets standards before deployment.
   
#### B. Continuous Deployment (CD)
1. **Pipeline Support**: Jenkins uses pipelines to define the entire software delivery process, including building, testing, and deploying.
   
2. **Deployment Automation**: It can automate the deployment process to different environments, ensuring consistency and reliability.

**Pipeline**: Series of steps that build, test and deploy automatically to environment.

### Jenkins in docker:
 Commands :

    docker pull jenkins/jenkins:lts
        
    docker run -d -p 9090:8080 -p 50000:50000 -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts

    // for initial password
    docker exec my-jenkins cat /var/jenkins_home/secrets/initialAdminPassword

Web Interface of jenkins: http://localhost:9090


### SonarQube in docker:
 Commands :

    docker pull sonarqube:lts
        
    docker run -d --name sonarqube -p 9000:9000 sonarqube:lts

Web Interface of jenkins: http://localhost:9000

The default credentials for SonarQube are:
Credentials: admin, admin