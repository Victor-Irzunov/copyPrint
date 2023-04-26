import axios from 'axios'
// const token = '5562126487:AAGqX2TBd3toX15OgSCQ2yW55RNfgtBWQko'
// const chat_id = '-1001794221917'
// const uri_api = `https://api.telegram.org/bot${token}/sendMessage`
const token = '5562126487:AAGqX2TBd3toX15OgSCQ2yW55RNfgtBWQko'
const chat_id = '-1001794221917'
const uri_api = `https://api.telegram.org/bot${token}/sendMessage`


export const sendOrderTelegram = async (obj) => {
	const { data } = await axios.post(uri_api, {
		chat_id,
		parse_mode: 'html',
		text: obj,
	})
	return data
}


// export const sendFotoTelegram = async (obj) => {
// 	const file = obj.get('photo');

// 	if (file.size > 10 * 1024 * 1024) { // Проверяем размер файла
// 	  return { error: 'Файл слишком большой для отправки в Telegram' };
// 	}

// 	try {
// 	  const { data } = await axios.post(`https://api.telegram.org/bot${token}/sendPhoto`, obj,{
// 				headers: {
// 					'Content-Type': 'multipart/form-data'
// 				}
// 			});
// 	  return { data };
// 	} catch (error) {
// 	  return { error: 'Ошибка отправки файла в Telegram' };
// 	}
//  }


 export const sendFotosTelegram = async (obj) => {
	 const files = obj.getAll('photo')
	 const chat_id = obj.get('chat_id')
	const results = []
	for (const file of files) {
	  if (file.size > 10 * 1024 * 1024) { 
		 results.push({ error: `Файл ${file.name} слишком большой для отправки в Telegram` });
		 continue;
	  }
	  const formData = new FormData()
	  formData.append('chat_id', chat_id)
	  formData.append('photo', file)
	  try {
		 const { data } = await axios.post(`https://api.telegram.org/bot${token}/sendPhoto`, formData, {
			headers: {
			  'Content-Type': 'multipart/form-data'
			}
		 })
		 results.push({ data });
	  } catch (error) {
		 results.push({ error: `Ошибка отправки файла ${photo.name} в Telegram` });
	  }
	}
	return results
 }


 
 
 
 


















