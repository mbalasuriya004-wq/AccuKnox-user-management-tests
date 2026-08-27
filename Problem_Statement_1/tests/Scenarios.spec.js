import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage.js';
import { AdminPage } from '../pages/AdminPage.js';

test.describe('Admin Module Tests', () => {

    let loginPage;
    let Adminpage;

    test.beforeEach(async ({ page, context }) => {

        test.setTimeout(60000);

        // Start tracing for every test
        await context.tracing.start({
            screenshots: true,
            snapshots: true,
            sources: true
        });

        loginPage = new LoginPage(page);
        Adminpage = new AdminPage(page);

        await loginPage.goto();
        await loginPage.login("Admin", "admin123");
    });


    test.afterEach(async ({ context }, testInfo) => {

        // Save individual trace for each test
        await context.tracing.stop({
            path: `test-results/traces/${testInfo.title.replace(/[^a-zA-Z0-9]/g, '_')}.zip`
        });

    });


    test("TC001 - Navigate to Admin Module", async () => {

        await Adminpage.navigateToAdminSection();

        await expect(Adminpage.Navigate_Header).toBeVisible();

    });


    test("TC002 - Add a New User", async () => {

        await Adminpage.navigateToAdminSection();

        await Adminpage.CreateUser();

        await expect(Adminpage.successSaved).toBeVisible();

    });


    test("TC003 - Search Newly Created User with Username", async () => {

        await Adminpage.navigateToAdminSection();

        await Adminpage.Search_UserName();

        await expect(Adminpage.adminResult).toBeVisible();

    });


    test("TC004 - Search Newly Created with User Role", async () => {

        await Adminpage.navigateToAdminSection();

        await Adminpage.Search_User_role();

        await expect(Adminpage.adminResult).toBeVisible();

    });


    test("TC005 - Search Newly Created User with Employee Name", async () => {

        await Adminpage.navigateToAdminSection();

        await Adminpage.Search_Employee_name();

        await expect(Adminpage.Employee_result).toBeVisible();

    });


    test("TC006 - Search Newly Created User with Status", async () => {

        await Adminpage.navigateToAdminSection();

        await Adminpage.Search_status();

        await expect(Adminpage.adminResult).toBeVisible();

    });


    test("TC007 - Edit All Possible User Details", async () => {

        await Adminpage.navigateToAdminSection();

        await Adminpage.Update_User();

        await expect(Adminpage.successUpdated).toBeVisible();

    });


    test("TC008 - Validate Updated User Details", async () => {

        await Adminpage.navigateToAdminSection();

        await Adminpage.Update_Search();

        // Only the Username was searched because it is unique
        // and sufficient to identify the updated user.
        await expect(Adminpage.updatedUser).toBeVisible();

    });


    test("TC009 - Delete the User", async () => {

        await Adminpage.navigateToAdminSection();

        await Adminpage.Delete_User();

        await expect(Adminpage.successDeleted).toBeVisible();

    });


    test("TC010 - Validate User Search with Invalid Username", async () => {

        await Adminpage.navigateToAdminSection();

        await Adminpage.Invalid_Search();

        await expect(Adminpage.noRecordsFound).toBeVisible();

    });

});