Feature: Registration stuff

  Scenario Outline: Filling in Registration form
    Given I open EtherScan registration page
    Then I fill registration form using "<userType>"
    Then I see the correct warning messages for "<userType>"

    Examples:
      | userType               |
    # | validUser              | dissabled because of Cloudflare
      | empty                  |
      | shortPass              |
      | invalidEmail           |
      | emailMismatch          |
      | passwordMismatch       |
      | missingConfirmEmail    |
      | missingConfirmPassword |
      | noTermsAgreement       |
      | invalidCharsUsername   |
    # | duplicateEmail         | Currently its possible to register multiple times with the same email
      | maxLengthFields        |
      | unicodeCharacters      |