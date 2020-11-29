import App from '../lib/page-objects/App'
import LoginPage from '../lib/page-objects/pages/LoginPage'
import Navbar from '../lib/page-objects/components/Navbar'
import FeedbackPage from '../lib/page-objects/pages/FeedbackPage'

describe('E2E Feedback', () => {
    it('should load feedback form', () => {
        App.openFeedbackPage()
        FeedbackPage.formIsVisible()
    })

    it('should submit feedback form', () => {
        FeedbackPage.formFill('Carolyn', 'email@email.com', 'hi', 'Test test')
        FeedbackPage.submitForm()
        expect(browser).toHaveUrl('http://zero.webappsecurity.com/sendFeedback.html')
    })
})