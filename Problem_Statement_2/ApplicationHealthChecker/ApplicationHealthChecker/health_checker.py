import requests
import logging
from datetime import datetime

# Application URL
URL = "https://httpstat.us/504?sleep=60000"

# Request timeout in seconds
TIMEOUT = 10

# Configure logging
logging.basicConfig(
    filename="health_check.log",
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)

try:
    # Send GET request
    response = requests.get(URL, timeout=TIMEOUT)

    # Get current date and time
    current_time = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # Check application status
    if 200 <= response.status_code < 300:
        status = "UP"
    else:
        status = "DOWN"

    # Console output
    print("--------------------------------")
    print("Application Health Check")
    print("--------------------------------")
    print(f"Time        : {current_time}")
    print(f"URL         : {URL}")
    print(f"Status Code : {response.status_code}")
    print(f"Status      : {status}")
    print("--------------------------------")

    # Log output
    logging.info("Application Health Check")
    logging.info(f"URL: {URL}")
    logging.info(f"Status Code: {response.status_code}")
    logging.info(f"Status: {status}")

except requests.exceptions.Timeout:

    # Handle timeout
    logging.error("Application Health Check")
    logging.error(f"URL: {URL}")
    logging.error("Status Code: N/A")
    logging.error("Status: DOWN - Request Timed Out")

    print("--------------------------------")
    print("Application Health Check")
    print("--------------------------------")
    print(f"Time        : {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"URL         : {URL}")
    print("Status Code : N/A")
    print("Status      : DOWN - Request Timed Out")
    print("--------------------------------")

except requests.exceptions.ConnectionError:

    # Handle connection error
    logging.error("Application Health Check")
    logging.error(f"URL: {URL}")
    logging.error("Status Code: N/A")
    logging.error("Status: DOWN - Connection Failed")

    print("--------------------------------")
    print("Application Health Check")
    print("--------------------------------")
    print(f"Time        : {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"URL         : {URL}")
    print("Status Code : N/A")
    print("Status      : DOWN - Connection Failed")
    print("--------------------------------")

except requests.exceptions.RequestException as e:

    # Handle other request errors
    logging.error("Application Health Check")
    logging.error(f"URL: {URL}")
    logging.error("Status Code: N/A")
    logging.error(f"Status: DOWN - {e}")

    print("--------------------------------")
    print("Application Health Check")
    print("--------------------------------")
    print(f"Time        : {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print(f"URL         : {URL}")
    print("Status Code : N/A")
    print(f"Status      : DOWN - {e}")
    print("--------------------------------")