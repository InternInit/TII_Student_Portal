# build environment

#Use lightweight node env
FROM node:13.12.0-alpine as build

#Set workdir for RUN, CMD, ENTRYPOINT, COPY and ADD
WORKDIR /app

#Set Path env var to that
ENV PATH /app/node_modules/.bin:$PATH

#Copy package files to docker container and automated install
COPY package.json ./
COPY package-lock.json ./
RUN npm ci --silent

#Install context as global package
RUN npm install -g --silent

#Copy all local files to docker
COPY . ./

#Create production build
RUN npm run build

# production environment

#Use nginx env
#FROM nginx:stable-alpine
FROM tiangolo/uwsgi-nginx-flask:python3.8

#Copy prod build files into htdocs
COPY --from=build /app/build /usr/share/nginx/html

#Copy custom nginx conf file into nginx instance
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/backend /app

#Expose port 80 so we can access app
EXPOSE 80

#Run nginx server
CMD ["nginx", "-g", "daemon off;"]
