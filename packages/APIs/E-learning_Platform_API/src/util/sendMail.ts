import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';

// Nodemailer transport configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT, 10),
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

// Reusable function for sending emails
export const sendMail = async ({
  to,
  subject,
  templateName,
  templateData,
}: {
  to: string;
  subject: string;
  templateName: string;
  templateData: any;
}) => {
  try {
    // Path to the template file
    const templatePath = path.join(__dirname, '../mail', `${templateName}.ejs`);

    // Render the template with the provided data
    const htmlContent = await ejs.renderFile(templatePath, templateData);

    // Send the email using Nodemailer
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to,
      subject,
      html: htmlContent,
    });

    console.log(`Email sent successfully to ${to}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};
