#Doing Multistagging

# step 1:Building Stage
FROM node:lts-bookworm-slim AS builder

#setting Working directory inside the docker image
WORKDIR /app

#installing the dependencies
COPY package*.json ./
RUN npm install

#coping rest of the application code and building the app
COPY . .
RUN npm run build


#step 2:Server Stage
FROM node:lts-bookworm-slim

#installing static file server
RUN npm install -g serve

#coping the build files Form previous stage 
WORKDIR /app
COPY --from=builder /app/dist .

# Accept build arguments (no need for ENV here if you're only using these at build time)
ARG VITE_SERVICE_ID
ARG VITE_TEMPLATE_ID
ARG VITE_PUBLIC_KEY

#Exposing the app's port manually
EXPOSE 10000

#Running Production server
CMD ["serve", "-s" , "." , "-l", "10000"]