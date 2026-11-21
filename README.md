# Lab 01 – Playwright Setup

## 1. Төслийн тухай

Энэхүү лабораторийн ажлаар Playwright ашиглан автомат тестийн орчин үүсгэж, веб хуудасны үндсэн үйлдлүүдийг шалгав.

## 2. Ашигласан технологи

- Node.js
- Playwright
- TypeScript
- Chromium
- Firefox
- WebKit

## 3. Төслийн бүтэц

```text
lab01-playwright/
├── tests/
│   └── example.spec.ts
├── .gitignore
├── package.json
├── package-lock.json
├── playwright.config.ts
└── README.md
```

## 4. Суулгах заавар

Төслийг татаж авсны дараа дараах командыг ажиллуулна.

```bash
npm install
```

Browser-уудыг суулгах:

```bash
npx playwright install
```

## 5. Тест ажиллуулах

Бүх тестийг ажиллуулах:

```bash
npx playwright test
```

HTML тайлан харах:

```bash
npx playwright show-report
```

## 6. Тестийн үр дүн

Тестийг Chromium, Firefox болон WebKit гэсэн 3 browser дээр ажиллуулсан.

| Browser | Passed | Failed |
|:---|:---:|:---:|
| Chromium | 2 | 0 |
| Firefox | 2 | 0 |
| WebKit | 2 | 0 |
| **Нийт** | **6** | **0** |

**Үр дүн:** Нийт 6 тест амжилттай ажилласан. Алдаатай тест гараагүй.

## 7. Дүгнэлт

Энэхүү лабораторийн ажлаар Playwright тестийн орчныг амжилттай тохируулж, Chromium, Firefox болон WebKit browser дээр автомат тест ажиллуулж сурлаа.
