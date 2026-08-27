# 🧪 OrangeHRM User Management Automation

A **Playwright + JavaScript** automation framework for testing the **User Management / Admin module** of OrangeHRM using the **Page Object Model (POM)** design pattern.

---

## 📌 Project Overview

This project automates the end-to-end User Management flow in OrangeHRM.

The automation covers:

* Navigating to the Admin module
* Creating a new ESS user
* Searching users using different criteria
* Editing user details
* Validating updated information
* Deleting a user
* Validating user deletion
* Handling invalid search scenarios

**Application:** OrangeHRM
**URL:** https://opensource-demo.orangehrmlive.com/web/index.php/auth/login

---

## 🛠️ Tech Stack

| Technology      | Usage                    |
| --------------- | ------------------------ |
| JavaScript      | Programming Language     |
| Playwright      | Test Automation          |
| Node.js         | Runtime Environment      |
| POM             | Framework Design Pattern |
| Chromium        | Browser                  |
| Playwright Test | Test Runner              |

---

## 📂 Project Structure

```text
OrangeHRM-Automation/
│
├── pages/
│   ├── LoginPage.js
│   └── AdminPage.js
│
├── tests/
│   └── Scenarios.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## 🧩 Page Object Model

The framework follows the **Page Object Model (POM)** approach.

### LoginPage.js

Contains:

* Login page locators
* Username and password handling
* Login functionality
* Dashboard validation

### AdminPage.js

Contains:

* Admin navigation
* Add user functionality
* Search functionality
* User role selection
* Employee selection
* Status selection
* Edit user functionality
* Delete user functionality
* User validation

This keeps test cases clean, reusable, and easier to maintain.

---

## 🧪 Automated Test Cases

| Test ID | Test Scenario            |
| ------- | ------------------------ |
| TC_001  | Navigate to Admin Module |
| TC_002  | Add a New User           |
| TC_003  | Search by Username       |
| TC_004  | Search by User Role      |
| TC_005  | Search by Employee Name  |
| TC_006  | Search by Status         |
| TC_007  | Edit User Details        |
| TC_008  | Validate Updated Details |
| TC_009  | Delete User              |
| TC_010  | Invalid Search           |

---

## 🔄 Automation Flow

```text
Login
  ↓
Navigate to Admin
  ↓
Add New ESS User
  ↓
Search User
  ↓
Search by Role / Employee / Status
  ↓
Edit User Details
  ↓
Validate Updated Details
  ↓
Delete User
  ↓
Invalid Search
```

---

## ⚙️ Installation

Clone the project and install the required dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶️ Execute Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run specifically on Chromium:

```bash
npx playwright test --project=chromium
```

Run a specific test file:

```bash
npx playwright test tests/admin.spec.js
```

---

## 📊 Test Report

After execution, open the Playwright HTML report:

```bash
npx playwright show-report
```

The report provides:

* Test execution status
* Execution time
* Failed test details
* Screenshots
* Videos
* Trace information

---

## 🔍 Key Automation Features

### ✅ Page Object Model

Separates page locators and actions from test cases.

### ✅ Reusable Methods

Common actions such as login, search, edit, and delete are implemented as reusable methods.

### ✅ Assertions

Assertions are used to validate:

* Page navigation
* Successful user creation
* Search results
* Updated user details
* Successful deletion
* Invalid search results

### ✅ Failure Evidence

Playwright is configured to capture screenshots, videos, and traces when tests fail.

---

## 🔐 Test Credentials

For the OrangeHRM demo environment:

```text
Username: Admin
Password: admin123
```

> Demo credentials may change depending on the application environment.

---

## 📋 Test Data

```text
Role       : ESS
Employee   : Paul Collings
Username   : automationuser123
Status     : Enabled
Password   : Test@12345
```

Updated user:

```text
Username   : automationuser_updated
Role       : Admin
Status     : Disabled
```

---

## 🎯 Objective

The main objective of this automation framework is to demonstrate a structured and maintainable approach to **UI automation testing using Playwright with JavaScript and POM**.

The project validates the complete user-management lifecycle:

**Create → Search → Update → Validate → Delete → Verify**

---

## 👨‍💻 Author

**Bala Surya M**

**QA / Software Testing**

**Technologies:**
Playwright | JavaScript | Manual Testing | Automation Testing | POM

---

⭐ If you find this project useful, feel free to explore the test cases and automation framework.
