import multer from 'multer'
import fs from 'fs'
import nodemailer from 'nodemailer'
const upload = multer({ dest: 'uploads/' })
export const config = {
  api: {
    bodyParser: false
  }
}
//если 500 смотри пароли приложений
export default async function handler(req, res) {
  try {
    console.log('----1')
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
      storonnij,
      color,
      density,
      oformlenie,
      colorReshenie,
      sposob,
      srok,
      count,
      color_hex,
      tel,
      address,
      vid,
      razmer,
      variant,
      nanesenie,
      razmer_nanesenie,
    } = req.body
    const files = req.files
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: 'serviceprintfoto4@gmail.com',
        pass: 'beugrtuuiprrdwjw',
      },
    })
    console.log('-req.body---2', req.body)
    // Send email
    const info = await transporter.sendMail({
      from: 'serviceprintfoto4@gmail.com',
      to: email,
      subject: 'Клиент отправил форму с сайта',
      text: `
      Письмо с сайта:
        Имя: ${name || ''}
        Почта: ${email}
        Телефон: ${tel}
        Кол-во сторон: ${storonnij || '-'}
        Способ: ${sposob || '-'}
        Вид: ${vid || '-'}
        Нанесение: ${nanesenie || '-'}
        Вариант изображения: ${variant || '-'}
        Размер: ${razmer || '-'}
        Размер нанесения: ${razmer_nanesenie || '-'}
        Комментарий: ${message || '-'}
        Формат бумаги: ${format || '-'}
        Цвет печати: ${color || '-'}
        Цвет: ${color_hex || '-'}
        Плотность бумаги:${density || '-'}
        Послепечатное оформление: ${oformlenie || '-'}
        Цветовое решение брошюровки: ${colorReshenie || '-'}
        Срок изготовления: ${srok || '-'}
        Число копий: ${count || '-'}

        Клиент выбрал: ${address}
      `,
      attachments: files.map(file => {
        return ({ filename: file.originalname, content: fs.createReadStream(file.path) })
      }),
    })
    console.log('--process.env.EMAIL--3', process.env.EMAIL)
    console.log('---res:', res)
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
