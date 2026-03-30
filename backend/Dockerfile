FROM node:18-alpine
WORKDIR /app

# Avval package.json va npm o'rnatamiz (tezroq ishlashi uchun)
COPY package*.json ./
RUN npm install

# Endi hamma kodlarni ko'chiramiz
COPY . .

# Server ishlovchi portni ochiq qoldiramiz
EXPOSE 3000

# Dasturni ishga tushirish komandasi
CMD ["node", "server.js"]
