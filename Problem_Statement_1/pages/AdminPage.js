export class AdminPage{
 
    constructor(page){
 
        this.page = page;
        this.Admin_Section = page.getByRole('link', { name: 'Admin' });
        this.Add_User = page.getByRole('button', { name: 'Add' });
        this.Select_User_Role = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[1]/div/div[2]/div/div");
        this.User_Role_Admin_Option = page.getByRole('listbox').getByText('Admin');
        this.User_Role_ESS_Option = page.getByRole('listbox').getByText('ESS');
        this.Employee_Name_Input = page.getByRole('textbox', { name: 'Type for hints...' });
        this.Select_Employee_Name = page.getByText('sww  test', { exact: true }).first();
        this.Status_Dropdown = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[3]/div/div[2]/div/div");
        this.Select_Status_Enabled_Option = page.getByText('Enabled', { exact: true });
        this.Select_Status_Disabled_Option = page.getByText('Disabled', { exact: true });
        this.Username_Input = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div/form/div[1]/div/div[4]/div/div[2]/input");
        this.Password_Input = page.locator("(//input[@type='password'])[1]");
        this.Confirm_Password_Input = page.locator("(//input[@type='password'])[2]");
        this.Save_Button = page.locator("//button[normalize-space()='Save']");
 
        // Search
        this.Search_Username = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input");
        this.Search_UserRole = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div");
        this.Search_UserRole_Option_Admin = page.getByRole('listbox').getByText('Admin');
        this.Search_UserRole_Option_ESS = page.getByRole('listbox').getByText('ESS');
        this.Search_EmployeeName = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[3]/div/div[2]/div/div/input");
        this.Search_Status = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[4]/div/div[2]/div/div");
        this.Search_Status_Option_Enabled = page.getByRole('listbox').getByText('Enabled');
        this.Search_Status_Option_Disabled = page.getByRole('listbox').getByText('Disabled');
        this.Search_Button = page.locator("//button[normalize-space()='Search']");
        this.Reset_Button = page.locator("//button[normalize-space()='Reset']");

        // Update
        this.Edit_Button = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[1]/div/div[6]/div/button[2]");
        this.CheckBox_Password = page.locator("//label[normalize-space()='Yes']");
        this.Update_Search_Username = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input");

        //Delete
        this.Delete_Btn = page.locator("//*[@id='app']/div[1]/div[2]/div[2]/div/div[2]/div[3]/div/div[2]/div[2]/div/div[6]/div/button[1]");
        this.Confirm_Delete_Btn = page.locator("//button[normalize-space()='Yes, Delete']");
    
        // Success messages
        this.successSaved = page.getByText('Successfully Saved', { exact: true });
        this.successUpdated = page.getByText('Successfully Updated', { exact: true });
        this.successDeleted = page.getByText('Successfully Deleted', { exact: true });

        // Search results
        this.noRecordsFound = page.locator('p').filter({ hasText: 'No Records Found' });

        // Employee result
        this.Employee_result = page.locator('div').filter({ hasText: 'sww test' }).first();

        // Updated user
        this.updatedUser = page.getByText('update Tester', { exact: true });

        // Admin result
        this.adminResult = page.locator('div').filter({ hasText: 'Admin' }).first();

        //Navigate Admin
        this.Navigate_Header = page.locator("//h6[normalize-space()='Admin']");
    }
 
    async navigateToAdminSection() {
        await this.Admin_Section.click();
    }
 
    async CreateUser(){
 
        await this.Add_User.click();
        await this.page.waitForTimeout(2000);
        await this.Select_User_Role.click();
        await this.page.waitForTimeout(2000);
        await this.User_Role_Admin_Option.click();
        await this.page.waitForTimeout(2000);
        await this.Employee_Name_Input.fill("sww");
        await this.page.waitForTimeout(3000);
        await this.Select_Employee_Name.click();
        await this.page.waitForTimeout(2000);
        await this.Status_Dropdown.click();
        await this.page.waitForTimeout(2000);
        await this.Select_Status_Enabled_Option.click();
        await this.page.waitForTimeout(2000);
        await this.Username_Input.fill("testuser2000");
        await this.page.waitForTimeout(2000);
        await this.Password_Input.fill("testpassword@123");
        await this.page.waitForTimeout(2000);
        await this.Confirm_Password_Input.fill("testpassword@123");
        await this.page.waitForTimeout(2000);
        await this.Save_Button.click();
 
    }
 
    async Search_UserName(){
 
        await this.Search_Username.fill("Admin");
        await this.page.waitForTimeout(2000);
        await this.Search_Button.click();
    }
 
    async Search_User_role(){
 
        await this.Search_UserRole.click();
        await this.page.waitForTimeout(2000);
        await this.Search_UserRole_Option_Admin.click();
        await this.page.waitForTimeout(2000);
        await this.Search_Button.click();
    }
    async Search_Employee_name(){

        await this.page.waitForTimeout(2000);
        await this.Search_EmployeeName.fill("sww");
        await this.page.waitForTimeout(2000);
        await this.Select_Employee_Name.click();
        await this.page.waitForTimeout(2000);
        await this.Search_Button.click();
    }
 
    async Search_status(){
 
        await this.Search_Status.click();
        await this.page.waitForTimeout(2000);
        await this.Search_Status_Option_Enabled.click();
        await this.page.waitForTimeout(2000);
        await this.Search_Button.click();
    }

    async Update_User(){

        await this.Edit_Button.click();
        await this.page.waitForTimeout(2000);
        await this.Select_User_Role.click();
        await this.page.waitForTimeout(2000);
        await this.User_Role_ESS_Option.click();
        await this.page.waitForTimeout(2000);
        await this.Employee_Name_Input.fill("sww");
        await this.page.waitForTimeout(3000);
        await this.Select_Employee_Name.click();
        await this.page.waitForTimeout(2000);
        await this.Status_Dropdown.click();
        await this.page.waitForTimeout(2000);
        await this.Select_Status_Disabled_Option.click();
        await this.page.waitForTimeout(2000);
        await this.CheckBox_Password.check();
        await this.page.waitForTimeout(2000);
        await this.Username_Input.fill("Update testuser2000");
        await this.page.waitForTimeout(2000);
        await this.Password_Input.fill("Update_testpassword@123");
        await this.page.waitForTimeout(2000);
        await this.Confirm_Password_Input.fill("Update_testpassword@123");
        await this.page.waitForTimeout(2000);
        await this.Save_Button.click();

    }

    async Update_Search(){

        await this.page.waitForTimeout(2000);
        await this.Update_Search_Username.fill("update Tester");
        await this.Search_Button.click();
    }

    async Delete_User(){

        await this.Delete_Btn.click();
        await this.page.waitForTimeout(2000);
        await this.Confirm_Delete_Btn.click();
    }

    async Invalid_Search(){

        await this.Search_Username.fill("WWWWWWWWWWWW");
        await this.page.waitForTimeout(1000);
        await this.Search_Button.click();

    }
}