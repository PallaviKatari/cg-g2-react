# pull official base image
FROM node:15.13-alpine

# set working directory
WORKDIR /cg-g2-react

# add `/app/node_modules/.bin` to $PATH
ENV PATH="./node_modules/.bin:$PATH"

# install app dependencies


# add app
COPY . .

# start app
CMD ["npm", "start"]