# Application Health Checker

## 1. Project Overview

The **Application Health Checker** is a Python-based utility that checks whether an application is available and functioning correctly.

The script sends an HTTP GET request to the specified application URL and evaluates the HTTP status code returned by the server.

The application is considered:

* **UP** when it returns a successful HTTP status code (`2xx`).
* **DOWN** when it returns a non-successful HTTP status code or when the application cannot be reached.

The script also handles connection failures and request timeouts.

---

## 2. Objectives

The main objectives of this project are:

* Check the availability of an application.
* Send an HTTP request to the application.
* Validate the HTTP response status code.
* Identify whether the application is UP or DOWN.
* Detect connection failures.
* Detect request timeouts.
* Display the health status in the console.
* Record health-check results in a log file.

---

## 3. Technologies Used

| Technology | Purpose                        |
| ---------- | ------------------------------ |
| Python     | Application development        |
| Requests   | Sending HTTP requests          |
| Logging    | Recording health-check results |
| VS Code    | Development environment        |
| Windows    | Operating system               |

---

## 4. Project Structure

```text
ApplicationHealthChecker/
│
├── health_checker.py
├── health_check.log
└── README.md
```

### Files Description

**health_checker.py**

Contains the Python script that performs the application health check.

**health_check.log**

Contains the health-check results recorded by the application.

**README.md**

Contains the project documentation, setup instructions, usage information, and test scenarios.

---

## 5. Prerequisites

Before running this project, install the following:

* Python 3.x
* VS Code
* Requests Python package

Verify Python installation using:

```powershell
python --version
```

Example:

```text
Python 3.13.5
```

---

## 6. Installation

### Step 1: Clone or create the project

Open the project folder in VS Code.

### Step 2: Open the VS Code Terminal

Select:

```text
Terminal → New Terminal
```

### Step 3: Install Requests

Run:

```powershell
pip install requests
```

Verify the installation:

```powershell
pip show requests
```

---

## 7. How to Run the Application

Open the VS Code terminal and navigate to the project folder.

Run:

```powershell
python health_checker.py
```

The script will ask for the application URL.

Example:

```text
Enter application URL: https://iam.v2-qa.internal2.onecare.co/login
```

The script will send an HTTP GET request to the provided URL.

---

## 8. Health Check Logic

The application checks the HTTP response status code.

### Successful Response

If the response status code is between `200` and `299`, the application is considered **UP**.

Example:

```text
HTTP Status Code: 200
Status: UP
```

### Unsuccessful Response

If the response status code is outside the `200–299` range, the application is considered **DOWN**.

Example:

```text
HTTP Status Code: 500
Status: DOWN
```

---

## 9. HTTP Status Code Handling

| Status Code | Description           | Result |
| ----------- | --------------------- | ------ |
| 200         | OK                    | UP     |
| 201         | Created               | UP     |
| 204         | No Content            | UP     |
| 400         | Bad Request           | DOWN   |
| 401         | Unauthorized          | DOWN*  |
| 403         | Forbidden             | DOWN*  |
| 404         | Not Found             | DOWN   |
| 500         | Internal Server Error | DOWN   |
| 502         | Bad Gateway           | DOWN   |
| 503         | Service Unavailable   | DOWN   |
| 504         | Gateway Timeout       | DOWN   |

> **Note:** The treatment of `401` and `403` depends on the application's health-check requirements. These responses indicate that the server responded, but the requested resource requires authorization or is forbidden. For a production health checker, these codes may be considered "reachable" rather than "DOWN."

---

## 10. Exception Handling

The script handles different types of failures.

### Connection Error

If the application cannot be reached:

```text
Application DOWN - Connection failed
```

### Timeout

If the application does not respond within the configured timeout:

```text
Application DOWN - Request timed out
```

### Other Request Errors

Unexpected HTTP/request-related errors are also handled and logged.

---

## 11. Example Output

### Application UP

```text
Application Health Check
-----------------------
Time        : 2026-08-27 11:30:00
URL         : https://iam.v2-qa.internal2.onecare.co/login
Status Code : 200
Status      : UP
```

### Application DOWN

```text
Application Health Check
-----------------------
Time        : 2026-08-27 11:31:00
URL         : https://iam.v2-qa.internal2.onecare.co/login
Status Code : 404
Status      : DOWN
```

### Connection Failure

```text
Application DOWN
Reason: Connection failed
```

### Timeout

```text
Application DOWN
Reason: Request timed out
```

---

## 12. Test Scenarios

### Test Case 1: Valid Application URL

**Input:**

```text
https://iam.v2-qa.internal2.onecare.co/login
```

**Expected Result:**

```text
Status Code : 200
Status      : UP
```

---

### Test Case 2: Invalid Page

**Input:**

```text
https://qa.internal2.onereach.app/api/research-agent/projects/162/propose-sequence
```

**Expected Result:**

```text
Status Code : 401
Status      : DOWN
```

---

### Test Case 3: Unavailable Local Server

**Input:**

```text
http://localhost:9999
```

If no application is running on port `9999`, the expected result is:

```text
Status : DOWN
Reason : Connection failed
```

---

### Test Case 4: Request Timeout

Use an application/server that does not respond within the configured timeout.

**Expected Result:**

```text
Status : DOWN
Reason : Request timed out
```

---

## 13. Logging

The application records health-check results in:

```text
health_check.log
```

Example:

```text
2026-08-27 11:30:00 - INFO - Application UP - Status Code: 200
2026-08-27 11:31:00 - ERROR - Application DOWN - Status Code: 500
```

This allows previous health-check results to be reviewed later.

---

## 14. Key Features

* HTTP-based application monitoring.
* Status-code validation.
* UP/DOWN status detection.
* Connection error handling.
* Timeout handling.
* Console output.
* Log file generation.
* Simple and easy to execute.
* Can be used with different application URLs.

---

## 15. Future Enhancements

The project can be enhanced by adding:

* Continuous monitoring.
* Automatic health checks at fixed intervals.
* Email alerts.
* SMS or notification alerts.
* Multiple application URL monitoring.
* Response-time measurement.
* CSV/JSON reporting.
* Dashboard for health status.
* Integration with CI/CD pipelines.
* Database storage for health-check history.

---

## 16. Conclusion

The Application Health Checker provides a simple way to determine whether an application is available by sending an HTTP request and analyzing the response.

It identifies successful applications as **UP** and unavailable or unsuccessful applications as **DOWN**, while also handling common connection and timeout failures.

This project demonstrates the use of Python for basic application monitoring and HTTP-based health checking.
