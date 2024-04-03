import HomePage from "../support/wiring/HomePage/HomePageFunctions"
import ReusableMethods from "../support/wiring/Reusables/ReusableMethod"

const homePage = new HomePage()
const reusableMethods = new ReusableMethods()

describe("E-Shopping Funtionality",()=>{
    let name = "ProtoCustomer"+reusableMethods.generateDateTimeString()
    const genderArray = ["Male","Female"]

    before(()=>{
        cy.visit("/")
    })

    it("login Validation",()=>{  
        cy.testCase("Login", "Validate user is able to login correctly s")
    homePage.setName(name)
            .setGenderBox(genderArray[Math.floor(Math.random()*2)])
            .assertTwoWayDataBindings(name)
            .assertMinLength()
            .disableEntrepenurRadioButton()
            .enableEntrepenurRadioButton()
            .clickShopButton()
            cy.casePassed("Login", "Validate user is able to login correctly")
    })
})