import os
import subprocess
from pathlib import Path

# Load HTML template
template_path = Path("report_template.html")
if not template_path.exists():
    raise FileNotFoundError("report_template.html not found")

with open(template_path, "r", encoding="utf-8") as f:
    html_content = f.read()

# Load SVG logo
logo_path = Path("krmu_logo.svg")
if logo_path.exists():
    with open(logo_path, "r", encoding="utf-8") as f:
        svg_content = f.read()
else:
    svg_content = "<div style='font-size:24pt;font-weight:bold;color:#1e3a8a;'>K.R. MANGALAM UNIVERSITY</div>"

# Replace logo placeholder
html_content = html_content.replace("<!-- EMBED_KRMU_LOGO -->", svg_content)

html_path = os.path.abspath("LearnEasy_Community_Service_Project_Report_CS002.html")
with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"Generated HTML report at: {html_path}")

pdf_path = os.path.abspath("LearnEasy_Community_Service_Project_Report_CS002.pdf")
chrome_path = "C:/Program Files/Google/Chrome/Application/chrome.exe"
if not os.path.exists(chrome_path):
    chrome_path = "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe"

print(f"Using browser for PDF compilation: {chrome_path}")

cmd = [
    chrome_path,
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    f"--print-to-pdf={pdf_path}",
    html_path
]

res = subprocess.run(cmd, capture_output=True, text=True)
if os.path.exists(pdf_path) and os.path.getsize(pdf_path) > 0:
    print(f"SUCCESS: PDF generated cleanly! Size: {os.path.getsize(pdf_path)} bytes at {pdf_path}")
else:
    print(f"Error generating PDF. Return code: {res.returncode}, Stderr: {res.stderr}")
