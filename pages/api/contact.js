import multer from 'multer';
import fs from 'fs';
import nodemailer from 'nodemailer';
const upload = multer({ dest: 'uploads/' });
export const config = {
  api: {
    bodyParser: false
  }
}
export default async function handler(req, res) {
  try {
    await new Promise((resolve, reject) => {
      upload.any()(req, res, error => {
        if (error) reject(error);
        else resolve();
      })
    })
    const {
      name,
      email,
      message,
      format,
      color,
      density,
      oformlenie,
      colorReshenie,
      srok,
      count,
      tel,
      address,
    } = req.body


    const files = req.files
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL,
      to: email,
      subject: 'Contact form submission',
      text: `
      Письмо с сайта:
        Имя: ${name}
        Почта: ${email}
        Телефон: ${tel}
        Комментарий: ${message}
        Формат бумаги: ${format}
        Цвет печати: ${color}
        Плотность бумаги:${density}
        Послепечатное оформление: ${oformlenie}
        Цветовое решение брошюровки: ${colorReshenie}
        Срок изготовления: ${srok}
        Число копий: ${count}

        Клиент выбрал: ${address}
      `,
      attachments: files.map(file => {
        return ({ filename: file.originalname, content: fs.createReadStream(file.path) })
      }),
    })

    // Delete uploaded files
    files.forEach(file => {
      fs.unlink(file.path, error => {
        if (error) console.log(error);
        else console.log(`${file.originalname} was deleted successfully`);
      })
    })


    res.status(200).json({ message: 'Сообщение отправлено' });
  } catch (error) {
    res.status(500).json({ error: 'Ошибка в отправке сообщения' });
  }
}
