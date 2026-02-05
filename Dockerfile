# --- Stage 1: Build Stage ---
FROM node:22.12.0-alpine AS builder

WORKDIR /app

# Install dependencies first (better caching)
COPY package*.json ./
RUN npm install

# Copy the rest of your code and build
COPY . .
RUN npm run build

# --- Stage 2: Production Stage ---
FROM nginx:stable-alpine

# 1. Clear out the default Nginx files (the part you correctly spotted!)
RUN rm -rf /usr/share/nginx/html/*

# 2. Remove the default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# 3. Copy your custom config (created in the previous step)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 4. Copy the "out" folder from the builder stage
COPY --from=builder /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]