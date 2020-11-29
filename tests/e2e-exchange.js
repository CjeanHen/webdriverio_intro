import App from '../lib/page-objects/App'
import LoginPage from '../lib/page-objects/pages/LoginPage'
import Navbar from '../lib/page-objects/components/Navbar'

describe('E2E Tests - Currency Exchange', () => {
    it('logs in to application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('performs currency exchange', () => {
        $('#pay_bills_tab').waitForExist()
        $('#pay_bills_tab').click()
        $('#tabs > ul > li:nth-child(3) > a').waitForExist()
        $('#tabs > ul > li:nth-child(3) > a').click()

        const currencySelect = $('#pc_currency')
        currencySelect.waitForExist()
        currencySelect.selectByAttribute('value', 'EUR')

        $('#pc_amount').setValue('500')
        $('#pc_inDollars_true').click()
        $('#purchase_cash').click()

        const message = $('#alert_content')
        expect(message).toHaveText('Foreign currency cash was successfully purchased.')
    })
})