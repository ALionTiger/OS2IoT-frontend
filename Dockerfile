# Based on https://mherman.org/blog/dockerizing-an-angular-app/
# base image
FROM node:14-alpine as DEV

# removed this for now
# install chrome for protractor tests
# RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
# RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
# RUN apt-get update && apt-get install -yq google-chrome-stable

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@14.2.3

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0


FROM DEV as PROD
CMD ng serve --host 0.0.0.0 --configuration=production

