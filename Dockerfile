# Stage 1: Build the application
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma
RUN yarn install

# Generate Prisma Client
RUN npx prisma generate


COPY . .
RUN yarn build

# Stage 2: Run the application
FROM node:18-alpine
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/assets ./src/assets
CMD ["node", "dist/main"]
