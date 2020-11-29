import App from '../lib/page-objects/App'
import LoginPage from '../lib/page-objects/pages/LoginPage'
import Navbar from '../lib/page-objects/components/Navbar'

describe('E2E Tests - Pay', () => {
    it('logs in to application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('Makes payment', () => {
        $('#pay_bills_tab').click()
        const selectPayee = $('#sp_payee')
        selectPayee.waitForExist()
        selectPayee.selectByAttribute('value', 'apple')
        const selectAccount = $('#sp_account')
        selectAccount.waitForExist()
        selectAccount.selectByVisibleText('Loan')
        const amount = $('#sp_amount')
        amount.setValue('500')
        $('#sp_date').setValue('2020-11-28')
        $('#sp_description').setValue('test')
        $('#pay_saved_payees').click()

        const message = $('#alert_content')
        expect(message).toHaveText('The payment was successfully submitted.')
    })
})