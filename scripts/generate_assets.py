import os
from PIL import Image, ImageDraw, ImageFont

public_dir = r"D:\Pictures\congratulations_khue\public"
assets_dir = os.path.join(public_dir, "assets")
os.makedirs(assets_dir, exist_ok=True)

# 1. Generate OG Image (1200 x 630)
og_width, og_height = 1200, 630
og_img = Image.new("RGB", (og_width, og_height), color="#172B46")
draw = ImageDraw.Draw(og_img)

# Outer decorative border
draw.rectangle([40, 40, og_width - 40, og_height - 40], outline="#C5A052", width=3)
draw.rectangle([52, 52, og_width - 52, og_height - 52], outline="#E7D4AA", width=1)

# Corner flourishes (diamonds)
corners = [(40, 40), (og_width - 40, 40), (40, og_height - 40), (og_width - 40, og_height - 40)]
for cx, cy in corners:
    draw.polygon([(cx, cy - 8), (cx + 8, cy), (cx, cy + 8), (cx - 8, cy)], fill="#C5A052")

# Draw graduation cap crest in center top
cap_center_x = og_width // 2
cap_top_y = 130
draw.polygon([
    (cap_center_x, cap_top_y - 25),
    (cap_center_x + 65, cap_top_y),
    (cap_center_x, cap_top_y + 25),
    (cap_center_x - 65, cap_top_y)
], outline="#C5A052", width=4)
draw.arc([cap_center_x - 38, cap_top_y + 10, cap_center_x + 38, cap_top_y + 55], 0, 180, fill="#C5A052", width=4)

# Text placement
try:
    font_eyebrow = ImageFont.truetype("georgia.ttf", 26)
    font_title = ImageFont.truetype("georgiab.ttf", 64)
    font_sub = ImageFont.truetype("georgiai.ttf", 32)
    font_signature = ImageFont.truetype("georgia.ttf", 24)
except Exception:
    font_eyebrow = ImageFont.load_default()
    font_title = ImageFont.load_default()
    font_sub = ImageFont.load_default()
    font_signature = ImageFont.load_default()

draw.text((og_width // 2, 230), "THE GOLDEN MILESTONE", fill="#E7D4AA", font=font_eyebrow, anchor="mm")
draw.text((og_width // 2, 320), "Congratulations, Thuc Khue!", fill="#FFFDF8", font=font_title, anchor="mm")
draw.text((og_width // 2, 400), "A journey of dedication. A moment of pride.", fill="#C5A052", font=font_sub, anchor="mm")

# Divider line
draw.line([(og_width // 2 - 120, 460), (og_width // 2 + 120, 460)], fill="#A77B2D", width=2)

draw.text((og_width // 2, 510), "With love, HKT - Hoang . Khai . Tam", fill="#E7D4AA", font=font_signature, anchor="mm")

og_path = os.path.join(assets_dir, "og-image.png")
og_img.save(og_path, "PNG", optimize=True)
print(f"Generated {og_path}")

# 2. Generate Apple Touch Icon (180 x 180)
touch_size = 180
touch_img = Image.new("RGB", (touch_size, touch_size), color="#172B46")
t_draw = ImageDraw.Draw(touch_img)
t_draw.rectangle([10, 10, touch_size - 10, touch_size - 10], outline="#C5A052", width=3)
tc_x = touch_size // 2
tc_y = touch_size // 2 - 10
t_draw.polygon([
    (tc_x, tc_y - 20),
    (tc_x + 45, tc_y),
    (tc_x, tc_y + 20),
    (tc_x - 45, tc_y)
], outline="#C5A052", width=3)
t_draw.arc([tc_x - 28, tc_y + 8, tc_x + 28, tc_y + 40], 0, 180, fill="#C5A052", width=3)
touch_path = os.path.join(public_dir, "apple-touch-icon.png")
touch_img.save(touch_path, "PNG")
print(f"Generated {touch_path}")

# 3. Generate Favicon 32x32 and Favicon.ico
fav_size = 32
fav_img = touch_img.resize((fav_size, fav_size), Image.Resampling.LANCZOS)
fav_png_path = os.path.join(public_dir, "favicon-32x32.png")
fav_img.save(fav_png_path, "PNG")

ico_path = os.path.join(public_dir, "favicon.ico")
touch_img.save(ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])
print(f"Generated {ico_path}")
