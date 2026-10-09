import urllib.request
import re
from PIL import Image
import numpy as np
import io

img1 = Image.open("/Users/jagath/.gemini/antigravity-ide/brain/526d652f-b7b9-4f0a-96f5-5e94786563e9/.user_uploaded/media_1791570271449.jpg").convert("RGB").resize((100, 100))
arr1 = np.array(img1).astype(float)

headers = {"User-Agent": "Mozilla/5.0"}
html = urllib.request.urlopen(urllib.request.Request("https://mcdberl.com/project/", headers=headers)).read().decode("utf-8", "ignore")
imgs = set(re.findall(r"https://[^\s\"'\(\)]+wp-content/uploads/[^\s\"'\(\)]+\.(?:webp|jpg|jpeg|png)", html))
print(f"Found unique images on /project/: {len(imgs)}")

for u in imgs:
    try:
        data = urllib.request.urlopen(urllib.request.Request(u, headers=headers), timeout=5).read()
        im = Image.open(io.BytesIO(data)).convert("RGB").resize((100, 100))
        diff = np.mean(np.abs(arr1 - np.array(im).astype(float)))
        if diff < 25:
            print(f"MATCH FOUND: {u} (diff: {diff})")
        elif diff < 40:
            print(f"CLOSE CANDIDATE: {u} (diff: {diff})")
    except Exception as e:
        pass

print("Done scanning /project/ images.")
