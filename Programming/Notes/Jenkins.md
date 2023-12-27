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

### Jenkins Configuration:

    Dashboard -> New Item (Project Name, Free style project) -> Configure(Source Code Management, git [git repository url with .git], branch name), 
    Build Triggers (GitHub hook trigger for GITScm polling) 

Assign github webhook to push the pr to the jenkins.

    Github repository->Settings->Webhooks->Add web hook (Payload URL [jenkins url with /github-webhook/], choose triggering webhook events [commit, pushes])

### Sonar qube Configuration:

    1. Projects -> Create -> Manually -> (Project name, key, branch)->save -> analyze with jenkins -> DevOPS platform -> github .... 

    2. Create a GitHub Webhook -> Build other -> keep project key like (sonar.projectKey=test)

    2. Create token for jenkins accessing sonar qube:

    Administrator -> Generate Tokens (token name, token type, expire) -> Save

### Jenkins configuration update for accessing sonar qube

    Jenkins Project -> Configuration -> Build Steps -> Execute sonar qube( Analysis properties [sonar qube project key])

Add sonar qube scanner configuration to jenkins

    Dashboard -> Manage Jenkins -> Plugins -> Available Plugins -> Search sonar scanner plugins (SonarQube Scanner for Jenkins) -> install

    Dashboard -> Manage Jenkins -> Tools-> SonarQube Scanner installations (SonarQube Scanner name, install automatically, choose version) -> save

    Dashboard -> Manage Jenkins -> System -> SonarQube installations (Sever name) -> 
    Server authentication token -> add -> jenkins -> Jenkins Credentials Provider-> kind (secret text [secret text, id]) ->save
    


