
FROM node:16-alpine
WORKDIR /app
COPY package*.json /app/
COPY ./ /app/


RUN npm install
RUN npm run build


EXPOSE 3000


# start app
CMD ["npm", "start"]

#docker build -t job/job-front .
#docker run -it -p 3000:3000 -d job/job-front