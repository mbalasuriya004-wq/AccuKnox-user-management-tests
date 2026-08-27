# Log File Analyzer

## 1. Project Overview

The **Log File Analyzer** is a Python-based utility that analyzes web server log files such as Apache or Nginx access logs.

The script reads the log file, extracts important information from each request, and generates a summarized report.

The analyzer identifies:

* Total number of HTTP requests
* Number of `404 Not Found` errors
* Most requested pages
* IP addresses with the highest number of requests
* A summarized report displayed in the console
* A report file containing the analysis results

---

## 2. Objective

The objective of this project is to develop a Python script that can analyze web server logs and provide useful information about application traffic and errors.

The script helps identify:

* Frequently requested pages
* Missing or unavailable pages
* High-traffic IP addresses
* Overall request volume

---

## 3. Technologies Used

* **Python 3**
* **VS Code**
* Python `re` module
* Python `collections.Counter`
* Apache/Nginx-style access log format

No external Python packages are required.

---

## 4. Project Structure

```text
LogAnalyzer/
│
├── access.log
├── log_analyzer.py
├── log_report.txt
└── README.md
```

### File Description

| File              | Description                     |
| ----------------- | ------------------------------- |
| `access.log`      | Input web server log file       |
| `log_analyzer.py` | Main Python log analysis script |
| `log_report.txt`  | Generated summarized report     |
| `README.md`       | Project documentation           |

---

## 5. Prerequisites

Before running the project, make sure Python is installed on your Windows system.

Check the Python version using:

```powershell
python --version
```

Example:

```text
Python 3.12.5
```

VS Code is also recommended for editing and running the project.

---

## 6. Setup Instructions

### Step 1: Create the project folder

Create a folder named:

```text
LogAnalyzer
```

Example:

```text
C:\LogAnalyzer
```

### Step 2: Open the folder in VS Code

Open VS Code and select:

```text
File → Open Folder → LogAnalyzer
```

### Step 3: Create the required files

Create the following files:

```text
access.log
log_analyzer.py
README.md
```

The `log_report.txt` file will be created automatically when the script is executed if report generation is enabled.

---

## 7. Input Log Format

The analyzer works with Apache/Nginx-style access logs.

Example:

```text
192.168.1.10 - - [26/Aug/2026:10:15:01 +0000] "GET /index.html HTTP/1.1" 200 1024
192.168.1.20 - - [26/Aug/2026:10:15:02 +0000] "GET /login.html HTTP/1.1" 200 2048
192.168.1.10 - - [26/Aug/2026:10:15:03 +0000] "GET /missing.html HTTP/1.1" 404 512
```

Each request contains information such as:

* IP address
* Date and time
* HTTP method
* Requested URL/page
* HTTP protocol
* HTTP status code
* Response size

---

## 8. How the Script Works

The script follows these steps:

```text
Web Server Log
      ↓
Read Log File
      ↓
Read Each Log Entry
      ↓
Extract IP Address
      ↓
Extract Requested Page
      ↓
Extract HTTP Status Code
      ↓
Count Requests
      ↓
Identify 404 Errors
      ↓
Find Most Requested Pages
      ↓
Find Top IP Addresses
      ↓
Generate Summary Report
```

---

## 9. Running the Application

Open the VS Code terminal.

Use:

```powershell
python log_analyzer.py
```

Alternatively, you can use:

```powershell
py log_analyzer.py
```

---

## 10. Expected Console Output

After executing the script, the console will display a report similar to:

```text
=============================================
          WEB SERVER LOG ANALYZER
=============================================

Total Requests : 10
404 Errors     : 3

Most Requested Pages:
-----------------------------------
/index.html               3 requests
/missing.html              3 requests
/login.html                2 requests
/products.html             2 requests

Top IP Addresses:
-----------------------------------
192.168.1.10              5 requests
192.168.1.20              3 requests
192.168.1.30              2 requests

=============================================
```

---

## 11. Report File

The script can also save the analysis results to:

```text
log_report.txt
```

Example:

```text
=============================================
          WEB SERVER LOG ANALYZER
=============================================

Total Requests : 10
404 Errors     : 3

Most Requested Pages:
-----------------------------------
/index.html               3 requests
/missing.html             3 requests
/login.html               2 requests
/products.html            2 requests

Top IP Addresses:
-----------------------------------
192.168.1.10              5 requests
192.168.1.20              3 requests
192.168.1.30              2 requests

=============================================
```

---

## 12. Features

### Total Request Count

The script counts the total number of valid HTTP requests found in the log file.

### 404 Error Detection

The script checks HTTP status codes and counts all requests that returned:

```text
404
```

A `404` status indicates that the requested resource was not found.

### Most Requested Pages

The script identifies the pages that were requested most frequently.

Example:

```text
/index.html       20 requests
/login.html       15 requests
/products.html    10 requests
```

### Top IP Addresses

The script identifies the IP addresses that generated the highest number of requests.

Example:

```text
192.168.1.10      50 requests
192.168.1.20      35 requests
192.168.1.30      20 requests
```

### Report Generation

The analysis results can be displayed in the terminal and saved to a text file.

---

## 13. Error Handling

The script checks whether the specified log file exists.

If the file is missing, the program displays an error such as:

```text
Error: Log file 'access.log' was not found.
```

Invalid log entries that do not match the expected format are skipped.

---

## 14. Testing

The application can be tested using different log scenarios.

### Test Case 1: Normal Requests

Input:

```text
200
200
200
```

Expected result:

```text
Total Requests : 3
404 Errors     : 0
```

### Test Case 2: 404 Errors

Input:

```text
200
404
404
200
```

Expected result:

```text
Total Requests : 4
404 Errors     : 2
```

### Test Case 3: Multiple Requests from One IP

Input:

```text
192.168.1.10
192.168.1.10
192.168.1.10
192.168.1.20
```

Expected result:

```text
192.168.1.10    3 requests
192.168.1.20    1 request
```

### Test Case 4: Most Requested Page

Input:

```text
/index.html
/index.html
/login.html
/index.html
```

Expected result:

```text
/index.html    3 requests
/login.html    1 request
```

---

## 15. Advantages

* Simple and easy to use
* No external Python packages required
* Works with large log files by processing them line by line
* Detects 404 errors
* Identifies frequently requested pages
* Identifies high-request IP addresses
* Generates a summarized report
* Can be extended to analyze additional HTTP status codes

---

## 16. Possible Future Enhancements

The project can be enhanced with additional features such as:

* Analyze `400`, `401`, `403`, `500`, and other HTTP errors
* Calculate error percentages
* Analyze HTTP methods such as GET and POST
* Analyze requests by date and time
* Detect suspicious IP addresses
* Export reports to CSV
* Generate HTML reports
* Add graphical charts
* Monitor logs continuously in real time
* Support multiple log files
* Add command-line arguments for selecting log files

---

## 17. Example Command

Run the analyzer using:

```powershell
python log_analyzer.py
```

The script reads:

```text
access.log
```

and generates:

```text
log_report.txt
```

---

## 18. Conclusion

The **Log File Analyzer** provides a simple way to analyze web server access logs using Python.

It extracts useful information from log entries and summarizes:

* Total requests
* 404 errors
* Most requested pages
* Top requesting IP addresses

This project demonstrates practical usage of Python file handling, regular expressions, dictionaries, counters, and basic log analysis techniques.
