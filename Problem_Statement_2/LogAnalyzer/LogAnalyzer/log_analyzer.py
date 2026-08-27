from collections import Counter
import re


LOG_FILE = "test_case_4.log"


def analyze_log_file(filename):
    total_requests = 0
    error_404_count = 0

    ip_addresses = Counter()
    requested_pages = Counter()

    # Regular expression for Apache/Nginx access logs
    log_pattern = re.compile(
        r'(\S+) .*? "(\S+) (\S+) HTTP/\S+" (\d+)'
    )

    try:
        with open(filename, "r") as file:

            for line in file:

                match = log_pattern.search(line)

                if not match:
                    continue

                ip_address = match.group(1)
                page = match.group(3)
                status_code = match.group(4)

                # Count total requests
                total_requests += 1

                # Count IP addresses
                ip_addresses[ip_address] += 1

                # Count requested pages
                requested_pages[page] += 1

                # Count 404 errors
                if status_code == "404":
                    error_404_count += 1

        # Create report
        report = []

        report.append("=" * 45)
        report.append("          WEB SERVER LOG ANALYZER")
        report.append("=" * 45)

        report.append(f"\nTotal Requests : {total_requests}")
        report.append(f"404 Errors     : {error_404_count}")

        report.append("\nMost Requested Pages:")
        report.append("-" * 35)

        for page, count in requested_pages.most_common(5):
            report.append(f"{page:<25} {count} requests")

        report.append("\nTop IP Addresses:")
        report.append("-" * 35)

        for ip, count in ip_addresses.most_common(5):
            report.append(f"{ip:<25} {count} requests")

        report.append("\n" + "=" * 45)

        # Convert list into one string
        final_report = "\n".join(report)

        # Display report in console
        print(final_report)

        # Save report to file
        with open("log_report.txt", "w") as report_file:
            report_file.write(final_report)

        print("\nReport saved as log_report.txt")

    except FileNotFoundError:
        print(f"Error: Log file '{filename}' was not found.")


if __name__ == "__main__":
    analyze_log_file(LOG_FILE)