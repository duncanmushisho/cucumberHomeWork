package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LoginPage {

	WebDriver driver;

	public LoginPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//*[@id=\"username\"]")
	WebElement usernameElement;
	@FindBy(how = How.XPATH, using = "//*[@id=\"password\"]")
	WebElement passwordElement;
	@FindBy(how = How.XPATH, using = "/html/body/div/div/div/form/div[3]/button")
	WebElement loginButton;
	
	public void enterUserName(String username) {
		System.out.println("From login Page:"+username);
		usernameElement.sendKeys(username);
		
	}
	
	public void enterPassword(String password) {
		passwordElement.sendKeys(password);
		
	}
	public void clickOnLoginButton() {
		loginButton.click();
		
	}
	public String getPageTitle() {
		return driver.getTitle();
	}
}






