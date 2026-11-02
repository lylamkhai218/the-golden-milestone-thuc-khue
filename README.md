# THE GOLDEN MILESTONE — A Celebration for Thục Khuê

Website chúc mừng cá nhân hóa dành tặng **Thục Khuê** nhân dịp bảo vệ luận án thạc sĩ thành công, do **HKT (Hoàng · Khải · Tâm)** gửi tặng.

- **Deployment URL:** [https://lylamkhai218.github.io/the-golden-milestone-thuc-khue/](https://lylamkhai218.github.io/the-golden-milestone-thuc-khue/)
- **Visual Style:** Academic Luxury / Editorial Celebration (`name-as-monument`)
- **Tech Stack:** Vite + Vanilla TypeScript + Pure CSS Tokens

---

## 1. Quick Start

### Cài đặt dependencies:
```bash
npm install
```

### Chạy môi trường phát triển (Dev server):
```bash
npm run dev
```

### Kiểm tra kiểu (Type check):
```bash
npm run check
```

### Build production:
```bash
npm run build
```

---

## 2. GitHub Pages Deployment

Dự án đã được cấu hình CI/CD tự động bằng GitHub Actions:
1. Push code lên branch `main` của repository `the-golden-milestone-thuc-khue`.
2. Vào tab **Settings** → **Pages** trên GitHub:
   - Trong mục **Build and deployment**, chọn **Source:** `GitHub Actions`.
3. GitHub Actions sẽ tự động build và xuất bản website tại:
   `https://lylamkhai218.github.io/the-golden-milestone-thuc-khue/`

---

## 3. Kiến trúc & Điểm nổi bật
- **Kích thước siêu nhẹ:** Toàn bộ bundle JS + CSS chỉ ~8 kB gzip, tải gần như tức thì.
- **Mobile-first & Safari:** Tương thích Dynamic Island, Notch, thanh địa chỉ động (`100svh`/`100dvh`).
- **In-App Browser Support:** Tự động hỗ trợ mở trên Chrome (Android Intent) hoặc hướng dẫn mở Safari trên iOS khi mở từ Zalo / Facebook Messenger.
- **Social Preview (OG Tag):** Có sẵn metadata và ảnh đại diện 1200×630 tiêu chuẩn trong `index.html`.
- **Chuẩn đồ họa cao cấp:** Tuyệt đối không dùng Windows emoji; sử dụng 100% SVG vector thanh lịch.
