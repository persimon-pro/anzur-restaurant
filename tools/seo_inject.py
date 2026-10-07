#!/usr/bin/env python3
"""Inject SEO head blocks, JSON-LD, robots.txt and sitemap.xml into the Anzur site."""
import json, re, subprocess, datetime, pathlib

ROOT = pathlib.Path("/Users/leonid/.gemini/antigravity/scratch/anzur-restaurant")
# >>> When a custom domain is connected, change ONLY this line and rerun. <<<
BASE = "https://anzur-restaurant.vercel.app"
OG = f"{BASE}/og-image.jpg"
PHONE = "+992917917917"
INSTAGRAM = "https://www.instagram.com/anzur.rest/"
LAT, LNG = 38.5766444, 68.8042161
MAP_URL = "https://www.google.com/maps/search/?api=1&query=38.5766444,68.8042161"
TODAY = datetime.date.today().isoformat()

MENU_LANGS = {  # file -> (hreflang, og locale, menu-data key)
    "menu_ru": ("ru", "ru_RU", "ru"),
    "menu_tj": ("tg", "tg_TJ", "tj"),
    "menu_en": ("en", "en_US", "en"),
    "menu_zh": ("zh", "zh_CN", "zh"),
}

PAGES = {
    "index": {
        "path": "/", "lang": "ru", "locale": "ru_RU",
        "title": "Ресторан «Анзур» в Душанбе — таджикская, европейская и паназиатская кухня, караоке, терраса",
        "desc": "Ресторан «Анзур» в Душанбе (ул. Дӯстии халқҳо, 10б, р-н Винзавода): национальная таджикская, европейская и паназиатская кухня, 3 VIP-кабины с караоке, летняя терраса, живая музыка. Бронь: +992 917 917 917.",
        "keywords": "ресторан Душанбе, Анзур, ресторан Анзур, таджикская кухня Душанбе, плов Душанбе, караоке Душанбе, VIP кабины Душанбе, ресторан с террасой Душанбе, банкет Душанбе, живая музыка Душанбе",
    },
    "booking": {
        "path": "/booking", "lang": "ru", "locale": "ru_RU",
        "title": "Забронировать стол онлайн — ресторан «Анзур», Душанбе | Схема зала",
        "desc": "Онлайн-бронирование столов в ресторане «Анзур» (Душанбе): интерактивная схема 1-го и 2-го яруса, летняя терраса и 3 VIP-кабины с караоке. Выберите стол и дату — подтверждение в WhatsApp.",
        "keywords": "забронировать стол Душанбе, бронь ресторана Душанбе, Анзур бронирование, VIP кабина караоке Душанбе",
    },
    "menu_ru": {
        "path": "/menu_ru", "lang": "ru", "locale": "ru_RU",
        "title": "Меню ресторана «Анзур» с ценами — Душанбе | Плов, шашлык, суши, стейки",
        "desc": "Полное меню ресторана «Анзур» в Душанбе с ценами в сомони: национальные блюда, плов, шашлык с мангала, хоспер, суши, пицца, супы, салаты и десерты.",
        "keywords": "меню Анзур, меню ресторана Душанбе, цены ресторан Душанбе, плов цена Душанбе",
    },
    "menu_tj": {
        "path": "/menu_tj", "lang": "tg", "locale": "tg_TJ",
        "title": "Менюи тарабхонаи «Анзур» бо нархҳо — Душанбе",
        "desc": "Менюи пурраи тарабхонаи «Анзур» дар Душанбе бо нархҳо: таомҳои миллӣ, палав, кабоб, суши, пицца, шӯрбоҳо, хӯришҳо ва десертҳо.",
        "keywords": "менюи Анзур, тарабхона Душанбе, палав Душанбе",
    },
    "menu_en": {
        "path": "/menu_en", "lang": "en", "locale": "en_US",
        "title": "Anzur Restaurant Menu & Prices — Dushanbe, Tajikistan",
        "desc": "Full menu of Anzur Restaurant in Dushanbe with prices in TJS: Tajik national dishes, plov, grilled kebabs, Josper steaks, sushi, pizza, soups and desserts.",
        "keywords": "Anzur restaurant menu, restaurant Dushanbe, Tajik food Dushanbe, plov Dushanbe",
    },
    "menu_zh": {
        "path": "/menu_zh", "lang": "zh", "locale": "zh_CN",
        "title": "安祖尔餐厅菜单与价格 — 杜尚别 | Anzur Restaurant",
        "desc": "杜尚别安祖尔餐厅完整菜单及价格（索莫尼）：塔吉克民族美食、手抓饭、炭烤串、牛排、寿司、披萨、汤品与甜点。",
        "keywords": "杜尚别餐厅, 安祖尔餐厅, 塔吉克美食, 杜尚别中文菜单",
    },
}

REMOVE_PATTERNS = [
    r'[ \t]*<title>.*?</title>\s*\n',
    r'[ \t]*<meta name="(description|robots|keywords|theme-color|geo\.[a-z]+|ICBM|twitter:[a-z]+)"[^>]*>\s*\n',
    r'[ \t]*<meta property="og:[a-z_:]+"[^>]*>\s*\n',
    r'[ \t]*<link rel="(canonical|alternate)"[^>]*>\s*\n',
    r'[ \t]*<!-- Open Graph -->\s*\n',
    r'[ \t]*<!-- SEO:START[^>]*-->.*?<!-- SEO:END -->\s*\n',
]


def esc(s):
    return s.replace("&", "&amp;").replace('"', "&quot;").replace("<", "&lt;")


def restaurant_ld():
    return {
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "@id": f"{BASE}/#restaurant",
        "name": "Ресторан «Анзур»",
        "alternateName": ["Anzur", "ANZUR Restaurant", "Анзур", "安祖尔餐厅"],
        "description": PAGES["index"]["desc"],
        "url": f"{BASE}/",
        "logo": f"{BASE}/anzur_logo_gold.png",
        "image": [OG, f"{BASE}/real_anzur_entrance.jpg", f"{BASE}/dish_real_plov.jpg"],
        "telephone": PHONE,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "ул. Дӯстии халқҳо, 10б",
            "addressLocality": "Душанбе",
            "addressRegion": "Душанбе",
            "addressCountry": "TJ",
        },
        "geo": {"@type": "GeoCoordinates", "latitude": LAT, "longitude": LNG},
        "hasMap": MAP_URL,
        "openingHoursSpecification": [{
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "10:00", "closes": "23:59",
        }],
        "servesCuisine": ["Таджикская", "Национальная", "Европейская", "Паназиатская", "Японская"],
        "currenciesAccepted": "TJS",
        "acceptsReservations": True,
        "hasMenu": [f"{BASE}/menu_ru", f"{BASE}/menu_tj", f"{BASE}/menu_en", f"{BASE}/menu_zh"],
        "sameAs": [INSTAGRAM],
        "amenityFeature": [
            {"@type": "LocationFeatureSpecification", "name": n, "value": True}
            for n in ["VIP-кабины с караоке (3)", "Летняя терраса", "Живая музыка", "Сцена и танцпол", "Банкеты"]
        ],
        "potentialAction": {
            "@type": "ReserveAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": f"{BASE}/booking",
                "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"],
            },
            "result": {"@type": "FoodEstablishmentReservation", "name": "Бронирование стола"},
        },
    }


def website_ld():
    return {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": f"{BASE}/#website",
        "url": f"{BASE}/",
        "name": "Ресторан «Анзур» — Душанбе",
        "inLanguage": ["ru", "tg", "en", "zh"],
        "publisher": {"@id": f"{BASE}/#restaurant"},
    }


def breadcrumb_ld(name, path):
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {"@type": "ListItem", "position": 1, "name": "Анзур", "item": f"{BASE}/"},
            {"@type": "ListItem", "position": 2, "name": name, "item": f"{BASE}{path}"},
        ],
    }


def load_menu():
    js = (ROOT / "anzur_menu_data.js").read_text(encoding="utf-8")
    out = subprocess.check_output(
        ["node", "-e", js + "\nprocess.stdout.write(JSON.stringify(ANZUR_MENU_CATEGORIES));"]
    )
    return json.loads(out)


def menu_ld(cats, key, lang, path, title):
    sections = []
    for c in cats:
        items = []
        for it in c.get("items", []):
            name = (it.get("name") or {}).get(key)
            if not name:
                continue
            item = {"@type": "MenuItem", "name": name}
            d = (it.get("desc") or {}).get(key)
            if d:
                item["description"] = d
            m = re.search(r"(\d+(?:[.,]\d+)?)", it.get("price", ""))
            if m:
                item["offers"] = {"@type": "Offer", "price": m.group(1).replace(",", "."), "priceCurrency": "TJS"}
            items.append(item)
        if items:
            sections.append({"@type": "MenuSection", "name": c["title"].get(key, c["id"]), "hasMenuItem": items})
    return {
        "@context": "https://schema.org",
        "@type": "Menu",
        "@id": f"{BASE}{path}#menu",
        "name": title,
        "inLanguage": lang,
        "url": f"{BASE}{path}",
        "mainEntityOfPage": f"{BASE}{path}",
        "hasMenuSection": sections,
    }


def ld_tag(obj):
    return '  <script type="application/ld+json">' + json.dumps(obj, ensure_ascii=False, separators=(",", ":")) + "</script>\n"


def head_block(key, cfg, extra_ld):
    url = f"{BASE}{cfg['path']}"
    lines = [
        "  <!-- SEO:START (generated by seo_inject.py) -->",
        f"  <title>{esc(cfg['title'])}</title>",
        f'  <meta name="description" content="{esc(cfg["desc"])}" />',
        f'  <meta name="keywords" content="{esc(cfg["keywords"])}" />',
        '  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />',
        '  <meta name="theme-color" content="#060504" />',
        '  <meta name="geo.region" content="TJ-DU" />',
        '  <meta name="geo.placename" content="Душанбе" />',
        f'  <meta name="geo.position" content="{LAT};{LNG}" />',
        f'  <meta name="ICBM" content="{LAT}, {LNG}" />',
        f'  <link rel="canonical" href="{url}" />',
    ]
    if key.startswith("menu_"):
        for f, (hl, _, _) in MENU_LANGS.items():
            lines.append(f'  <link rel="alternate" hreflang="{hl}" href="{BASE}/{f}" />')
        lines.append(f'  <link rel="alternate" hreflang="x-default" href="{BASE}/menu_ru" />')
    lines += [
        '  <meta property="og:type" content="restaurant.restaurant" />',
        '  <meta property="og:site_name" content="Ресторан «Анзур»" />',
        f'  <meta property="og:locale" content="{cfg["locale"]}" />',
        f'  <meta property="og:title" content="{esc(cfg["title"])}" />',
        f'  <meta property="og:description" content="{esc(cfg["desc"])}" />',
        f'  <meta property="og:url" content="{url}" />',
        f'  <meta property="og:image" content="{OG}" />',
        '  <meta property="og:image:width" content="1200" />',
        '  <meta property="og:image:height" content="630" />',
        '  <meta property="og:image:alt" content="Летняя терраса ресторана «Анзур» в Душанбе" />',
        '  <meta property="restaurant:contact_info:street_address" content="ул. Дӯстии халқҳо, 10б" />',
        '  <meta property="restaurant:contact_info:locality" content="Душанбе" />',
        '  <meta property="restaurant:contact_info:country_name" content="Tajikistan" />',
        f'  <meta property="restaurant:contact_info:phone_number" content="{PHONE}" />',
        '  <meta name="twitter:card" content="summary_large_image" />',
        f'  <meta name="twitter:title" content="{esc(cfg["title"])}" />',
        f'  <meta name="twitter:description" content="{esc(cfg["desc"])}" />',
        f'  <meta name="twitter:image" content="{OG}" />',
        '  <link rel="apple-touch-icon" href="/anzur_bulb_pure.png" />',
    ]
    block = "\n".join(lines) + "\n"
    for obj in extra_ld:
        block += ld_tag(obj)
    return block + "  <!-- SEO:END -->\n"


def main():
    cats = load_menu()
    for key, cfg in PAGES.items():
        p = ROOT / f"{key}.html"
        html = p.read_text(encoding="utf-8")
        for pat in REMOVE_PATTERNS:
            html = re.sub(pat, "", html, flags=re.S)
        html = re.sub(r'<html lang="[^"]*"', f'<html lang="{cfg["lang"]}"', html, count=1)

        if key == "index":
            ld = [restaurant_ld(), website_ld()]
        elif key == "booking":
            ld = [breadcrumb_ld("Бронирование стола", cfg["path"])]
        else:
            hl, _, mkey = MENU_LANGS[key]
            ld = [menu_ld(cats, mkey, hl, cfg["path"], cfg["title"]), breadcrumb_ld("Меню", cfg["path"])]

        block = head_block(key, cfg, ld)
        html, n = re.subn(r'(<meta name="viewport"[^>]*>\s*\n)', r"\1" + block.replace("\\", "\\\\"), html, count=1)
        assert n == 1, f"viewport meta not found in {key}"
        p.write_text(html, encoding="utf-8")
        print(f"ok {key}: {len(ld)} JSON-LD blocks")

    (ROOT / "robots.txt").write_text(
        "User-agent: *\nAllow: /\nDisallow: /backups/\nDisallow: /index.backup-v1.html\n\n"
        f"Sitemap: {BASE}/sitemap.xml\n", encoding="utf-8")

    urls = []
    for key, cfg in PAGES.items():
        alt = ""
        if key.startswith("menu_"):
            alt = "".join(f'\n    <xhtml:link rel="alternate" hreflang="{hl}" href="{BASE}/{f}"/>' for f, (hl, _, _) in MENU_LANGS.items())
            alt += f'\n    <xhtml:link rel="alternate" hreflang="x-default" href="{BASE}/menu_ru"/>'
        pr = "1.0" if key == "index" else ("0.9" if key in ("booking", "menu_ru") else "0.7")
        img = f"\n    <image:image><image:loc>{OG}</image:loc></image:image>" if key == "index" else ""
        urls.append(f"  <url>\n    <loc>{BASE}{cfg['path']}</loc>\n    <lastmod>{TODAY}</lastmod>\n"
                    f"    <changefreq>weekly</changefreq>\n    <priority>{pr}</priority>{alt}{img}\n  </url>")
    (ROOT / "sitemap.xml").write_text(
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" '
        'xmlns:xhtml="http://www.w3.org/1999/xhtml" '
        'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n'
        + "\n".join(urls) + "\n</urlset>\n", encoding="utf-8")
    print("ok robots.txt, sitemap.xml")


if __name__ == "__main__":
    main()
