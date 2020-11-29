import Base from '../Base'

class Navbar extends Base {
    get signInButton() {
        return $('#signin_button')
    }

    get insideNavbar() {
        return $('.nav-tabs')
    }

    get settingsIcon() {
        return $('.icon-cog')
    }

    get helpButton() {
        return $('#help_link')
    }

    get searchBar() {
        return $('#searchTerm')
    }

    signInButtonIsVisible(){
        this.signInButton.waitForExist()
    }

    clickSignIn() {
        this.signInButton.waitForExist()
        this.signInButton.click()
    }

    insideNavbarIsVisible(){
        this.insideNavbar.waitForExist()
    }

    clickSettings() {
        this.settingsIcon.waitForExist()
        this.settingsIcon.click()
    }

    clickHelp() {
        this.helpButton.waitForExist()
        this.helpButton.click()
    }

    search(text) {
        this.searchBar.waitForExist()
        this.searchBar.setValue(text)
        browser.keys('Enter')
    }
}

export default new Navbar()