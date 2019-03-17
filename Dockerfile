FROM node:latest
RUN mkdir -p /DM-login-angular-master
WORKDIR /DM-login-angular-master
COPY package.json /DM-login-angular-master/
RUN npm install --force
RUN npm cache verify
COPY . /DM-login-angular-master
EXPOSE 4200/tcp
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "2000","--disableHostCheck","true"]
