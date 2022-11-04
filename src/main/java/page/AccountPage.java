package page;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import junit.framework.Assert;

public class AccountPage extends TestBase {

	WebDriver driver;

	public AccountPage(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//*[@id=\"account\"]")
	WebElement accountTitle;
	@FindBy(how = How.XPATH, using = "//*[@id=\"description\"]")
	WebElement description;
	@FindBy(how = How.XPATH, using = "//*[@id=\"balance\"]")
	WebElement initialBalance;
	@FindBy(how = How.XPATH, using = "//*[@id=\"account_number\"]")
	WebElement accountNumber;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_person\"]")
	WebElement contactName;
	@FindBy(how = How.XPATH, using = "//*[@id=\"contact_phone\"]")
	WebElement phoneNumber;
	@FindBy(how = How.XPATH, using = "//*[@id=\"ib_url\"]")
	WebElement internetBankURL;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement newAccountButton;
	@FindBy(how = How.XPATH, using = "//*[@id=\"ib_url\"]")
	WebElement bankingURL;
	@FindBy(how = How.XPATH, using = "//*[@id=\"page-wrapper\"]/div[3]/div[1]/div/div/div[2]/form/button")
	WebElement submitButton;

		String insertTitle;
	public void enterAccountTitle(String titleName) {
		insertTitle = titleName;
		accountTitle.sendKeys(titleName );
	}

	public void enterAccountDescription(String accDescription) {
		description.sendKeys(accDescription);

	}

	public void enterAccountinItialBalance(String amount) {
		initialBalance.sendKeys(amount);

	}

	public void enterAccountNumber(String accNumber) {
		accountNumber.sendKeys(accNumber + generateRandomNum(999));
	}

	public void enterContactNameDescription(String name) {
		contactName.sendKeys(name);

	}

	public void enterPhoneNumDescription( String phonenum) {
		phoneNumber.sendKeys(phonenum);

	}

	public void enterBankingURL(String bankURL) {
		bankingURL.sendKeys(bankURL);

	}
	 public void clickSubmitButton() {
	 submitButton.click();
	 }
	public void validatedAccountCreation() {
		

	 String startXpath = "//tbody/tr[";
	 String endXpath = 	"]/td[3]/a";	 
	 
	 for(int i=1;i>20;i++) {
		String actualName = driver.findElement(By.xpath(startXpath +i+ endXpath )).getTagName(); 
		Assert.assertEquals("PAGE NOT FOUND", insertTitle, actualName);
		break;
	 }
		}
}
