Lab 01 – Playwright Setup



1\. Төслийн тухай



Энэхүү лабораторийн ажлаар Playwright ашиглан автомат тестийн орчин үүсгэж, веб хуудасны үндсэн үйлдлүүдийг шалгав.



2\. Ашигласан технологи



Node.js



Playwright



TypeScript



Chromium



Firefox



WebKit



3\. Төслийн бүтэц



lab01-playwright/

├── tests/

│   └── example.spec.ts

├── .gitignore

├── package.json

├── package-lock.json

├── playwright.config.ts

└── README.md



4\. Суулгах заавар



npm install

npx playwright install



5\. Тест ажиллуулах



npx playwright test



HTML тайлан харах:



npx playwright show-report



6\. Тестийн үр дүн



Playwright тестийг 3 browser дээр ажиллуулсан.



Browser



Passed



Failed



Chromium



2



0



Firefox



2



0



WebKit



2



0



Нийт



6



0



Нийт 6 тест амжилттай ажилласан.



7\. Дүгнэлт



Playwright тестийн орчныг амжилттай тохируулж, Chromium, Firefox болон WebKit browser дээр автомат тестүүдийг ажиллуулан шалгав.

