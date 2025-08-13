# ✅ Gunakan image Node.js resmi
FROM node:18

# ✅ Set working directory di dalam container
WORKDIR /app

# ✅ Copy package.json dan install dependencies
COPY package*.json ./
RUN npm install

# ✅ Salin semua source code ke dalam container
COPY . .

# ✅ (Opsional) Tambahkan permission agar semua file bisa dijalankan
RUN chmod -R 755 .

# ✅ Jalankan server langsung via app.js (tanpa TypeScript)
CMD ["node", "app.js"]
