package page;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BankAndCashElements {
	
	WebDriver driver;
	
	public BankAndCashElements(WebDriver driver) {
		this.driver = driver;
	}
		@FindBy(how=How.XPATH,using="//*[@id=\"side-menu\"]/li[10]/a/span[1]") WebElement bankAndCashButton;
		
		
		public void clickOnBankAndCashButton() {
			bankAndCashButton.click();
		}
		

}
