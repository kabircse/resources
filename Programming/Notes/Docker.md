# Docker
**Docker:** Docker is a powerful tool for developing,shipping and running applications in container.

**Container:** Container is a runtime instance of Docker image that can be used to run applications.

**Docker Image:** Docker image is a read-only template containing a set of instructions for creating a container that can run on the Docker platform.

**Docker Engine:** Docker Engine is a containerization technology used for building and containerizing your applications. Docker Engine acts as a client-server application.

**Dockerfile:** A Dockerfile is a text file that contains instructions for building a Docker image.

**Docker Registry:** Docker Registry is a repository for Docker images.



### Managing Containers:
    docker run <image>          //Run a Container
    docker ps                   //List Running Containers
    docker ps -a                //List All Containers
    docker stop <container>     //Stop a Container
    docker start <container>    //Start a Stopped Container
    docker rm <container>       //Remove a Container

### Managing Images:
    docker images               //List Images
    docker pull <image>         //Pull an Image from Registry
    docker rmi <image>          //Remove an Image
    docker build -t <tag_name> . 
                                //Build an Image from Dockerfile
    
### Networking:
    docker network ls           //List Networks
    docker network create <network_name>
                                //Create a Network
    docker network connect <network_name> <container>                 //Connect Container to Network
    docker network disconnect <network_name> <container>                //Disconnect Container from Network

### Managing Volumes:
    docker volume ls           //List Volumes
    docker volume create <volume_name>
                               //Create a Volume
    docker volume rm <volume_name>
                               //Remove a Volume
    Inspect Volume: docker volume inspect <volume_name>

### Docker Compose:
    docker-compose up           //Start Services
    docker-compose down         //Stop Services
    docker-compose build        //Build/Rebuild Services

### System Information:
    docker info                 //Display Docker System Information
    docker system df            //View Docker Disk Usage

### Other Useful Commands:
    docker exec -it <container> bash
                                //Access Container's Terminal
    docker inspect <container/image>
                                //Inspect Container or Image
    docker logs <container>     //Logs of a Container
    docker pause <container> / docker unpause <container>                
                                //Pause/Unpause a Container 