# Course Review Notification System Update

This project includes a feature to send email notifications to course owners whenever a new review is posted on their course. The emails are templated using EJS and are sent via Nodemailer using SMTP configuration.

## Table of Contents

1. [Features](#features)
2. [Changes Implemented](#changes-implemented)
3. [How to Set Up New Emails](#how-to-set-up-new-emails)
4. [Usage](#usage)

## Features

- **Email Notifications**: Sends an email to the course owner when a new review is posted.
- **EJS Templating**: Email content is dynamically generated using EJS templates.
- **Modular Design**: Email sending logic is abstracted into a reusable `sendMail` function.

## Changes Implemented

1. **New `sendMail.ts` Utility**:

   - Added a utility function `sendMail` in `sendMail.ts` to handle the email sending logic using Nodemailer.
   - The email content is generated using an EJS template that is dynamically rendered with the review data.

2. **Review Notification Feature**:

   - Created a function `notifyCourseOwner` in the `notifyController.ts` file that calls `sendMail` to notify the course owner.
   - The email template (`review-notification.ejs`) is used to format the content of the notification.

3. **Modified Controllers**:
   - Modified the `addReview` function to call `notifyCourseOwner` after a review is successfully created. It retrieves the course and its owner's email and passes this data to `notifyCourseOwner`.
   - Modified the `createCourse` function to add the const creatorId = req.id; which was a crucial point to find course creator's email.

## How to Set Up New Emails

### 1. Install Dependencies

Make sure all the required packages are installed by running:

```bash
npm install
```

### 2. Configure Environment Variables

You need to set up your SMTP configuration in the `.env` file for Nodemailer to work correctly. Add the following variables:

```bash
SMTP_HOST=<your-smtp-host>
SMTP_PORT=<your-smtp-port>
SMTP_SERVICE=<your-email-service>
SMTP_EMAIL=<your-email>
SMTP_PASSWORD=<your-email-password>
```

### 3. Set Up EJS Templates

in the mail folder inside your project use the following EJS template file `review-notification.ejs` for reference:

#### `review-notification.ejs`

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>New Review Notification</title>
  </head>
  <body>
    <h1>New Review on Your Course: <%= courseTitle %></h1>
    <p><strong>Rating:</strong> <%= reviewRating %>/5</p>
    <p><strong>Review:</strong> <%= reviewContent %></p>
  </body>
</html>
```

### 5. Run the Application

```bash
npm run start
```

## Usage

### Posting a Review and Notifying the Course Owner

When a user posts a new review on a course, the following sequence occurs:

1. The review is saved in the database via the `addReview` controller.
2. The `addReview` controller finds the course owner’s email.
3. An email is sent to the course owner with details about the review, using the `review-notification.ejs` template.

Once the review is added, the course owner will receive an email like this:

- **Subject**: `New review on your course: [Course Title]`
- **Body**: Displays the course title, review rating, and content.
