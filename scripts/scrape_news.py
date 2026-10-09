import urllib.request
import re
import os
from bs4 import BeautifulSoup
import json

url = "https://mcdberl.com/news-and-features/"
headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
}
req = urllib.request.Request(url, headers=headers)
html = urllib.request.urlopen(req, timeout=15).read().decode("utf-8", "ignore")

soup = BeautifulSoup(html, "html.parser")

# Hero section inspection
hero_style = ""
for style_tag in soup.find_all("style"):
    if "news-and-features" in style_tag.text or "banner" in style_tag.text.lower() or "elementor-element" in style_tag.text:
        matches = re.findall(r"url\((https?://[^)]+wp-content/uploads/[^)]+)\)", style_tag.text)
        if matches:
            print("Style image matches:", matches)

# Check cards
cards = soup.select(".ha-card")
print(f"Total ha-card found: {len(cards)}")

card_data = []
for i, card in enumerate(cards):
    title_el = card.select_one(".ha-card-title, .ha-card__title, h2, h3, h4")
    title = title_el.get_text(strip=True) if title_el else ""
    
    desc_el = card.select_one(".ha-card-description, .ha-card__description, p")
    desc = desc_el.get_text(strip=True) if desc_el else ""
    
    img_el = card.select_one("img")
    img_src = ""
    if img_el:
        img_src = img_el.get("data-src") or img_el.get("src") or ""
        
    link_el = card.select_one("a")
    link = link_el.get("href") if link_el else ""
    
    badge_el = card.select_one(".ha-card-badge, .ha-card__badge")
    badge = badge_el.get_text(strip=True) if badge_el else ""

    card_data.append({
        "index": i + 1,
        "title": title,
        "description": desc,
        "badge": badge,
        "image": img_src,
        "link": link
    })

print(json.dumps(card_data, indent=2))

with open("news_dump.json", "w") as f:
    json.dump(card_data, f, indent=2)
