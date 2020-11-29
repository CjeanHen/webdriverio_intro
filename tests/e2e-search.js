import App from '../lib/page-objects/App'
import Navbar from '../lib/page-objects/components/Navbar'

describe('E2E Tests - Search', () => {
    it('should load homepage', () => {
        App.openHomepage()
    })

    it('should submit searchbox', () => {
        Navbar.search('bank')

        const resultsTitle = $('h2')
        resultsTitle.waitForExist()
        expect(resultsTitle).toHaveText('Search Results:')
    })
})