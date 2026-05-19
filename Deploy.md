# MERIDIAN — Hướng dẫn xuất bản lên tên miền `meridian.com`

Đây là website tĩnh **single-file** (`index.html`) — không cần build, không cần Node, không cần server. Chỉ cần upload là chạy.

---

## 📦 Nội dung gói

```
meridian-site/
├── index.html         ← Toàn bộ website (HTML + CSS + JS trong 1 file)
├── logo.png           ← Logo 512×512 (dùng cho OG/Twitter card, apple-touch-icon)
├── logo-1024.png      ← Logo 1024×1024 (in ấn, print, báo chí)
├── logo-256.png       ← Logo 256×256 (avatar, social profile)
├── favicon-64.png     ← Favicon fallback 64×64
└── DEPLOY.md          ← File hướng dẫn này
```

> Tailwind CSS được nạp qua CDN (`cdn.tailwindcss.com`) và Google Fonts (Inter) cũng qua CDN. Bạn không cần host bất kỳ asset nào khác.

---

## 🚀 Cách 1 — Deploy nhanh nhất (khuyên dùng): Vercel / Netlify / Cloudflare Pages

### Vercel (kéo-thả, 30 giây)

1. Vào https://vercel.com → đăng nhập (GitHub / Google).
2. Click **Add New → Project → Deploy** (hoặc dùng tính năng **drag-and-drop** ở https://vercel.com/new).
3. Kéo cả folder `meridian-site/` thả vào.
4. Vercel sẽ cấp ngay một domain dạng `meridian-xxx.vercel.app`.
5. Vào tab **Settings → Domains** → thêm tên miền của bạn (vd: `meridian.vn`).
6. Vercel hiển thị bản ghi DNS cần trỏ — copy về nhà cung cấp domain (Mục **6 — Cấu hình DNS** bên dưới).

### Netlify (kéo-thả qua trình duyệt)

1. Vào https://app.netlify.com/drop
2. Kéo folder `meridian-site/` thả thẳng vào ô lớn.
3. Site live trong ~10 giây, có URL tạm `xxx.netlify.app`.
4. Click **Domain settings → Add custom domain** → nhập domain của bạn.
5. Làm theo hướng dẫn DNS Netlify hiện ra.

### Cloudflare Pages (nếu bạn đã có Cloudflare)

1. Vào https://dash.cloudflare.com → **Workers & Pages → Create → Pages → Upload assets**.
2. Đặt tên project, upload folder `meridian-site/`.
3. Vào **Custom domains → Set up a custom domain** (Cloudflare tự cấu hình DNS nếu domain đã ở Cloudflare).

✅ **Cả 3 đều miễn phí, tự động cấp SSL/HTTPS, tự CDN toàn cầu.**

---

## 🚀 Cách 2 — Host trên GitHub Pages (miễn phí)

```bash
# 1. Tạo repo public mới trên GitHub, vd: meridian-site
# 2. Trong folder meridian-site:
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/<your-user>/meridian-site.git
git push -u origin main
```

3. Vào **Settings → Pages → Source: `main` / root → Save**.
4. URL: `https://<your-user>.github.io/meridian-site/`.
5. Để gắn domain: thêm file `CNAME` chứa duy nhất domain (vd: `meridian.vn`) vào repo, push, rồi trỏ DNS (xem mục 6).

---

## 🚀 Cách 3 — Hosting truyền thống (cPanel / shared hosting / VPS)

Phù hợp nếu bạn mua hosting Việt Nam (Mắt Bão, Tenten, Nhân Hòa, AZDIGI, BKHOST…).

1. Đăng nhập **cPanel** → **File Manager**.
2. Vào thư mục `public_html/` (hoặc thư mục gốc của domain).
3. Upload file `index.html` (kéo thả, hoặc Upload).
4. Truy cập `https://yourdomain.vn/` → site chạy.

Nếu là **VPS Ubuntu + Nginx**:

```bash
# Upload file lên server (scp / sftp / rsync)
scp index.html user@your-server:/var/www/meridian/

# Nginx config: /etc/nginx/sites-available/meridian
server {
  listen 80;
  server_name meridian.vn www.meridian.vn;
  root /var/www/meridian;
  index index.html;
  location / { try_files $uri $uri/ /index.html; }
}

# Bật site + SSL với Let's Encrypt
sudo ln -s /etc/nginx/sites-available/meridian /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d meridian.vn -d www.meridian.vn
```

---

## 🌐 Mua tên miền

| Nhà cung cấp | Loại | Ghi chú |
|---|---|---|
| **Namecheap / Porkbun / Cloudflare Registrar** | Quốc tế | `.com .io .xyz` — rẻ, quản lý dễ |
| **Mắt Bão / PA Vietnam / Tenten / iNet** | Việt Nam | `.vn .com.vn` — cần CMND/CCCD, có VAT |
| **GoDaddy** | Quốc tế | Phổ biến nhưng giá renewal cao |

**Khuyên dùng cho dự án này:** `meridian.vn`, `meridian.io`, hoặc `meridianchain.vn`.

---

## 6 — Cấu hình DNS (trỏ tên miền về host)

Sau khi deploy, host (Vercel/Netlify/…) sẽ cho bạn 2 loại bản ghi. Vào **DNS management** của nhà cung cấp domain rồi thêm:

### Nếu host là Vercel
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

### Nếu host là Netlify
```
Type    Name    Value
A       @       75.2.60.5
CNAME   www     <your-site>.netlify.app
```

### Nếu host là Cloudflare Pages
DNS tự động — chỉ cần domain đã add vào Cloudflare account.

### Nếu host là GitHub Pages
```
Type    Name    Value
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     <your-user>.github.io
```

⏱️ DNS lan truyền: **15 phút – 24 giờ** (thường ~30 phút). Check bằng https://dnschecker.org

---

## 🔒 SSL / HTTPS

- Vercel / Netlify / Cloudflare Pages / GitHub Pages: **tự cấp SSL miễn phí**, không cần làm gì.
- VPS tự host: dùng **Certbot + Let's Encrypt** (xem lệnh ở Cách 3).
- Hosting cPanel: bật **AutoSSL** hoặc cài Let's Encrypt từ panel.

---

## ✏️ Tuỳ chỉnh nhanh

| Cần đổi | Mở `index.html`, tìm | Sửa |
|---|---|---|
| Tên thương hiệu | `MERIDIAN` (xuất hiện ở `<title>`, nav, hero, footer) | Thay text |
| Màu chính (#533afd) | `--stripi-primary: #533afd` | Đổi mã màu |
| Mô tả SEO | `<meta name="description"` | Sửa nội dung |
| Favicon | `<link rel="icon"` (SVG inline) | Thay bằng `<link rel="icon" href="/favicon.ico">` và upload file |
| Form đăng ký email | `id="subscribeForm"` | Đổi action sang Formspree/Getform/Mailchimp endpoint |
| OG image cho social share | Thêm `<meta property="og:image" content="https://yourdomain/og.png">` | Cần upload `og.png` 1200×630 |

### Kết nối form email thật (Formspree, miễn phí)
```html
<!-- Sửa form trong section #cta -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" ...>
```
Đăng ký https://formspree.io → tạo form → lấy `YOUR_FORM_ID` → paste vào.

---

## 📊 Thêm Analytics (tuỳ chọn)

### Google Analytics 4
Dán ngay trước `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXX');
</script>
```

### Plausible (nhẹ, không cookie)
```html
<script defer data-domain="meridian.vn" src="https://plausible.io/js/script.js"></script>
```

---

## ✅ Checklist trước khi go-live

- [ ] Đã đổi `<title>`, `<meta description>`, `<meta og:*>` cho phù hợp.
- [ ] Đã thay tất cả `href="#"` trỏ về link thật (Twitter, GitHub, LinkedIn, Email…).
- [ ] Form Subscribe đã nối với endpoint thật (Formspree / Mailchimp / API riêng).
- [ ] Đã thêm favicon `.ico` / `.png` hoặc giữ SVG inline.
- [ ] Đã thêm Google Analytics / Plausible nếu cần.
- [ ] Kiểm tra responsive trên mobile (DevTools → toggle device).
- [ ] DNS đã trỏ đúng, mở trình duyệt incognito test https://yourdomain.vn.
- [ ] Test trên iOS Safari, Chrome Android, Firefox desktop.

---

## 🆘 Troubleshooting

**Site trắng trang / chỉ thấy text không style:**
→ CDN Tailwind bị chặn. Bạn ở môi trường offline hoặc bị firewall. Dùng cách build Tailwind ra file tĩnh (xem mục dưới).

**Domain chưa trỏ được sau 1 tiếng:**
→ Kiểm tra DNS record (https://dnschecker.org). Bản ghi `@` có thể cần TTL thấp; thử xoá rồi tạo lại.

**Form không gửi được:**
→ Form mặc định chỉ là demo (preventDefault + show success). Phải kết nối Formspree/Mailchimp/API thật.

**Muốn build Tailwind ra CSS tĩnh (không phụ thuộc CDN):**
```bash
npm install -D tailwindcss
npx tailwindcss -i ./input.css -o ./tailwind.css --minify
# Xoá <script src="https://cdn.tailwindcss.com"> trong index.html
# Thêm <link rel="stylesheet" href="tailwind.css">
```

---

## 📝 Tóm tắt deploy cực nhanh

> **Đường đi ngắn nhất:** kéo `meridian-site/` → thả vào https://app.netlify.com/drop → mua domain ở Namecheap → copy DNS record từ Netlify dán vào Namecheap → đợi 30 phút → live.

Chúc bạn launch suôn sẻ! 🚀
