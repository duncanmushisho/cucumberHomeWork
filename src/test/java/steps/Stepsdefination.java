package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import page.BankAndCashElements;
import page.LoginPage;
import page.TestBase;

public class Stepsdefination extends TestBase {
	LoginPage loginPage;
	BankAndCashElements bankPage;

	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		initDriver();
		loginPage = PageFactory.initElements(driver, LoginPage.class); //login page object is created well before the user is trying to login
		bankPage = PageFactory.initElements(driver,BankAndCashElements.class);
		driver.get("https://techfios.com/billing/?ng=login");

	}
	
	@When("^User enters the \"([^\"]*)\" in \"([^\"]*)\" field$")
	public void user_enters_the_in_field(String loginData, String field) {
		
	   if (field.equalsIgnoreCase("UserName")) {
		   System.out.println ("it should work" + loginData); 
		   System.out.println("ok lets see" + field); 

		   loginPage.enterUserName(loginData); 
		   
	   }else if (field.equalsIgnoreCase("PassWord")) {
		   loginPage.enterPassword(loginData);
	   }else {
		   System.out.println("unable to enter lokgin data:" + loginData);
	   }
	   
	}
	
	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		String expectedTitle = "Dashboard- iBilling";
		String actualTitle = loginPage.getPageTitle();
		Assert.assertEquals("page not found", expectedTitle, actualTitle);

	}
	@Then("^User clicks on \"([^\"]*)\"$")
	public void user_clicks_on(String buttonOrLink)  {
		System.out.println("ButtonOrLink:"+buttonOrLink);
		switch(buttonOrLink) {
		case "<login>":
			 loginPage.clickOnLoginButton();
		break;
		case "<bankCash>":
			System.out.println("Here");
			bankPage.clickOnBankAndCashButton();
		break;
		}
	   
	}

	@Then("^User enters \"([^\"]*)\" in accounts page$")
	public void user_enters_in_accounts_page(String arg1) {
	   
	}

	@Then("^User should be able to validate account created successfully$")
	public void user_should_be_able_to_validate_account_created_successfully()  {
	    
	}
}
