import os
import urllib.request
import json

os.makedirs("public/assets/news-and-features", exist_ok=True)

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}

def download_file(url, out_path):
    # remove query params for clean download if needed, or keep clean URL
    try:
        clean_url = url.split("?")[0] if "wp.com" not in url else url
        req = urllib.request.Request(clean_url, headers=headers)
        with urllib.request.urlopen(req, timeout=15) as resp:
            data = resp.read()
            with open(out_path, "wb") as f:
                f.write(data)
        print(f"Downloaded: {out_path} ({len(data)} bytes)")
    except Exception as e:
        print(f"Error downloading {url}: {e}")

# Download hero banner
hero_banner_url = "https://mcdberl.com/wp-content/uploads/2025/07/E1032AKW.avif"
download_file(hero_banner_url, "public/assets/news-and-features/hero-banner.avif")

# Also fallback/convert or check if it exists
with open("news_dump.json") as f:
    cards = json.load(f)

for card in cards:
    idx = card["index"]
    img_url = card["image"]
    ext = ".jpg"
    if ".png" in img_url.lower():
        ext = ".png"
    elif ".webp" in img_url.lower():
        ext = ".webp"
    elif ".avif" in img_url.lower():
        ext = ".avif"
    
    filename = f"news-card-{idx}{ext}"
    out_path = os.path.join("public/assets/news-and-features", filename)
    download_file(img_url, out_path)
    card["localImage"] = f"/assets/news-and-features/{filename}"

with open("news_dump_updated.json", "w") as f:
    json.dump(cards, f, indent=2)

print("Finished asset downloads!")
