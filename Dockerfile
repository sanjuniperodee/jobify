
FROM node:16-alpine
WORKDIR /app
COPY package*.json /app/
COPY ./ /app/


RUN npm install -g @angular/cli
RUN npm install
RUN npm run build 

EXPOSE 4200


# start app
CMD ["ng", "serve","--host=0.0.0.0"]

#docker build -t job/job-front .
#docker run -it -p 4200:4200 -d job/job-front