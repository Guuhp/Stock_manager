import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import * as fs from 'fs';
import { CustomHttpException } from 'src/exceptions/expection';

@Injectable()
export class SendEmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
  }

  async sendEmail(to:string, link:string) {
    let htmlContent: string;

    htmlContent = fs.readFileSync('src/templates/reset_password.html', 'utf8'); 
    htmlContent = htmlContent.replace('{{link}}', link);

    const mailOptions = {
      from: process.env.EMAIL,
      to: to,
      subject: 'redefinição de Senha',
      html: htmlContent,
    };
    
    await this.transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error by sending email: ', error);
        throw new CustomHttpException(409, "Error by sending email")
      }
      console.log('Email sent: ', info.response);
    });
  }
}
