package Oct_bdd_txt.Mavenartifactquicktest;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BritishAirways {
	
		public static WebDriver driver;
	    public static void main( String[] args )
	    {
//initialise web driver
	System.setProperty("webdriver.gecko.driver","D:/geckodriver.exe" );
	driver = new FirefoxDriver();
	driver.get("https://www.britishairways.com");
	driver.manage().window().maximize();
	driver.findElement(By.className("book")).click();
	driver.findElement(By.className("holiday/flights")).click();
	
}
}
