FROM node:18.12.1
WORKDIR /app 

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

COPY . .

# COPY ./docker-entrypoint.sh /

# RUN chmod +x /docker-entrypoint.sh

# ENTRYPOINT ["/docker-entrypoint.sh"]

EXPOSE 80