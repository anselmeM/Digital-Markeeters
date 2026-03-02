import pytest
from playwright.sync_api import Page, expect

def test_form_validation(page: Page):
    page.goto("http://localhost:8000")

    # Locate the form
    form = page.locator("form.form")
    email_input = form.locator("input[type='email']")
    submit_button = form.locator("button[type='submit']")

    # Check that the email input is correctly set up
    expect(email_input).to_be_visible()
    expect(email_input).to_have_attribute("type", "email")
    expect(email_input).to_have_attribute("required", "")
    expect(email_input).to_have_attribute("name", "email")
    expect(email_input).to_have_attribute("id", "email")
    expect(email_input).to_have_attribute("autocomplete", "email")
    expect(email_input).to_have_attribute("maxlength", "254")

    # Scroll to form
    form.scroll_into_view_if_needed()

    # Empty form - should be invalid
    is_valid = email_input.evaluate("el => el.checkValidity()")
    assert not is_valid

    # Try submitting invalid email - should be invalid
    email_input.fill("invalidemail")
    is_valid = email_input.evaluate("el => el.checkValidity()")
    assert not is_valid

    # Submit valid email
    email_input.fill("test@example.com")
    is_valid = email_input.evaluate("el => el.checkValidity()")
    assert is_valid

    # Verify form actually submits when valid
    with page.expect_navigation():
        submit_button.click()

    assert "email=test%40example.com" in page.url
