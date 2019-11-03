package Oct_bdd_txt.Mavenartifactquicktest;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
/**
 * Hello world!
 *
 */
public class App 
{
	public static WebDriver driver;
    public static void main( String[] args )
    {
       // Initialise web driver
    	System.setProperty("webdriver.gecko.driver","D:/geckodriver.exe" );
    	driver = new FirefoxDriver();
    	
    	
    
    	driver.manage().window().maximize();
    	driver.get("https://www.britishairways.com");
    	driver.findElement(By.className("register")).click();
    	driver.findElement(By.id("email")).sendKeys("dharanimadesh@gmail.com");
    	driver.findElement(By.id("confirm-email")).sendKeys("dharanimadesh@gmail.com");
    	driver.findElement(By.id("pass")).sendKeys("Test$123");
    	driver.findElement(By.id("confirm-password")).sendKeys("Test$123");
    
    }
    	
    	
    	
    
}





