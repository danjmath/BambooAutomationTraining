import { expect, type Locator, type Page } from '@playwright/test';

//way 1
export class LoginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.locator('[data-test="username"]');
        this.password = page.locator('[data-test="password"]');
        this.loginButton = page.locator('[data-test="login-button"]');
    }
}

//way 2
export class LoginPage2 {
    get username() {
        return this.page.locator('[data-test="username"]');
    }
    get password() {
        return this.page.locator('[data-test="password"]');
    }
    get loginButton() {
        return this.page.locator('[data-test="login-button"]');
    }
    constructor(readonly page: Page) { }
}
