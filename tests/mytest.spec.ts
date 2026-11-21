import { test, expect, Page } from '@playwright/test';

// Нэвтрэх туслах функц: тест бүр өөрийн төлөвийг өөрөө бэлддэг (test isolation)
async function login(page: Page, user = 'standard_user', pass = 'secret_sauce') {
  await page.goto('https://www.saucedemo.com');
  await page.getByPlaceholder('Username').fill(user);
  await page.getByPlaceholder('Password').fill(pass);
  await page.getByRole('button', { name: 'Login' }).click();
}

// Гарах функц: цэсийг нээгээд Logout дарна
async function logout(page: Page) {
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByText('Logout').click();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
}

// Тест 1: зөв нэр, нууц үгээр амжилттай нэвтрэх
test('successful login', async ({ page }) => {
  await login(page);
  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText('Products')).toBeVisible();
  await logout(page);
});

// Тест 2: буруу нууц үгээр нэвтрэх үед алдааны мессеж гарна (сөрөг тест)
test('failed login shows error message', async ({ page }) => {
  await login(page, 'standard_user', 'wrong_password');
  await expect(page.getByText('Username and password do not match')).toBeVisible();
  await expect(page).toHaveURL('https://www.saucedemo.com/');
  // Нэвтрээгүй тул гарах шаардлагагүй
});

// Тест 3: нэвтэрсний дараа бараа сагслах
test('add item to cart after login', async ({ page }) => {
  await login(page);
  await page.getByRole('button', { name: 'Add to cart' }).first().click();
  await expect(page.locator('.shopping_cart_badge')).toHaveText('1');
  await logout(page);
});
