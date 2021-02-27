const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'aleal4@gmail.com',
    subject: 'Welcome to the Task App!',
    text: `Welcome, ${name}! Let me know how you get along with the app.`
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'aleal4@gmail.com',
    subject: 'Sorry to see you go!',
    text: `Hey ${name}, we're sorry to see you go. Anything we could have doen to improve your experience? Please let us know!`
  })
}

module.exports = {
  sendWelcomeEmail, 
  sendCancelationEmail
}