FROM node:18-alpine3.15
WORKDIR /intelliextarct_docker
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN npm run build
CMD ["npm","start"]