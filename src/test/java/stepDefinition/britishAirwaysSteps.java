package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class britishAirwaysSteps {

	public static WebDriver driver;

	@Given("^click on registration link$")
	public void click_on_registration_link() throws Throwable {
		driver.findElement(By.className("register")).click();
	}

	@Then("^click for registration page is opened$")
	public void click_for_registration_page_is_opened() throws Throwable {
		String regPage = driver.getTitle();
		if (regPage.contains("Registration page")) {
			System.out.println("Passed : Registration page is opened");
		} else {
			System.out.println("Failed : Registration page is not available");
		}

	}

	@Given("^launch british airways url \"([^\"]*)\"$")
	public void launch_british_airways_url(String arg1) throws Throwable {
		System.setProperty("webdriver.gecko.driver", "D:/geckodriver.exe");
		driver = new FirefoxDriver();
		driver.get(arg1);
		driver.manage().window().maximize();

	}

	@Then("^enter email address \"([^\"]*)\"$")
	public void enter_email_address(String arg1) throws Throwable {
		driver.manage().window().maximize();
		driver.findElement(By.id("email")).sendKeys("dharanimadesh@gmail.com");

	}

	@Then("^confirm the email address \"([^\"]*)\"$")
	public void confirm_the_email_address(String arg1) throws Throwable {

		driver.findElement(By.id("confirm-email")).sendKeys("dharanimadesh@gmail.com");
	}

	@Then("^choose the password \"([^\"]*)\"$")
	public void choose_the_password(String arg1) throws Throwable {

		driver.findElement(By.id("pass")).sendKeys("Test$123");
	}

	@Then("^confirm the password \"([^\"]*)\"$")
	public void confirm_the_password(String arg1) throws Throwable {

		driver.findElement(By.id("confirm-password")).sendKeys("Test$123");
	}

	@Then("^select title \"([^\"]*)\"$")
	public void select_title(String arg1) throws Throwable {

		driver.findElement(By.id("title")).sendKeys("Mrs");
		
	}

	@Then("^enter First name \"([^\"]*)\"$")
	public void enter_First_name(String arg1) throws Throwable {

		driver.findElement(By.id("first-name")).sendKeys("Dharani");
	}

	@Then("^enter Last name \"([^\"]*)\"$")
	public void enter_Last_name(String arg1) throws Throwable {
		driver.findElement(By.id("family-name")).sendKeys("Madesh");
	}

	@Then("^enter Address line(\\d+) \"([^\"]*)\"$")
	public void enter_Address_line(int arg1, String arg2) throws Throwable {
		driver.findElement(By.id("homeaddress1")).sendKeys("31 Bremore court");
		driver.findElement(By.id("homeaddress2")).sendKeys("Bremore road");
	}

	@Then("^enter city \"([^\"]*)\"$")
	public void enter_city(String arg1) throws Throwable {
		driver.findElement(By.id("homecity")).sendKeys("London");
	}

	@Then("^enter country/Region of residence \"([^\"]*)\"$")
	public void enter_country_Region_of_residence(String arg1) throws Throwable {
		driver.findElement(By.id("homecountryname")).sendKeys("United Kingdom");
	}

	@Then("^select date of birth \"([^\"]*)\"$")
	public void select_date_of_birth(String arg1) throws Throwable {
		driver.findElement(By.id("birthdayLabel")).sendKeys("27 November 1990");
	}

	@Then("^select gender \"([^\"]*)\"$")
	public void select_gender(String arg1) throws Throwable {
		driver.findElement(By.id("genderlable")).sendKeys("Female");
	}

	@Then("^select Preferred language \"([^\"]*)\"$")
	public void select_Preferred_language(String arg1) throws Throwable {
		driver.findElement(By.id("pref_language")).sendKeys("English");

	}

	@Then("^Select checkbox \"([^\"]*)\"$")
	public void select_checkbox(String arg1) throws Throwable {

	}

	@Then("^click on join now$")
	public void click_on_join_know() throws Throwable {

	}
}
