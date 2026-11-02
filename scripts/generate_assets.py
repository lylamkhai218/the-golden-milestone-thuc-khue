import os
from PIL import Image, ImageDraw

public_dir = r"D:\Pictures\congratulations_khue\public"
assets_dir = os.path.join(public_dir, "assets")
os.makedirs(assets_dir, exist_ok=True)

# Generate Apple Touch Icon (180 x 180) with Mortarboard
size = 180
icon = Image.new("RGB", (size, size), color="#172B46")
draw = ImageDraw.Draw(icon)

# Draw elegant gold border
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

# Save Apple Touch Icon
touch_path = os.path.join(public_dir, "apple-touch-icon.png")
icon.save(touch_path, "PNG")

# Favicon 32x32
fav32 = icon.resize((32, 32), Image.Resampling.LANCZOS)
fav32_path = os.path.join(public_dir, "favicon-32x32.png")
fav32.save(fav32_path, "PNG")

# Favicon 16x16 and ICO
fav16 = icon.resize((16, 16), Image.Resampling.LANCZOS)
fav48 = icon.resize((48, 48), Image.Resampling.LANCZOS)
ico_path = os.path.join(public_dir, "favicon.ico")
icon.save(ico_path, format="ICO", sizes=[(16, 16), (32, 32), (48, 48)])

print("Successfully generated mortarboard favicon icons.")
