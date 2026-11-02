# THE GOLDEN MILESTONE — Website Project Brief & Technical Specification

> **Tài liệu khởi động dành cho AI Coding Agent**  
> Phiên bản: 1.0  
> Ngôn ngữ sản phẩm: Tiếng Việt (có thể dùng một số headline tiếng Anh)  
> Người nhận lời chúc: **Thục Khuê**  
> Người gửi: **HKT — Hoàng · Khải · Tâm**  
> Hình thức triển khai: Website tĩnh, lưu source trên GitHub và deploy bằng GitHub Pages  
> Ưu tiên trải nghiệm: **Mobile-first**, đặc biệt iPhone Safari và Android Chrome

---

## 0. Hướng dẫn dành cho AI Agent

Hãy đọc toàn bộ tài liệu này trước khi viết code. Đây là nguồn yêu cầu và định hướng thiết kế ban đầu của dự án.

### Vai trò

Bạn là một nhóm sản phẩm gồm:

- Senior Frontend Engineer: kiến trúc, code, hiệu năng, responsive và browser compatibility.
- UI/UX Designer: thiết kế trải nghiệm, typography, layout, micro-interaction.
- Motion / Creative Developer: hiệu ứng 3D tinh tế, có kiểm soát hiệu năng.
- QA Engineer: kiểm thử thiết bị, trình duyệt, accessibility và social link preview.
- DevOps Engineer: GitHub Actions và GitHub Pages deployment.

### Nguyên tắc làm việc

1. **Không code ngay khi chưa kiểm tra repository.** Đọc cấu trúc hiện tại, package manager, scripts, workflow và trạng thái Git trước.
2. Tài liệu này là định hướng có thẩm quyền. Không tự ý đổi brand, nội dung lời chúc, palette hoặc mục tiêu trải nghiệm nếu chưa có lý do kỹ thuật rõ ràng.
3. Khi một yêu cầu không thể bảo đảm bằng website tĩnh, phải nói rõ giới hạn và triển khai phương án thay thế gần nhất. Không giả vờ có thể “force” trình duyệt khi nền tảng không cho phép.
4. Ưu tiên giải pháp đơn giản, nhẹ và dễ bảo trì. Không thêm framework hoặc thư viện chỉ để làm dự án có vẻ phức tạp.
5. Không để hiệu ứng 3D làm chậm nội dung chính, cản trở thao tác hoặc gây nóng máy điện thoại.
6. Mọi nội dung, ảnh, metadata và asset phải hoạt động đúng trên URL GitHub Pages dạng project site (có thể có base path `/REPOSITORY/`). Không hard-code đường dẫn root `/` cho asset nếu làm hỏng project site.
7. Không tự ý thêm analytics, tracking, form thu thập dữ liệu, backend, database hoặc cookie không cần thiết.
8. Không tự ý dùng ảnh chân dung Thục Khuê nếu chưa được cung cấp hoặc cho phép. Có thể dùng minh họa học thuật, hoa, giấy, ánh sáng và mũ tốt nghiệp.
9. Ghi lại các quyết định kỹ thuật quan trọng trong `README.md` hoặc `docs/DECISIONS.md`.
10. Sau khi hoàn thiện, chạy build, kiểm tra lỗi, kiểm tra đường dẫn deploy và cung cấp checklist kiểm thử thực tế.

### Thứ tự ưu tiên khi có xung đột

1. Nội dung và khả năng sử dụng.
2. Mobile responsiveness và Safari compatibility.
3. Hiệu năng và accessibility.
4. Chất lượng thẩm mỹ và animation.
5. Hiệu ứng 3D phức tạp.

---

# 1. Project Overview

## 1.1. Tên dự án

**THE GOLDEN MILESTONE**  
*A Celebration for Thục Khuê*

Tên concept mang ý nghĩa: một cột mốc đáng tự hào sau hành trình học tập, nghiên cứu và nỗ lực dài lâu.

## 1.2. Mục tiêu

Xây dựng một website chúc mừng cá nhân hóa dành cho Thục Khuê nhân dịp bảo vệ luận án thạc sĩ thành công. Website là một món quà kỹ thuật số do HKT gửi tặng, không phải website doanh nghiệp hoặc landing page bán hàng.

Website cần:

- Tạo cảm giác bất ngờ, trang trọng, ấm áp và đáng nhớ ngay khi mở link.
- Truyền tải lời chúc trọn vẹn từ Hoàng, Khải và Tâm.
- Có chuyển động và chiều sâu thị giác 3D nhưng tải nhanh, mượt trên smartphone.
- Hiển thị tốt trên iPhone Safari, Android Chrome, desktop Chrome/Edge/Firefox/Safari và trình duyệt tích hợp trong Zalo/Facebook.
- Có hình ảnh preview đẹp khi gửi link qua Zalo, Facebook và có favicon nhận diện.
- Có thể deploy tự động từ GitHub repository thông qua GitHub Pages.

## 1.3. Phạm vi

### In scope

- Một website/one-page experience.
- Thiết kế responsive mobile-first.
- Hero section, lời chúc, điểm nhấn cột mốc và chữ ký HKT.
- Hiệu ứng CSS 3D và một lớp 3D/WebGL tùy chọn, chỉ khi hiệu năng cho phép.
- Hiệu ứng reveal, particle/confetti nhẹ và micro-interactions.
- Open Graph metadata, social share image, favicon, apple touch icon.
- Nhận diện trình duyệt trong ứng dụng Zalo/Facebook và hướng dẫn mở bằng trình duyệt ngoài.
- GitHub Pages deployment qua GitHub Actions.
- README và hướng dẫn cập nhật nội dung/asset.

### Out of scope

- Backend, database, tài khoản đăng nhập.
- CMS hoặc dashboard quản trị.
- Thu thập thông tin cá nhân, form đăng ký, tracking quảng cáo.
- Ứng dụng native iOS/Android.
- Cam kết ép buộc mọi in-app browser chuyển sang Safari/Chrome (không khả thi với website tĩnh trong mọi trường hợp).
- Autoplay nhạc hoặc âm thanh khi vừa mở website.

---

# 2. Brand Identity

## 2.1. Brand concept

- **Brand name:** THE GOLDEN MILESTONE
- **Main subject:** Thục Khuê
- **Sender:** HKT — Hoàng · Khải · Tâm
- **Brand personality:** Elegant, Warm, Proud, Thoughtful
- **Visual direction:** Academic Luxury / Editorial Celebration
- **Emotional direction:** A journey worth celebrating

### Brand statement

> A journey of dedication. A moment of pride.

Thông điệp tiếng Việt:

> Một hành trình nỗ lực, một cột mốc đáng tự hào.

### Tagline đề xuất

> The achievement is yours. The pride is ours.

Bản dịch:

> Thành tựu này là của bạn. Niềm tự hào này là của chúng tôi.

## 2.2. Tính cách thiết kế

Website phải giống một lời chúc được thiết kế riêng, có thẩm mỹ như một ấn phẩm editorial cao cấp. Không đi theo phong cách:

- Landing page quảng cáo.
- Thiệp cưới hoặc website sự kiện cưới hỏi.
- Website hoạt hình trẻ con.
- Giao diện game với quá nhiều particle, neon hoặc hiệu ứng nhấp nháy.
- Một trang web phủ vàng kim từ đầu đến cuối.

**Từ khóa thị giác:** Ivory paper, champagne gold, midnight navy, subtle light, fine typography, elegant whitespace, academic milestone, soft 3D.

---

# 3. Color System

## 3.1. Primary palette

| Token | Tên màu | HEX | Vai trò |
|---|---|---:|---|
| `--color-gold` | Champagne Gold | `#C5A052` | Màu thương hiệu vàng chính, điểm nhấn |
| `--color-gold-light` | Soft Champagne | `#E7D4AA` | Nền phụ, highlight, border mềm |
| `--color-gold-dark` | Antique Gold | `#A77B2D` | Icon, đường viền, chi tiết vàng đậm |
| `--color-navy` | Midnight Navy | `#172B46` | Nền tối, chữ chính trên nền sáng |
| `--color-ivory` | Warm Ivory | `#F8F1E3` | Nền chủ đạo |
| `--color-white` | Pure Ivory | `#FFFDF8` | Card và bề mặt sáng |
| `--color-muted` | Muted Gray | `#6E7480` | Nội dung phụ |
| `--color-border` | Warm Border | `#E7DCC5` | Border trên nền sáng |

## 3.2. Tỷ lệ phối màu

- 70% Ivory / Pure Ivory: nền chính, tạo cảm giác giấy và khoảng thở.
- 20% Midnight Navy: hero, footer, typography và vùng tương phản.
- 10% Gold: nhấn tiêu đề, icon, underline, đường viền, particle và chi tiết kỷ niệm.

Không dùng vàng kim cho đoạn văn dài. Nội dung phải có độ tương phản tốt và đọc được dưới ánh sáng điện thoại.

## 3.3. Gold gradient

```css
:root {
  --gradient-gold: linear-gradient(
    110deg,
    #9B7029 0%,
    #C5A052 30%,
    #E9D39D 58%,
    #F8EBCB 78%,
    #C5A052 100%
  );
}
```

Dùng có chọn lọc cho:

- Headline hoặc chữ nhấn đặc biệt.
- Đường viền/hairline trang trí.
- Một vài chi tiết 3D hoặc highlight.
- Huy hiệu/cap icon hoặc ornament.

Không dùng gradient vàng phủ toàn màn hình hoặc áp dụng cho toàn bộ typography.

## 3.4. Background gradient

```css
:root {
  --gradient-hero: linear-gradient(
    135deg,
    #172B46 0%,
    #263D5D 60%,
    #172B46 100%
  );
}
```

## 3.5. CSS design tokens

```css
:root {
  /* Brand */
  --color-gold: #C5A052;
  --color-gold-light: #E7D4AA;
  --color-gold-dark: #A77B2D;
  --color-navy: #172B46;

  /* Surface */
  --color-ivory: #F8F1E3;
  --color-white: #FFFDF8;
  --color-surface: #FFFFFF;

  /* Text */
  --color-text: #172B46;
  --color-text-muted: #6E7480;

  /* Border and effects */
  --color-border: #E7DCC5;
  --shadow-soft: 0 12px 35px rgba(23, 43, 70, 0.08);

  /* Gradient */
  --gradient-gold: linear-gradient(
    110deg, #9B7029, #C5A052, #E9D39D, #F8EBCB
  );
  --gradient-hero: linear-gradient(
    135deg, #172B46 0%, #263D5D 60%, #172B46 100%
  );

  /* Typography */
  --font-heading: "Cormorant Garamond", Georgia, serif;
  --font-body: "Be Vietnam Pro", Arial, sans-serif;
  --font-script: "Dancing Script", cursive;

  /* Layout */
  --radius-card: 20px;
  --radius-button: 999px;
  --content-max-width: 1120px;
}
```

---

# 4. Typography System

Ưu tiên chữ tiếng Việt hiển thị đúng dấu, không bị lỗi dấu hoặc nhảy baseline.

| Font | Ứng dụng | Ghi chú |
|---|---|---|
| Cormorant Garamond | Headline, tên Thục Khuê, quote | Sang trọng, editorial, học thuật |
| Be Vietnam Pro | Body, button, navigation, nội dung tiếng Việt | Dễ đọc, hỗ trợ tiếng Việt tốt |
| Dancing Script | Chữ ký hoặc một vài câu ngắn | Chỉ dùng làm điểm nhấn, không dùng cho paragraph dài |

### Typography rules

- Hạn chế tối đa 3 font family.
- Body text cần đủ lớn trên điện thoại; ưu tiên khoảng 16–18px.
- Line-height paragraph khoảng 1.6–1.8.
- Headline responsive bằng `clamp()` thay vì cố định một kích thước.
- Không dùng script font cho toàn bộ lời chúc vì khó đọc trên màn hình nhỏ.
- Nạp font có chiến lược: chỉ lấy weight cần thiết, ưu tiên WOFF2 và có fallback hệ thống.
- Có thể cân nhắc self-host font để hạn chế request bên thứ ba; kiểm tra license trước khi đưa vào repo.

Ví dụ:

```css
.hero-title {
  font-family: var(--font-heading);
  font-size: clamp(2.6rem, 10vw, 6rem);
  line-height: 0.98;
  letter-spacing: -0.035em;
}

.body-copy {
  font-family: var(--font-body);
  font-size: clamp(1rem, 2.6vw, 1.125rem);
  line-height: 1.75;
}

.signature {
  font-family: var(--font-script);
  font-size: clamp(1.5rem, 5vw, 2.5rem);
}
```

---

# 5. Content Specification

## 5.1. Nội dung lời chúc chính — phải giữ nguyên

> Chúc Thục Khuê có một buổi bảo vệ luận án thạc sĩ thật suôn sẻ và thành công nhé! Sau hành trình dài nỗ lực, nghiên cứu và miệt mài, mong Khuê sẽ thật tự tin, bình tĩnh, lập luận sắc bén để chinh phục hội đồng và đạt được kết quả xứng đáng nhất. Chúc mừng tân Thạc sĩ tương lai! 🎓

**Chữ ký:**

> From HKT (Hoàng - Khải - Tâm)

Không tự ý sửa tên, đổi người gửi hoặc cắt mất ý của lời chúc khi chưa được yêu cầu.

## 5.2. Nội dung website đề xuất

### Hero

Eyebrow:

> A MOMENT TO REMEMBER

Headline:

> Congratulations, Thục Khuê!

Subheadline:

> A journey of dedication, a moment of pride.

Thông tin phụ có thể hiển thị:

> MASTER'S THESIS DEFENSE

Không tự ý hiển thị ngày bảo vệ, trường đại học, ngành học, tên luận án hoặc điểm số nếu chưa được cung cấp.

### Section 2 — Milestone

Title:

> A Journey of Dedication

Supporting copy:

> Mỗi nỗ lực đều xứng đáng được ghi nhận. Hôm nay là một cột mốc đặc biệt trên hành trình chinh phục tri thức của Khuê.

Đây là nội dung biên tập gợi ý; có thể tinh chỉnh để đồng bộ với lời chúc chính nhưng không thay thế lời chúc nguyên bản.

### Section 3 — The Message

Hiển thị toàn bộ lời chúc chính trong một card mang cảm giác handwritten/editorial. Có thể có hiệu ứng mở thiệp hoặc reveal theo scroll, nhưng không bắt người dùng phải chờ animation mới đọc được nội dung.

### Section 4 — HKT Signature

> With love, HKT  
> Hoàng · Khải · Tâm

Closing line:

> The achievement is yours. The pride is ours.

## 5.3. Nguyên tắc nội dung

- Ấm áp, chân thành, không quá khoa trương.
- Không biến website thành một trang quảng cáo thương hiệu HKT.
- Không thêm câu khẳng định về kết quả, học vị hoặc điểm số nếu chưa xác nhận buổi bảo vệ đã hoàn tất.
- Không thêm nội dung mang tính riêng tư, thông tin trường/lớp hoặc ảnh cá nhân khi chưa được cung cấp.

---

# 6. UX / UI Direction

## 6.1. UI language

| Thành phần | Định hướng |
|---|---|
| Background | Warm Ivory và các vùng Midnight Navy |
| Card | Pure Ivory, border champagne nhạt |
| Border radius | 16–24px |
| Shadow | Soft warm shadow, không quá đậm |
| Button | Navy background, ivory text; gold hover/focus |
| Hover | Subtle gold glow hoặc lift rất nhẹ; không phụ thuộc hover |
| Icon | Line icon, antique gold |
| Animation | Smooth reveal, restrained parallax, subtle 3D |
| Decoration | Fine gold particles, graduation cap, paper texture |

## 6.2. Bố cục one-page gợi ý

1. **Hero / First impression** — nền navy hoặc ivory có vùng tương phản; headline lớn; tên Thục Khuê; chi tiết mũ tốt nghiệp; CTA cuộn đến lời chúc.
2. **Milestone moment** — một visual 3D nhỏ hoặc card/certificate nổi, nói về cột mốc học thuật.
3. **Personal message** — toàn bộ lời chúc chính, dễ đọc, có thể dùng card như tấm thiệp viết tay.
4. **HKT signature** — chữ ký ba người, lời kết và chi tiết vàng tinh tế.
5. **Footer** — “Made with pride, for Thục Khuê.”

Không cần ép buộc phải có navigation nhiều mục. Trải nghiệm một trang cuộn dọc là phù hợp hơn với món quà cá nhân.

## 6.3. Mobile-first layout

Mobile là thiết bị ưu tiên số một.

- Thiết kế trước ở viewport 360–390px.
- Không để headline, tên hoặc lời chúc bị tràn ngang.
- Hero nên có bố cục dọc; tránh nhét quá nhiều thành phần cạnh nhau.
- Button và tương tác chính có vùng chạm tối thiểu khoảng 44×44 CSS px.
- Nội dung chính không được bị che bởi notch, Dynamic Island hoặc home indicator.
- Dùng safe-area inset khi cần:

```css
.page-shell {
  padding-top: max(1rem, env(safe-area-inset-top));
  padding-bottom: max(1rem, env(safe-area-inset-bottom));
}
```

- Dùng `100svh`/`100dvh` có fallback hợp lý, không phụ thuộc duy nhất vào `100vh` trên iOS Safari.
- Không dùng hover làm phương thức duy nhất để lộ nội dung.
- Không dùng text quá nhỏ, đặc biệt trên card vàng/ivory.
- Không để animation khóa scroll hoặc tạo cảm giác trang bị treo.

## 6.4. Desktop layout

- Giới hạn content width khoảng 1040–1120px.
- Có thể chia layout 2 cột tại desktop: nội dung một bên, visual 3D/illustration một bên.
- Tránh phóng to mọi thành phần theo tỷ lệ màn hình; cần giữ bố cục có chủ đích.
- Có thể thêm hover states và parallax nhẹ trên desktop, nhưng không làm thay đổi nội dung cốt lõi.

---

# 7. 3D, Animation & Motion Design

## 7.1. Định hướng

Có hiệu ứng 3D nhưng phải nhẹ, thanh lịch và có mục đích. Chất lượng trải nghiệm quan trọng hơn độ phức tạp của công nghệ.

### Hiệu ứng ưu tiên

1. **CSS 3D envelope/card:** hiệu ứng mở thiệp hoặc card xoay nhẹ theo perspective.
2. **Floating graduation cap / diploma:** visual 3D nhẹ hoặc illustration có chiều sâu.
3. **Gold particles:** số lượng ít, chuyển động chậm, không che text.
4. **Scroll reveal:** headline, message và signature xuất hiện mềm mại khi vào viewport.
5. **Subtle parallax:** chỉ áp dụng khi phù hợp, không bắt buộc trên mobile.
6. **Confetti moment:** chỉ xuất hiện trong một khoảnh khắc có chủ ý, không chạy liên tục.

## 7.2. Chiến lược công nghệ 3D

Ưu tiên theo thứ tự:

1. CSS transforms / perspective / 3D card — ít tải, tương thích rộng.
2. SVG hoặc lightweight illustration với depth/shadow — cho icon, cap, ornament.
3. Three.js scene nhỏ, lazy-loaded — chỉ khi hiệu quả thị giác thực sự xứng đáng với chi phí.

Không sử dụng full-screen WebGL scene nặng làm nền chính của toàn bộ website.

Nếu sử dụng Three.js:

- Lazy-load bằng dynamic import sau khi nội dung chính đã hiển thị hoặc khi visual gần viewport.
- Giới hạn device pixel ratio, ví dụ `Math.min(window.devicePixelRatio || 1, 1.5)`.
- Hạn chế particle, geometry, material và texture size.
- Không tạo nhiều WebGL context.
- Tạm dừng render khi tab không visible (`visibilitychange`) hoặc visual ra khỏi viewport.
- Dispose geometry, material, texture và renderer đúng cách khi unmount.
- Xử lý WebGL context lost; có fallback SVG/CSS tĩnh.
- Nếu WebGL không khả dụng, website vẫn phải hoàn chỉnh và đẹp.
- Không bắt buộc người dùng phải có GPU mạnh để đọc nội dung.

## 7.3. Motion accessibility

Bắt buộc hỗ trợ `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

Đảm bảo người dùng chọn Reduce Motion vẫn xem được đầy đủ nội dung và không bị mất chức năng.

## 7.4. Quy định animation

- Không autoplay âm thanh.
- Không flash/strobe.
- Không chạy particle liên tục với mật độ cao.
- Không dùng cursor follower trên mobile.
- Không khóa scroll để phát animation.
- Không trì hoãn hiển thị lời chúc để chờ 3D load.
- Mọi animation phải có trạng thái tĩnh dự phòng.

---

# 8. Mobile Browser & In-App Browser Handling

## 8.1. Mục tiêu

Khi người dùng mở link từ Zalo hoặc Facebook, website cần nhận diện khả năng đang chạy bên trong in-app browser và đưa ra trải nghiệm phù hợp:

- Không làm trang lỗi hoặc trống.
- Không tự động redirect liên tục.
- Có thông báo ngắn, dễ hiểu rằng mở bằng Safari/Chrome có thể cho trải nghiệm đầy đủ hơn.
- Có nút thử mở trình duyệt ngoài.
- Có hướng dẫn thủ công nếu nút không hoạt động.

## 8.2. Giới hạn nền tảng — yêu cầu quan trọng

**Một website tĩnh không thể đảm bảo ép trình duyệt tích hợp bên trong Zalo/Facebook đóng lại và chuyển sang Safari hoặc Chrome trên mọi thiết bị.** Việc mở URL ngoài chịu sự kiểm soát của ứng dụng host, hệ điều hành, trình duyệt mặc định, cài đặt thiết bị và chính sách bảo mật.

### iPhone / iOS

- Không có API JavaScript phổ quát cho website để bắt buộc mở Safari.
- Không giả định có thể gọi trực tiếp native `SFSafariViewController`; đây là API dành cho ứng dụng native iOS, không phải API website.
- Không dùng custom URL scheme không được xác nhận hoặc redirect hack để giả vờ mở Safari.
- Có thể thử mở URL HTTPS trong một cửa sổ mới khi người dùng chủ động bấm nút, nhưng hành vi thực tế tùy in-app browser và có thể vẫn mở trong webview hoặc bị chặn.
- Nếu không mở được, hiển thị hướng dẫn thủ công: mở menu/chia sẻ của ứng dụng và chọn mục tương đương **Open in Safari / Mở bằng Safari / Open in Browser**. Tên menu có thể khác theo phiên bản ứng dụng.
- Nếu người dùng đã chọn Chrome làm default browser trên iOS, website không thể tự thay đổi lựa chọn hệ thống để bắt buộc Safari.

### Android

- Có thể cung cấp một nút mở Chrome thông qua Android `intent:` URL.
- Intent phải được kích hoạt bởi thao tác chủ động của người dùng (tap/click), không tự động chạy khi vừa load trang.
- Đặt `package=com.android.chrome` và `S.browser_fallback_url` để có đường dẫn HTTPS dự phòng khi Chrome không mở được.
- Chrome có thể chưa được cài đặt, bị vô hiệu hóa hoặc intent bị in-app browser chặn. Khi đó phải hiển thị hướng dẫn mở bằng trình duyệt ngoài hoặc tiếp tục xem website hiện tại.
- Không xem việc gọi intent là bảo đảm 100%.

## 8.3. Nhận diện in-app browser

Dùng User-Agent heuristic làm tín hiệu hỗ trợ, không xem là định danh tuyệt đối. User-Agent có thể thay đổi theo phiên bản hoặc bị rút gọn.

Các token có thể tham khảo:

- Facebook: `FBAN`, `FBAV`, `FB_IAB`, `FB4A`, `FBAN/Messenger`.
- Instagram: `Instagram`.
- Zalo: `Zalo` (nếu có trong UA của phiên bản đang kiểm thử).
- Android WebView: `; wv`, `Version/4.0` kết hợp với `Android`.
- iOS: `iPhone` / `iPad` / `iPod` cùng các token ứng dụng tích hợp.

Yêu cầu triển khai:

- Tách logic detect thành utility riêng, ví dụ `src/utils/browser-detection.ts`.
- Trả về loại thiết bị và loại môi trường theo mức tin cậy: `ios`, `android`, `in-app`, `facebook`, `zalo`, `unknown`.
- Không phụ thuộc duy nhất một token.
- Không hiển thị popup khó chịu trên mọi lần load. Có thể dùng banner/card nhỏ ở đầu trang hoặc một modal không chặn nội dung.
- Dù không nhận diện được in-app browser, người dùng vẫn tìm được mục “Mở bằng trình duyệt ngoài” trong phần trợ giúp/footer.

## 8.4. UX đề xuất

Khi detect được in-app browser:

**iPhone:**

> Bạn đang xem trong trình duyệt tích hợp. Để có trải nghiệm tốt nhất, hãy mở trang này bằng Safari.

CTA:

> Thử mở bằng Safari

Fallback:

> Nếu chưa mở được: chọn biểu tượng Chia sẻ hoặc menu của ứng dụng → Open in Safari / Mở bằng Safari.

**Android:**

> Để có trải nghiệm tốt nhất, hãy mở trang này bằng Chrome.

CTA:

> Mở bằng Chrome

Fallback:

> Nếu Chrome không mở, chọn menu của ứng dụng → Mở bằng trình duyệt.

Không dùng ngôn ngữ đổ lỗi cho Zalo/Facebook. Không làm người dùng hiểu nhầm rằng website đang gặp lỗi.

## 8.5. Android Chrome intent mẫu

Dùng hàm tạo URL từ URL hiện tại/canonical URL; encode fallback URL an toàn.

```ts
export function buildChromeIntentUrl(pageUrl: string): string {
  const target = new URL(pageUrl);
  const fallback = encodeURIComponent(target.toString());

  return `intent://${target.host}${target.pathname}${target.search}${target.hash}` +
    `#Intent;scheme=https;package=com.android.chrome;` +
    `S.browser_fallback_url=${fallback};end`;
}
```

Lưu ý:

- Nút phải là anchor/action được người dùng bấm trực tiếp, không tự động điều hướng.
- Kiểm thử URL thực tế trên Android Chrome và các in-app browser cần hỗ trợ.
- Khi intent thất bại, hiển thị nút HTTPS chuẩn để tiếp tục xem trang.
- Nếu site chạy dưới GitHub Pages project path, phải giữ nguyên path `/REPO/`.

## 8.6. iOS best-effort open

Có thể thử mở URL HTTPS khi người dùng bấm nút:

```ts
export function tryOpenExternalOnIOS(url: string): void {
  // Chỉ gọi từ sự kiện click/tap của người dùng.
  // Đây là best-effort; web page không thể bảo đảm host app sẽ mở Safari.
  window.open(url, "_blank", "noopener,noreferrer");
}
```

Không được ghi trong UI hoặc README rằng đoạn code này chắc chắn mở Safari. Nếu host app giữ trang trong webview hoặc chặn popup, phải hướng dẫn người dùng thao tác menu “Open in Safari”.

## 8.7. Không được làm

- Không tự động redirect ngay khi phát hiện Facebook/Zalo.
- Không tạo vòng lặp giữa URL hiện tại và custom scheme.
- Không sử dụng iframe hoặc hidden popup để lách giới hạn trình duyệt.
- Không tuyên bố ép iPhone mở Safari bằng website tĩnh.
- Không chặn người dùng tiếp tục xem trang trong in-app browser.

---

# 9. Social Sharing — Zalo & Facebook Link Preview

## 9.1. Mục tiêu

Khi gửi URL website qua Zalo hoặc Facebook Messenger/feed, preview cần có:

- Hình ảnh đại diện riêng cho sự kiện.
- Tiêu đề đúng: `Congratulations, Thục Khuê!` hoặc phiên bản tiếng Việt tương đương.
- Mô tả ngắn, ấm áp.
- Đường dẫn canonical chính xác.

## 9.2. Open Graph metadata

Phải khai báo trong HTML được trả về ngay từ đầu, không chờ JavaScript render. Social crawler có thể chỉ đọc HTML ban đầu.

Ví dụ:

```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="THE GOLDEN MILESTONE" />
<meta property="og:title" content="Congratulations, Thục Khuê!" />
<meta
  property="og:description"
  content="Một hành trình nỗ lực, một cột mốc đáng tự hào. With love, HKT — Hoàng, Khải & Tâm."
/>
<meta property="og:url" content="https://YOUR-USERNAME.github.io/YOUR-REPO/" />
<meta property="og:image" content="https://YOUR-USERNAME.github.io/YOUR-REPO/assets/og-image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:alt" content="THE GOLDEN MILESTONE — Congratulations, Thục Khuê" />
<meta property="og:locale" content="vi_VN" />
```

Thêm Twitter/X card metadata để tăng khả năng tái sử dụng preview:

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Congratulations, Thục Khuê!" />
<meta
  name="twitter:description"
  content="A journey of dedication. A moment of pride. With love, HKT."
/>
<meta name="twitter:image" content="https://YOUR-USERNAME.github.io/YOUR-REPO/assets/og-image.jpg" />
```

Các URL metadata phải là absolute HTTPS URL. Thay toàn bộ placeholder bằng domain/repository URL thật sau khi xác định repo.

## 9.3. OG image specification

Tạo asset riêng:

- File: `og-image.jpg` hoặc `og-image.png`.
- Kích thước mục tiêu: **1200 × 630 px**.
- Aspect ratio: khoảng **1.91:1**.
- Định dạng: JPG chất lượng tốt hoặc PNG nếu artwork cần nét.
- Dung lượng khuyến nghị: tối ưu càng nhỏ càng tốt, mục tiêu dưới khoảng 500–600 KB nếu không làm giảm chất lượng đáng kể.
- Phải đọc tốt khi preview bị thu nhỏ.

### Visual direction của OG image

- Nền Midnight Navy hoặc Warm Ivory kết hợp một mảng vàng champagne.
- Headline lớn: `Congratulations, Thục Khuê!`
- Supporting line: `A journey of dedication. A moment of pride.`
- Có thể có mũ tốt nghiệp/diploma dạng illustration tinh tế.
- Chữ ký nhỏ: `With love, HKT`.
- Không đưa cả đoạn lời chúc dài lên OG image.
- Giữ nội dung quan trọng ở vùng trung tâm để tránh crop.
- Không dùng ảnh cá nhân nếu chưa có sự đồng ý.

## 9.4. Vì sao metadata phải nằm trong HTML tĩnh

Không chỉ set metadata bằng React/Vue hoặc JavaScript runtime sau khi page load. Crawler của social platforms có thể không thực thi toàn bộ JavaScript như browser thông thường. Hãy đảm bảo `index.html` đã chứa sẵn `og:title`, `og:description`, `og:url`, `og:image` trong `<head>`.

## 9.5. Kiểm thử preview

Sau khi deploy:

1. Mở URL public trực tiếp ở chế độ không đăng nhập.
2. Kiểm tra `og:image` tải được từ URL public, không yêu cầu cookie hoặc quyền truy cập.
3. Dùng Facebook Sharing Debugger để scrape URL và xem preview.
4. Chia sẻ link test vào Zalo cá nhân/nhóm để kiểm tra preview thực tế.
5. Nếu thay hình OG, nên đổi filename hoặc URL ảnh (ví dụ `og-image-v2.jpg`) để tránh cache cũ.
6. Lưu ý các nền tảng có thể cache preview; thay metadata không nhất thiết cập nhật ngay những bài đã chia sẻ.

---

# 10. Favicon & App Icons

Cần tạo bộ nhận diện icon đồng bộ với brand:

| File | Kích thước / định dạng | Mục đích |
|---|---|---|
| `favicon.svg` | SVG | Modern browsers |
| `favicon.ico` | ICO, có nhiều size | Browser fallback |
| `favicon-32x32.png` | 32×32 | Browser tab |
| `favicon-16x16.png` | 16×16 | Browser tab |
| `apple-touch-icon.png` | 180×180 | iOS Add to Home Screen |
| `site.webmanifest` | JSON | Icon metadata cho thiết bị hỗ trợ |

Concept icon:

- Monogram `HKT` hoặc một biểu tượng graduation cap tối giản.
- Nền Midnight Navy, biểu tượng Champagne Gold.
- Phải đọc được khi hiển thị rất nhỏ.
- Tránh chi tiết quá mảnh.

HTML mẫu:

```html
<link rel="icon" href="./favicon.ico" sizes="any" />
<link rel="icon" href="./favicon.svg" type="image/svg+xml" />
<link rel="icon" type="image/png" sizes="32x32" href="./favicon-32x32.png" />
<link rel="icon" type="image/png" sizes="16x16" href="./favicon-16x16.png" />
<link rel="apple-touch-icon" href="./apple-touch-icon.png" />
<link rel="manifest" href="./site.webmanifest" />
```

Chú ý base path GitHub Pages: dùng đường dẫn tương đối hoặc cơ chế build phù hợp, tránh `/favicon.svg` nếu project site được host dưới `/YOUR-REPO/`.

---

# 11. Technical Architecture

## 11.1. Deployment model

Website tĩnh, không cần server runtime.

```text
GitHub Repository
      |
      | push to main
      v
GitHub Actions
      |
      | install dependencies + build
      v
Static build output (dist/)
      |
      | upload-pages-artifact
      v
GitHub Pages
      |
      v
Public HTTPS website URL
```

## 11.2. Technology recommendation

Với một website cá nhân một trang, ưu tiên stack gọn:

- **Vite** — build tooling.
- **TypeScript** — type safety và bảo trì.
- **Vanilla TypeScript + HTML/CSS** — không cần framework nếu không có yêu cầu component phức tạp.
- **CSS 3D / SVG** — hiệu ứng chính.
- **Three.js** — chỉ thêm nếu cần 3D scene thực sự và được lazy-load.
- **GitHub Pages + GitHub Actions** — deploy.

Không cần Laravel, PHP, database, API server hoặc CMS cho phạm vi hiện tại.

Nếu agent chọn React, phải giải thích giá trị thực tế so với Vanilla TypeScript; không thêm React chỉ theo thói quen. Tránh dùng nhiều animation libraries cùng lúc.

## 11.3. Package strategy

- Chọn các phiên bản stable tương thích khi bắt đầu triển khai.
- Commit lockfile (`package-lock.json`, `pnpm-lock.yaml` hoặc tương ứng).
- Không dùng dependency không cần thiết.
- Chạy audit dependency và loại bỏ package không được sử dụng.
- Ghi rõ cách cài đặt/build trong README.

## 11.4. Cấu trúc thư mục gợi ý

```text
the-golden-milestone/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   ├── assets/
│   │   ├── og-image.jpg
│   │   ├── illustrations/
│   │   └── textures/
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png
│   └── site.webmanifest
├── src/
│   ├── main.ts
│   ├── styles/
│   │   ├── tokens.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   ├── components.css
│   │   └── motion.css
│   ├── components/
│   │   ├── Hero.ts
│   │   ├── Milestone.ts
│   │   ├── MessageCard.ts
│   │   ├── Signature.ts
│   │   └── BrowserHelp.ts
│   ├── effects/
│   │   ├── card-3d.ts
│   │   ├── particles.ts
│   │   └── three-scene.ts
│   └── utils/
│       ├── browser-detection.ts
│       ├── external-browser.ts
│       └── motion-preference.ts
├── docs/
│   └── DECISIONS.md
├── index.html
├── package.json
├── package-lock.json
├── tsconfig.json
├── vite.config.ts
├── README.md
└── .gitignore
```

Agent có thể điều chỉnh cấu trúc nếu dùng framework khác, nhưng phải giữ separation giữa content, design tokens, browser handling và effects.

---

# 12. GitHub Pages Deployment

## 12.1. URL dự kiến

Với repository thường:

```text
https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/
```

Nếu repository có tên `YOUR-USERNAME.github.io`, URL có thể là:

```text
https://YOUR-USERNAME.github.io/
```

Chưa có GitHub repository URL trong brief này. Agent không được tự bịa username hoặc repository name. Khi repo được tạo, cập nhật canonical URL, OG image URL và `base` tương ứng.

## 12.2. Vite base path

GitHub Pages project site thường có repository path. Cấu hình build phải tính đến điều này.

Ví dụ trong `vite.config.ts`:

```ts
import { defineConfig } from "vite";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const ownerName = process.env.GITHUB_REPOSITORY?.split("/")[0];
const isUserOrOrgSite = repoName === `${ownerName}.github.io`;
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  base: isGitHubActions && !isUserOrOrgSite
    ? `/${repoName}/`
    : "/",
});
```

Nếu agent dùng cấu hình khác, cần chứng minh đường dẫn asset, favicon và route vẫn đúng khi URL có base path.

## 12.3. GitHub Actions workflow mẫu

Tạo `.github/workflows/deploy.yml`:

```yaml
name: Deploy website to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v6

      - name: Setup Node
        uses: actions/setup-node@v6
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Upload GitHub Pages artifact
        uses: actions/upload-pages-artifact@v4
        with:
          path: ./dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Lưu ý:** Các action versions là cấu hình tham khảo tại thời điểm tạo brief; agent cần đối chiếu GitHub Docs và action release chính thức khi triển khai. Không tự nâng hoặc hạ phiên bản mà không kiểm tra tính tương thích.

## 12.4. GitHub settings

Sau khi push repository:

1. Mở repository → `Settings` → `Pages`.
2. Trong `Build and deployment`, chọn `GitHub Actions` làm source.
3. Push lên branch `main`.
4. Theo dõi workflow trong tab `Actions`.
5. Khi deploy thành công, lấy URL do GitHub Pages hiển thị.
6. Cập nhật URL thật vào `og:url`, `og:image`, canonical, README và browser-open logic nếu cần.

## 12.5. Base path pitfalls

- Không hard-code `/assets/...` nếu URL public có `/YOUR-REPO/`.
- Kiểm tra CSS `url()`, JS dynamic imports, favicon, OG image và manifest.
- Không chỉ kiểm tra localhost; build preview với base path giống GitHub Pages.
- Tránh SPA routing phức tạp vì đây là one-page static site.

---

# 13. Performance Requirements

## 13.1. Mục tiêu

Các con số dưới đây là budget mục tiêu để agent tối ưu và kiểm thử, không phải cam kết tự động đạt được trên mọi thiết bị/mạng.

- Nội dung hero và headline hiển thị ngay, không chờ Three.js.
- Initial JS payload mục tiêu dưới khoảng 150 KB gzip nếu không dùng framework nặng.
- Ảnh hero/OG và các asset tải ban đầu được nén hợp lý.
- Chỉ tải 3D runtime khi thực sự cần.
- Tránh layout shift khi font/ảnh tải xong.
- Animation mượt trên điện thoại tầm trung; giảm chi tiết khi GPU yếu.
- Không làm scroll giật hoặc bị chặn.

## 13.2. Image optimization

- Ưu tiên AVIF/WebP cho ảnh nội dung nếu tương thích; giữ fallback hợp lý.
- Dùng SVG cho icon/line illustration.
- Đặt width/height hoặc aspect-ratio để tránh layout shift.
- Lazy-load ảnh không nằm trong hero.
- Không dùng ảnh 4K/PNG khổng lồ làm background.
- Social preview OG cần một file JPG/PNG public ổn định, dễ crawler đọc.

## 13.3. Runtime optimization

- Không chạy animation loop nếu không cần.
- Dừng animation khi document hidden.
- Dùng `IntersectionObserver` để chỉ chạy effect khi vùng hiển thị.
- Giới hạn particle và pixel ratio.
- Dùng `requestAnimationFrame` có điều kiện; cleanup event listener/observer.
- Ưu tiên transform/opacity để animation tránh layout/reflow nặng.
- Không đọc/ghi layout lặp lại trong cùng frame.

## 13.4. Font optimization

- Chỉ nạp weight cần thiết.
- Dùng `font-display: swap` hoặc chiến lược phù hợp để text không bị ẩn.
- Chọn fallback gần với font chính để giảm layout shift.
- Kiểm tra dấu tiếng Việt ở toàn bộ heading và paragraph.

---

# 14. Safari & Cross-browser Compatibility

## 14.1. Browser targets

Ưu tiên kiểm thử:

1. iOS Safari trên iPhone.
2. Android Chrome.
3. Zalo in-app browser trên iOS và Android nếu có thiết bị thực tế.
4. Facebook in-app browser trên iOS và Android nếu có thiết bị thực tế.
5. Desktop Safari, Chrome, Edge và Firefox.

Không giả định Safari iOS và Chrome Android hoạt động giống desktop.

## 14.2. Safari-specific checks

- Viewport height và thanh địa chỉ động: kiểm tra `svh`/`dvh`, có fallback.
- Safe area: notch, Dynamic Island, home indicator.
- Scroll behavior và position sticky/fixed.
- `backdrop-filter`, mask, blend mode và filter phải có fallback nếu không hỗ trợ như mong đợi.
- Không dựa vào autoplay media.
- Kiểm tra `window.open` phải được gọi trực tiếp từ user gesture.
- Không dùng API mới mà thiếu feature detection/fallback.
- Kiểm tra WebGL unavailable/context lost.
- Kiểm tra font loading và text wrapping tiếng Việt.

## 14.3. CSS defensive patterns

Ví dụ viewport:

```css
.hero {
  min-height: 100vh;
  min-height: 100svh;
  min-height: 100dvh;
}
```

Ví dụ safe area:

```css
.site-footer {
  padding-bottom: calc(1.5rem + env(safe-area-inset-bottom));
}
```

Tránh sử dụng các CSS experimental làm điều kiện bắt buộc để trang hoạt động.

---

# 15. Accessibility & Usability

- HTML semantic: `header`, `main`, `section`, `footer`, heading theo thứ bậc.
- Hình ảnh có alt phù hợp; hình trang trí dùng alt rỗng.
- Button có label rõ ràng.
- Keyboard focus nhìn thấy được.
- Màu chữ đảm bảo contrast; không sử dụng gold nhạt trên ivory cho body text.
- Không truyền tải nội dung chỉ bằng màu sắc.
- Không có animation bắt buộc để hiểu nội dung.
- Hỗ trợ `prefers-reduced-motion`.
- Không tự động phát âm thanh.
- Không khóa zoom hoặc đặt `user-scalable=no`.
- Touch target đủ lớn trên smartphone.
- Browser-help modal/banner phải có nút đóng, focus hợp lý và không chặn nội dung.

---

# 16. SEO, Metadata & Head HTML Checklist

Trong `index.html` cần có:

- `<title>`.
- `meta name="description"`.
- `meta name="theme-color"`.
- `link rel="canonical"` với URL thật.
- Open Graph tags.
- Twitter card tags.
- Favicon links.
- Apple touch icon.
- Manifest nếu sử dụng.
- `lang="vi"` trên thẻ `<html>`.
- `viewport` chuẩn, có thể hỗ trợ `viewport-fit=cover`.

Ví dụ:

```html
<!doctype html>
<html lang="vi">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <meta name="theme-color" content="#172B46" />
    <title>Congratulations, Thục Khuê! — The Golden Milestone</title>
    <meta
      name="description"
      content="Một hành trình nỗ lực, một cột mốc đáng tự hào. Lời chúc từ HKT dành tặng Thục Khuê."
    />
    <!-- Canonical + Open Graph + Twitter + icons: set real deployed URLs -->
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.ts"></script>
  </body>
</html>
```

Lưu ý với Vite project site: Vite xử lý module entry trong build, nhưng các asset public và metadata phải được xác minh sau build; không copy nguyên path `/src/main.ts` vào output thủ công.

---

# 17. Testing Plan

## 17.1. Responsive viewports

Kiểm tra ít nhất:

| Nhóm | Viewport tham khảo | Mục tiêu |
|---|---:|---|
| Small phone | 320×568 | Không tràn ngang, nội dung vẫn đọc tốt |
| iPhone standard | 375×812 | Hero và card cân đối |
| iPhone modern | 390×844 hoặc tương đương | Safe area và viewport height |
| Large phone | 430×932 | Không kéo giãn quá đà |
| Tablet | 768×1024 | Bố cục chuyển hợp lý |
| Desktop | 1366×768 | Không quá rộng, visual cân đối |
| Large desktop | 1920×1080 | Giữ content max-width |

Các kích thước là viewport test đại diện, không phải danh sách thiết bị duy nhất.

## 17.2. Device/browser tests

### iPhone Safari

- Mở URL trực tiếp trong Safari.
- Scroll toàn trang.
- Xem hero và message card.
- Test button, tap, safe area, viewport height.
- Kiểm tra reduced motion.
- Kiểm tra font tiếng Việt.

### Zalo/Facebook iOS in-app browser

- Gửi link qua Zalo/Facebook rồi mở từ ứng dụng.
- Xác nhận website vẫn dùng được trong webview.
- Xác nhận thông báo mở Safari hiển thị đúng và không che nội dung.
- Test nút thử mở ngoài.
- Test hướng dẫn thủ công khi nút không hoạt động.
- Không đánh giá fail chỉ vì app không cho web page ép sang Safari; đây là giới hạn nền tảng.

### Android Chrome

- Mở trực tiếp.
- Test Android intent CTA.
- Test fallback khi Chrome không khả dụng nếu có thiết bị phù hợp.
- Test trong Zalo/Facebook in-app browser.

### Desktop

- Chrome/Edge/Safari/Firefox.
- Keyboard navigation.
- Hover/focus.
- Window resize.

## 17.3. Social preview tests

- Facebook Sharing Debugger: đúng title, description, image, URL.
- Zalo: gửi link thực tế và kiểm tra card preview.
- Mở trực tiếp OG image trong tab riêng, xác nhận HTTP 200.
- Kiểm tra preview khi URL có trailing slash và canonical URL.
- Kiểm tra asset URL không bị thiếu repo path.

## 17.4. Technical tests

- `npm ci` chạy thành công.
- `npm run build` chạy thành công.
- Không có lỗi console nghiêm trọng.
- Không có 404 cho JS/CSS/image/font/favicon.
- Build production hoạt động tại base path GitHub Pages.
- Kiểm tra accessibility cơ bản.
- Kiểm tra `prefers-reduced-motion`.
- Kiểm tra fallback khi WebGL không hoạt động.

---

# 18. Acceptance Criteria / Definition of Done

Dự án chỉ được xem là hoàn thành khi đáp ứng các nhóm sau.

## Visual & Content

- [ ] Đúng concept THE GOLDEN MILESTONE.
- [ ] Đúng bảng màu Champagne Gold / Midnight Navy / Warm Ivory.
- [ ] Typography hiển thị đúng dấu tiếng Việt.
- [ ] Lời chúc chính đầy đủ và đúng nội dung đã chốt.
- [ ] Chữ ký `From HKT (Hoàng - Khải - Tâm)` chính xác.
- [ ] Không xuất hiện ngày, trường, điểm số hoặc thông tin chưa được cung cấp.
- [ ] Tổng thể sang trọng, ấm áp, không giống trang quảng cáo/thiệp cưới.

## Mobile & Browsers

- [ ] Mobile-first, không tràn ngang ở viewport nhỏ.
- [ ] Nội dung quan trọng hiển thị ngay, không đợi 3D load.
- [ ] Safe area iPhone được xử lý.
- [ ] iOS Safari sử dụng được.
- [ ] Android Chrome sử dụng được.
- [ ] In-app browser Zalo/Facebook vẫn đọc được nội dung.
- [ ] Browser help có thông điệp và fallback rõ ràng.
- [ ] Không tự động redirect ép buộc.

## 3D & Performance

- [ ] Hiệu ứng 3D có mục đích, không quá nặng.
- [ ] Có fallback khi WebGL không khả dụng.
- [ ] Có reduced-motion mode.
- [ ] Animation được pause/giảm khi tab ẩn hoặc thiết bị yếu nếu phù hợp.
- [ ] Không autoplay audio.
- [ ] Không có layout shift/scroll jank đáng kể.

## Social Sharing & Branding

- [ ] `og:title`, `og:description`, `og:url`, `og:image` có trong HTML ban đầu.
- [ ] OG image public, HTTPS, 1200×630 hoặc tương đương 1.91:1.
- [ ] Link preview Facebook đã được kiểm tra.
- [ ] Link preview Zalo đã được kiểm tra.
- [ ] Favicon SVG/ICO/PNG hiển thị.
- [ ] Apple touch icon có.

## Deployment

- [ ] GitHub Actions workflow hoạt động.
- [ ] GitHub Pages deploy thành công.
- [ ] Base path đúng.
- [ ] Không có asset 404 ở production URL.
- [ ] README có hướng dẫn deploy và cập nhật site.

---

# 19. Risks & Decisions

| Rủi ro | Ảnh hưởng | Hướng xử lý |
|---|---|---|
| In-app browser không cho mở Safari tự động | Không thể force tuyệt đối | Best-effort CTA + hướng dẫn thủ công |
| OG preview bị cache | Preview cũ sau khi đổi ảnh | Facebook debugger, đổi URL ảnh khi cần, test lại Zalo |
| GitHub Pages project path | Asset 404 | Cấu hình Vite base, test build production |
| Three.js nặng trên mobile | Lag, nóng máy, hao pin | Lazy-load, giảm DPR, CSS fallback |
| Safari viewport khác desktop | Hero bị cắt/nhảy | `svh`/`dvh`, safe area, thiết bị thực tế |
| Font tải chậm | Layout shift | Self-host/WOFF2, subset, fallback |
| UA detection thiếu chính xác | Browser help hiện sai | Heuristic nhiều tín hiệu, luôn có manual option |

## Các quyết định cần giữ

1. Đây là static gift website, không cần backend.
2. Mobile-first là tiêu chí số một.
3. 3D không được đánh đổi khả năng đọc và tốc độ.
4. Không cam kết force Safari từ website tĩnh.
5. Metadata Open Graph phải nằm trong HTML ban đầu.
6. Favicon và social preview là yêu cầu bắt buộc, không phải phần trang trí tùy chọn.

---

# 20. Agent Execution Plan

Thực hiện theo các phase sau; báo cáo kết quả từng phase trong tiến trình làm việc.

## Phase 1 — Repository reconnaissance

- Kiểm tra repo, branch, package manager và file hiện có.
- Xác nhận repo mới hay repo đã có code.
- Xác định GitHub Pages URL/base path dự kiến; nếu chưa có repo name, ghi rõ placeholder.
- Lập danh sách câu hỏi/blocker thực sự cần user cung cấp; không hỏi lại các thông tin đã có trong brief.

**Deliverable:** `docs/IMPLEMENTATION_PLAN.md` hoặc kế hoạch ngắn trong README.

## Phase 2 — Design foundation

- Tạo design tokens.
- Thiết kế typography và responsive layout.
- Tạo OG preview art và icon system.
- Hoàn thiện hero + message card tĩnh trước khi làm animation.

**Deliverable:** phiên bản website tĩnh, responsive, nội dung hoàn chỉnh.

## Phase 3 — Interaction & 3D

- Thêm CSS 3D card/envelope.
- Thêm reveal và particle vừa đủ.
- Nếu Three.js thật sự cần thiết, thêm scene nhỏ, lazy-load và fallback.
- Thêm reduced-motion và cleanup logic.

**Deliverable:** animation hoạt động, hiệu năng không làm giảm trải nghiệm mobile.

## Phase 4 — Browser support

- Tách browser detection utility.
- Thêm browser-help UI.
- Android Chrome intent CTA có HTTPS fallback.
- iOS best-effort new-window CTA và hướng dẫn mở thủ công.
- Xác nhận không có auto redirect.

**Deliverable:** browser-handling flow và ghi chú giới hạn thực tế.

## Phase 5 — Social metadata & assets

- Hoàn thành OG tags trong `index.html`.
- Tạo OG image đúng tỷ lệ.
- Tạo favicon set và apple-touch icon.
- Xác minh tất cả URL asset sau deploy.

**Deliverable:** link preview/favicons sẵn sàng kiểm thử.

## Phase 6 — Build, test & deploy

- Build production.
- Test base path.
- Test responsive/browser checklist.
- Tạo GitHub Actions workflow.
- Deploy GitHub Pages.
- Kiểm tra Facebook debugger và chia sẻ thực tế trên Zalo.

**Deliverable:** public URL, build/deploy status, test report và các giới hạn còn tồn tại.

---

# 21. Final Handoff Prompt — Copy cho AI Coding Agent

```text
Bạn đang triển khai dự án THE GOLDEN MILESTONE — một website chúc mừng cá nhân hóa dành cho Thục Khuê, do HKT (Hoàng - Khải - Tâm) gửi tặng.

Hãy đọc toàn bộ file THE_GOLDEN_MILESTONE_Website_Project_Brief.md trước khi bắt đầu.

Mục tiêu của bạn không chỉ là tạo một landing page đẹp. Bạn phải tạo một digital gift experience tinh tế, giàu cảm xúc, tải nhanh và hoạt động tốt trên smartphone — đặc biệt iPhone Safari và Android Chrome.

Yêu cầu cốt lõi:
- Brand: THE GOLDEN MILESTONE — A Celebration for Thục Khuê.
- Style: Academic Luxury / Editorial Celebration.
- Palette: Champagne Gold #C5A052, Midnight Navy #172B46, Warm Ivory #F8F1E3, Soft Champagne #E7D4AA, Antique Gold #A77B2D.
- Typography: Cormorant Garamond, Be Vietnam Pro, Dancing Script (script chỉ dùng điểm nhấn).
- Nội dung lời chúc và chữ ký phải giữ nguyên như trong brief.
- Mobile-first; hỗ trợ desktop nhưng tối ưu điện thoại trước.
- Có hiệu ứng CSS 3D/animation tinh tế. Three.js chỉ được dùng nếu thực sự cần, phải lazy-load, có fallback và không làm chậm nội dung chính.
- Hỗ trợ prefers-reduced-motion, safe areas, responsive viewport và Safari quirks.
- Nhận diện in-app browser Zalo/Facebook theo hướng heuristic. Không tự động redirect. Android có thể dùng Chrome intent khi user tap, có fallback URL. iOS chỉ best-effort và phải có hướng dẫn thủ công; tuyệt đối không tuyên bố website có thể force Safari 100%.
- Open Graph meta phải nằm trong HTML ban đầu; OG image 1200x630, có URL HTTPS công khai.
- Có favicon.svg, favicon.ico, PNG icons, apple-touch-icon.
- Deploy GitHub Pages qua GitHub Actions, chú ý base path `/REPOSITORY/`.

Cách làm:
1. Inspect repo trước, không ghi đè code hiện có khi chưa hiểu cấu trúc.
2. Đưa ra implementation plan ngắn và nêu rõ blocker.
3. Hoàn thiện layout/content tĩnh trước, sau đó mới thêm animation.
4. Kiểm tra build và base path production.
5. Test mobile Safari, Android Chrome, in-app browser fallback, OG metadata, favicon.
6. Cung cấp README, public URL và report các test đã chạy/chưa chạy.

Không thêm backend, database, analytics, login, form thu thập dữ liệu hoặc autoplay audio. Không dùng ảnh chân dung cá nhân khi chưa được cung cấp/cho phép. Không bịa GitHub username hoặc repo URL.

Chất lượng nghiệm thu được xác định bằng Acceptance Criteria trong brief, không chỉ bằng việc trang chạy được trên localhost.
```

---

# 22. Official / Technical References

Các nguồn sau dùng để xác nhận hành vi và tài liệu kỹ thuật. Agent cần kiểm tra lại phiên bản mới nhất khi triển khai.

## GitHub Pages

- GitHub Docs — Deploying your website automatically:  
  https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically
- GitHub Docs — Configuring a publishing source / GitHub Actions:  
  https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- GitHub Docs — Creating a GitHub Pages site:  
  https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Open Graph & social preview

- Open Graph Protocol:  
  https://ogp.me/
- Zalo Developers — Hướng dẫn tạo liên kết để chia sẻ:  
  https://stc-developers.zdn.vn/docs/v2/social-api/tham-khao/huong-dan-tao-lien-ket-de-chia-se
- Facebook Sharing Debugger:  
  https://developers.facebook.com/tools/debug/

## Browser opening behavior

- Apple Developer — Allowing apps and websites to link to your content (Universal Links):  
  https://developer.apple.com/documentation/xcode/allowing-apps-and-websites-to-link-to-your-content
- Apple Developer — SFSafariViewController:  
  https://developer.apple.com/documentation/safariservices/sfsafariviewcontroller
- Chrome Developers — Android Intents with Chrome:  
  https://developer.chrome.com/docs/android/intents

## Motion & rendering

- MDN — `prefers-reduced-motion`:  
  https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- MDN — WebGL context lost:  
  https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isContextLost

---

## End of Brief

**Project north star:** Make Thục Khuê feel that this is not just another congratulatory message, but a thoughtful digital keepsake created especially for her — beautiful on a phone, effortless to open, and worth remembering.
