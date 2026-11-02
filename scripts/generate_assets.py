import os
from PIL import Image, ImageDraw, ImageFilter

project_dir = r"D:\Pictures\congratulations_khue"
public_dir = os.path.join(project_dir, "public")
assets_dir = os.path.join(public_dir, "assets")
os.makedirs(assets_dir, exist_ok=True)

# 1. Generate Mortarboard Icon Set (180x180, 32x32, 16x16, ICO)
size = 180
icon = Image.new("RGB", (size, size), color="#172B46")
draw = ImageDraw.Draw(icon)

# Gold border
draw.rectangle([8, 8, size - 8, size - 8], outline="#C5A052", width=3)

# Mortarboard Diamond Top
cx = size // 2
cy = size // 2 - 5
board_points = [
    (cx, cy - 35),
    (cx + 65, cy - 2),
    (cx, cy + 30),
    (cx - 65, cy - 2)
]
draw.polygon(board_points, fill="#C5A052", outline="#E7D4AA", width=2)

# Skull cap under the board
draw.arc([cx - 36, cy + 12, cx + 36, cy + 62], 0, 180, fill="#C5A052", width=6)

# Central button
draw.ellipse([cx - 5, cy - 7, cx + 5, cy + 3], fill="#FFFDF8")

# Tassel line and tassel brush
draw.line([(cx, cy - 2), (cx + 42, cy + 28)], fill="#E7D4AA", width=4)
draw.polygon([(cx + 38, cy + 28), (cx + 46, cy + 28), (cx + 50, cy + 52), (cx + 36, cy + 52)], fill="#E7D4AA")

# Save Apple Touch Icon (180x180)
icon.save(os.path.join(public_dir, "apple-touch-icon.png"), "PNG", optimize=True)

# Save Favicon 32x32 & 16x16
fav32 = icon.resize((32, 32), Image.Resampling.LANCZOS)
fav32.save(os.path.join(public_dir, "favicon-32x32.png"), "PNG", optimize=True)

fav16 = icon.resize((16, 16), Image.Resampling.LANCZOS)
fav16.save(os.path.join(public_dir, "favicon-16x16.png"), "PNG", optimize=True)

# Save multi-size ICO
icon.save(os.path.join(public_dir, "favicon.ico"), format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])

# 2. Process Commemorative Image & 1200x630 Open Graph Image
thumb_src = os.path.join(project_dir, "Ảnh thumbnail link.png")
if os.path.exists(thumb_src):
    raw_img = Image.open(thumb_src).convert("RGB")

    # Save uncropped 1200x802 fallback JPG for in-page <picture>
    comm_jpg = raw_img.resize((1200, 802), Image.Resampling.LANCZOS)
    comm_jpg.save(os.path.join(assets_dir, "khue-commemorative.jpg"), "JPEG", quality=88, optimize=True)

    # Create 1200x630 OG image preserving 100% of artwork over blurred ambient backdrop
    og_w, og_h = 1200, 630
    bg = raw_img.resize((og_w, og_h), Image.Resampling.LANCZOS).filter(ImageFilter.GaussianBlur(radius=28))
    # Darken backdrop slightly so center artwork pops
    overlay = Image.new("RGB", (og_w, og_h), "#172B46")
    bg = Image.blend(bg, overlay, alpha=0.45)

    # Fit full uncropped image to height 630
    fg_h = og_h
    fg_w = int(raw_img.width * (fg_h / raw_img.height))
    fg = raw_img.resize((fg_w, fg_h), Image.Resampling.LANCZOS)
    offset_x = (og_w - fg_w) // 2
    bg.paste(fg, (offset_x, 0))

    # Subtle gold framing lines around the centered artwork
    og_draw = ImageDraw.Draw(bg)
    og_draw.line([(offset_x, 0), (offset_x, og_h)], fill="#C5A052", width=2)
    og_draw.line([(offset_x + fg_w, 0), (offset_x + fg_w, og_h)], fill="#C5A052", width=2)

    og_jpg_path = os.path.join(assets_dir, "og-image.jpg")
    bg.save(og_jpg_path, "JPEG", quality=90, optimize=True)

# Remove unused heavy PNGs from public/assets
for unused in ["og-preview-1200x630.png", "og-image.png"]:
    unused_path = os.path.join(assets_dir, unused)
    if os.path.exists(unused_path):
        os.remove(unused_path)

print("Assets updated successfully.")
