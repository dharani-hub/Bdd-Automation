$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("britishairwaysregistration.feature");
formatter.feature({
  "line": 2,
  "name": "british airways registration",
  "description": "",
  "id": "british-airways-registration",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@BritishTest"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "british Airways registration by filling all mandatory fields",
  "description": "",
  "id": "british-airways-registration;british-airways-registration-by-filling-all-mandatory-fields",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "launch british airways url \"https://britishairways.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "click on registration link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click for registration page is opened",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "enter email address \"dharanimadesh@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "confirm the email address \"dharanimadesh@gmail.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "choose the password \"Test$123\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "confirm the password \"Test$123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "select title \"Mrs\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "enter First name \"Dharani\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "enter Last name \"Madesh\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "enter Address line1 \"31 Bremore court\"",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "enter Address line2 \"Bremore road\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "enter city \"London\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "enter country/Region of residence \"United Kingdom\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "select date of birth \"27 November 1990\"",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "select gender \"Female\"",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "select Preferred language \"English\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Select checkbox \"I agree to the current as notified on the website\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "click on join now",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://britishairways.com",
      "offset": 28
    }
  ],
  "location": "britishAirwaysSteps.launch_british_airways_url(String)"
});
formatter.result({
  "duration": 20894377700,
  "status": "passed"
});
formatter.match({
  "location": "britishAirwaysSteps.click_on_registration_link()"
});
formatter.result({
  "duration": 2986775400,
  "status": "passed"
});
formatter.match({
  "location": "britishAirwaysSteps.click_for_registration_page_is_opened()"
});
formatter.result({
  "duration": 3619600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dharanimadesh@gmail.com",
      "offset": 21
    }
  ],
  "location": "britishAirwaysSteps.enter_email_address(String)"
});
formatter.result({
  "duration": 93024200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dharanimadesh@gmail.com",
      "offset": 27
    }
  ],
  "location": "britishAirwaysSteps.confirm_the_email_address(String)"
});
formatter.result({
  "duration": 113613300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test$123",
      "offset": 21
    }
  ],
  "location": "britishAirwaysSteps.choose_the_password(String)"
});
formatter.result({
  "duration": 56330600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test$123",
      "offset": 22
    }
  ],
  "location": "britishAirwaysSteps.confirm_the_password(String)"
});
formatter.result({
  "duration": 45832800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mrs",
      "offset": 14
    }
  ],
  "location": "britishAirwaysSteps.select_title(String)"
});
formatter.result({
  "duration": 96096300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dharani",
      "offset": 18
    }
  ],
  "location": "britishAirwaysSteps.enter_First_name(String)"
});
formatter.result({
  "duration": 109107000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Madesh",
      "offset": 17
    }
  ],
  "location": "britishAirwaysSteps.enter_Last_name(String)"
});
formatter.result({
  "duration": 73017200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 18
    },
    {
      "val": "31 Bremore court",
      "offset": 21
    }
  ],
  "location": "britishAirwaysSteps.enter_Address_line(int,String)"
});
formatter.result({
  "duration": 193346100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 18
    },
    {
      "val": "Bremore road",
      "offset": 21
    }
  ],
  "location": "britishAirwaysSteps.enter_Address_line(int,String)"
});
formatter.result({
  "duration": 125948000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 12
    }
  ],
  "location": "britishAirwaysSteps.enter_city(String)"
});
formatter.result({
  "duration": 38309500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United Kingdom",
      "offset": 35
    }
  ],
  "location": "britishAirwaysSteps.enter_country_Region_of_residence(String)"
});
formatter.result({
  "duration": 86836200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "27 November 1990",
      "offset": 22
    }
  ],
  "location": "britishAirwaysSteps.select_date_of_birth(String)"
});
formatter.result({
  "duration": 69701900,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: Element \u003clabel id\u003d\"birthdayLabel\" class\u003d\"hiddencontent\"\u003e is not reachable by keyboard\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-K2LCAO66\u0027, ip: \u0027192.168.86.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 70.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20191016161957, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 16932, moz:profile: C:\\Users\\dhara\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 81737269-2be0-4e9e-b5b5-cbc7fbc59642\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat stepDefinition.britishAirwaysSteps.select_date_of_birth(britishAirwaysSteps.java:100)\r\n\tat ✽.Then select date of birth \"27 November 1990\"(britishairwaysregistration.feature:19)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 15
    }
  ],
  "location": "britishAirwaysSteps.select_gender(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "English",
      "offset": 27
    }
  ],
  "location": "britishAirwaysSteps.select_Preferred_language(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "I agree to the current as notified on the website",
      "offset": 17
    }
  ],
  "location": "britishAirwaysSteps.select_checkbox(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "britishAirwaysSteps.click_on_join_know()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 3,
  "name": "British airways login",
  "description": "",
  "id": "british-airways-login",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@BritishTest"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "British airways login with all mandatory fields",
  "description": "",
  "id": "british-airways-login;british-airways-login-with-all-mandatory-fields",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "launch british airways url \"https://britishairways.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "enter valid login ID \"dharanimadesh@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "enter valid password \"Test$123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "check for login page entered successfully",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://britishairways.com",
      "offset": 28
    }
  ],
  "location": "britishAirwaysSteps.launch_british_airways_url(String)"
});
formatter.result({
  "duration": 16559297700,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-K2LCAO66\u0027, ip: \u0027192.168.86.24\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002713.0.1\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 70.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20191016161957, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 24536, moz:profile: C:\\Users\\dhara\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 663bd00f-dff9-4115-a32d-dcbb5fa2ae89\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\r\n\tat stepDefinition.britishAirwaysSteps.launch_british_airways_url(britishAirwaysSteps.java:35)\r\n\tat ✽.Given launch british airways url \"https://britishairways.com\"(login.feature:7)\r\n",
  "status": "failed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 13,
  "name": "British airways with invalid inputs",
  "description": "",
  "id": "british-airways-login;british-airways-with-invalid-inputs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 14,
  "name": "launch british airways url \"https://britishairways.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "enter invalid login ID \"req@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter valid password \"Test$123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "check for error message",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "british-airways-login;british-airways-with-invalid-inputs;",
  "rows": [
    {
      "cells": [
        "name",
        "value",
        "status"
      ],
      "line": 20,
      "id": "british-airways-login;british-airways-with-invalid-inputs;;1"
    },
    {
      "cells": [
        "name1",
        "5",
        "success"
      ],
      "line": 21,
      "id": "british-airways-login;british-airways-with-invalid-inputs;;2"
    },
    {
      "cells": [
        "name2",
        "7",
        "Fail"
      ],
      "line": 22,
      "id": "british-airways-login;british-airways-with-invalid-inputs;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 21,
  "name": "British airways with invalid inputs",
  "description": "",
  "id": "british-airways-login;british-airways-with-invalid-inputs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@BritishTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "launch british airways url \"https://britishairways.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "enter invalid login ID \"req@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter valid password \"Test$123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "check for error message",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://britishairways.com",
      "offset": 28
    }
  ],
  "location": "britishAirwaysSteps.launch_british_airways_url(String)"
});
formatter.result({
  "duration": 13964963400,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 22,
  "name": "British airways with invalid inputs",
  "description": "",
  "id": "british-airways-login;british-airways-with-invalid-inputs;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@BritishTest"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "launch british airways url \"https://britishairways.com\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "enter invalid login ID \"req@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "enter valid password \"Test$123\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "check for error message",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://britishairways.com",
      "offset": 28
    }
  ],
  "location": "britishAirwaysSteps.launch_british_airways_url(String)"
});
formatter.result({
  "duration": 13007670600,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});