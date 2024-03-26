FROM node:18-alpine
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json ./
RUN yarn

ARG NEXT_PUBLIC_MODE
ARG NEXT_PUBLIC_SERVER_URL

ENV NEXT_PUBLIC_MODE $NEXT_PUBLIC_MODE
ENV NEXT_PUBLIC_SERVER_URL $NEXT_PUBLIC_SERVER_URL

COPY . .

RUN NEXT_PUBLIC_MODE=$NEXT_PUBLIC_MODE NEXT_PUBLIC_SERVER_URL=$NEXT_PUBLIC_SERVER_URL yarn build

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
RUN chown -R nextjs:nodejs ./.next
RUN chown -R nextjs:nodejs ./package.json

USER nextjs

EXPOSE 8080

CMD ["yarn", "start"]
