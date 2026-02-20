from playwright.sync_api import sync_playwright

def verify_redesign():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        # Open the local file
        page.goto("file:///app/index.html")

        # Verify title
        title = page.title()
        print(f"Page title: {title}")
        assert "Marcy" in title

        # Verify a specific heading from the new design
        heading = page.text_content("h1")
        print(f"Heading: {heading}")
        assert "Digital" in heading or "Marcy" in heading

        # Take full page screenshot
        page.screenshot(path="verification/redesign_full.png", full_page=True)

        # Take specific section screenshots for closer inspection
        # Hero section
        page.locator("section").first.screenshot(path="verification/hero_redesign.png")

        # Projects section (assuming it's the second section or by ID if available)
        # In the new design, projects are likely in a section after hero.
        # Let's target by text content "Selected Works"
        try:
            projects_section = page.locator("section:has-text('Selected Works')").first
            projects_section.screenshot(path="verification/projects_redesign.png")
        except:
            print("Could not find 'Selected Works' section")

        # Footer
        page.locator("footer").screenshot(path="verification/footer_redesign.png")

        browser.close()

if __name__ == "__main__":
    verify_redesign()
