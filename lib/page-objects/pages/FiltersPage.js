import Base from '../Base'

class FiltersPage extends Base {
    get description() {
        return $('#aa_description')
    }

    get submitButton() {
        return $('button[type="submit"]')
    }

    get filteredResults() {
        return $('#filtered_transactions_for_account')
    }

    get message() {
        return $('.well')
    }

    fillDescription(text) {
        this.description.waitForExist()
        this.description.setValue(text)
    }

    submitFilter() {
        this.submitButton.waitForExist()
        this.submitButton.click()   
    }

    resultsTableIsVisible() {
        this.filteredResults.waitForExist()
    }
}

export default new FiltersPage()