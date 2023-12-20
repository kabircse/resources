# Docker Demo Image

**Build**

    docker build -t docker-demo-image .
                //-t mean tagName(docker-demo-image), . mean build in current directory
    
**Run**

    docker run docker-demo-image

**Push to docker hub**

    docker tag docker-demo-image kabircse/docker-demo-image
                // kabircse/docker-demo-image is the docker repository of the current docker image.

    docker push kabircse/docker-demo-image