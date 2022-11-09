package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BankAndCashElements {
	
	WebDriver driver;
	
	public BankAndCashElements(WebDriver driver) {
		this.driver = driver;
	}
		@FindBy(how=How.XPATH,using="//*[@id=\"side-menu\"]/li[10]/a/i") WebElement bankAndCashButton;
		
		
		public void clickOnBankAndCashButton() {
			System.out.println("ReachedUntil Here");
			Actions action = new Actions(this.driver);
			action.moveToElement( bankAndCashButton).perform();

		}
		

}
