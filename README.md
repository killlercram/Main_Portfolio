# Portfolio

This is my portfolio created in React with love.

## Things Done 
Going step by step:

### Application
- Created a fully responsible Portfolio.
- This is a single page application.
- It is created in React.js.

### Containerizing
- Simply creating a Docker file.
- It is multistagged to save the space.no
- Creating the container for this application.
- Added all the environment variable
- Giving it the optional port of 10000
- Building Image: docker build -t name:tagname .
- Running container: docker run -p hostport:containerport imagename


### GitHub Action

**1.> Created the Validate workflow**
- It will be triggered when code will be pushed or pulled.
- This will first check if the code is lint free.
- Next it will only build after lint test will be successfull.

**2.> Create Dockerization workflow**
- It is manual triggering workflow
- Can dynamically add the tagname to the image
- Login to Docker hub
- Here four tasks are being done
- Pulling the existing image if any
- Deleting the existing Image
- Building the new Docker image from docker file and passing the Environment variables
- Pushing the image to the docker hub



## Environment Variable
- VITE_SERVICE_ID = 
- VITE_TEMPLATE_ID = 
- VITE_PUBLIC_KEY = 


