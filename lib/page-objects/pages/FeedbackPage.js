import Base from '../Base'

class FeedbackPage extends Base {
    get form() {
        return $('form')
    }

    get name() {
        return $('#name')
    }

    get email() {
        return $('#email')
    }

    get subject() {
        return $('#subject')
    }

    get comment() {
        return $("#comment")
    }

    get submitButton() {
        return $('input[type="submit"]')
    }

    formIsVisible() {
        this.form.waitForExist()
    }

    formFill(name, email, subject, comment) {
        this.name.setValue(name)
        this.email.setValue(email)
        this.subject.setValue(subject)
        this.comment.setValue(comment)
    }

    submitForm() {
        this.submitButton.click()
    }
}

export default new FeedbackPage()