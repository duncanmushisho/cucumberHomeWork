package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class NewAccount {
	WebDriver driver;

	public NewAccount(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")
	WebElement newAccountButton;

	public void clickOnNewAccountButton() {

		newAccountButton.click();
	}
	
	public String getPageTitle() {
		return driver.getTitle();
		
	}

}