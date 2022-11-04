package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.AccountPage;
import page.BankAndCashElements;
import page.LoginPage;
import page.NewAccount;
import page.TestBase;

public class Stepsdefination extends TestBase {
	LoginPage loginPage;
	NewAccount newAccount;
	AccountPage accountPage;
	String titleName = "BUSINESS";
	String contactName = "Ricky Morty";
	String accNumber = "4544-54516-";
	String  phonenum ="469-584-2000";
	String initialBalance = "2,000,000.45";
	String bankURL = "www.chaseonline.com";
	String accDescription ="DOLLAR ACCOUNT";
	
	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		initDriver();
		driver.get("https://techfios.com/billing/?ng=login");

	}

	@When("^User enters the username \"([^\"]*)\"$")
	public void user_enters_the_username(String userName) {
		loginPage = PageFactory.initElements(driver, LoginPage.class);
		loginPage.enterUserName(userName);
	}

	@When("^User enters the password\"([^\"]*)\"$")
	public void user_enters_the_password(String passWord) {
		loginPage.enterPassword(passWord);
	}

	@When("^User clicks on login$")
	public void user_clicks_on_login() {
		loginPage.clickOnLoginButton();
	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginPage.getPageTitle();
		Assert.assertEquals("page not found", expectedTitle, actualTitle);

	}

	@Then("^User clicks on bankCash$")
	public void user_clicks_on_bankCash() {
		BankAndCashElements bankAndCashElements;
		bankAndCashElements = PageFactory.initElements(driver, BankAndCashElements.class);
		bankAndCashElements.clickOnBankAndCashButton();
	}

	@Then("^User clicks on newAccount$")
	public void user_clicks_on_newAccount() {
		newAccount = PageFactory.initElements(driver, NewAccount.class);
		newAccount.clickOnNewAccountButton();

	}

	@Then("^User enters \"([^\"]*)\" in accounts page$")
	public void user_enters_in_accounts_page(String arg1) {
		accountPage = PageFactory.initElements(driver, AccountPage.class);
		accountPage.enterAccountTitle(this.titleName  +generateRandomNum(999));
		
		}
	@When("^User enters description\"([^\"]*)\" in accounts page$")
	public void user_enters_description_in_accounts_page(String accDescription) {
		
		accountPage.enterAccountDescription(this.accDescription);
	}

	@When("^User enters initialBalance\"([^\"]*)\" in accounts page$")
	public void user_enters_initialBalance_in_accounts_page(String initialBalance) {
		accountPage.enterAccountinItialBalance(this.initialBalance);
	}

	@When("^User enters accountNumber\"([^\"]*)\" in accounts page$")
	public void user_enters_accountNumber_in_accounts_page(String accNumber)  {
	
		accountPage.enterAccountNumber(this.accNumber);
		
	}

	@When("^User enters contactPerson\"([^\"]*)\" in accounts page$")
	public void user_enters_contactPerson_in_accounts_page(String contactName)  {
		accountPage.enterContactNameDescription(this.contactName);
	}

	@When("^User enters Phone\"([^\"]*)\" in accounts page$")
	public void user_enters_Phone_in_accounts_page(String  phonenum) {
		accountPage.enterPhoneNumDescription( this.phonenum);
	}

	@When("^User enters internetBankingURL\"([^\"]*)\" in accounts page$")
	public void user_enters_internetBankingURL_in_accounts_page(String banURL ) {
		accountPage.enterBankingURL(this.bankURL);
	}


	@Then("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String arg1) {
		accountPage.clickSubmitButton();
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully() {
		accountPage.validatedAccountCreation();
		 tearDown();
	}
}
