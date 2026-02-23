import sys
import subprocess
import time
import os
from playwright.sync_api import sync_playwright

def run_server():
    # Start the server in the background
    server_process = subprocess.Popen(
        [sys.executable, "-m", "http.server", "8000"],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
        cwd=os.getcwd()
    )
    time.sleep(2)  # Wait for server to start
    return server_process

def test_input_security():
    server = run_server()
    try:
        with sync_playwright() as p:
            browser = p.chromium.launch()
            page = browser.new_page()
            page.goto("http://localhost:8000")

            # Locate the input in the #get-in-touch section
            input_locator = page.locator("#get-in-touch .form input")

            # Check attributes
            input_type = input_locator.get_attribute("type")
            required = input_locator.get_attribute("required")
            name = input_locator.get_attribute("name")
            autocomplete = input_locator.get_attribute("autocomplete")
            placeholder = input_locator.get_attribute("placeholder")

            errors = []
            if input_type != "email":
                errors.append(f"Expected type='email', got '{input_type}'")
            if required is None and required != "": # Check if attribute exists (playwright returns None if missing, empty string if present but empty)
                # Actually get_attribute returns None if not present.
                # If present as boolean attribute (like 'required'), it usually returns empty string or 'required' depending on browser/implementation.
                # Playwright: "Returns the value of the element attribute."
                # For boolean attributes, it returns the empty string.
                # But wait, checking for None is safer for "missing".
                # If it returns empty string, it's present.
                pass

            # Refined check for required
            # Playwright get_attribute('required') returns '' if present.
            if required is None:
                errors.append("Expected 'required' attribute")

            if name != "email":
                errors.append(f"Expected name='email', got '{name}'")
            if autocomplete != "email":
                errors.append(f"Expected autocomplete='email', got '{autocomplete}'")
            if placeholder != "Enter your email":
                errors.append(f"Expected placeholder='Enter your email', got '{placeholder}'")

            if errors:
                print("Security Test FAILED:")
                for e in errors:
                    print(f" - {e}")
                sys.exit(1)
            else:
                print("Security Test PASSED")

            browser.close()
    except Exception as e:
        print(f"Test crashed: {e}")
        sys.exit(1)
    finally:
        server.terminate()
        server.wait()

if __name__ == "__main__":
    test_input_security()
