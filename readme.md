Made by : Muhamad Toriquddin

Deskripsi singkat : Ini adalah projek session 4 dari hackative menggunakan express dan google gemini api sebagai sebuah backend untuk memproses teks, gambar, dokumen, dan audio dengan bantuan AI. 

Cara pakai di lokal : 
1. Jalankan "npm install" di terminal untuk install packages
2. Buat file env lalu isi dengan PORT, GEMINI_MODEL, dan GEMINI_API_KEY.
3. Jalankan sistem dengan "npm run start".
4. Pakai api dengan postman.

Daftar method :
1. Method: POST, API: http://localhost:3000/generate-text, Input: {prompts:string}, Result berhasil: {data:string, status:string,message:string}, Result gagal server: {status:string,message:string}
2. Method: POST, API: http://localhost:3000/generate-from-image, Input: {prompts:string, image:gambar}, Result berhasil: {data:string, status:string,message:string}, Result gagal server: {status:string,message:string}
3. Method: POST, API: http://localhost:3000/generate-from-document, Input: {prompts:string, doc:dokumen}, Result berhasil: {data:string, status:string,message:string}, Result gagal server: {status:string,message:string}
4. Method: POST, API: http://localhost:3000/generate-from-audio, Input: {prompts:string, audio:audio}, Result berhasil: {data:string, status:string,message:string}, Result gagal server: {status:string,message:string}