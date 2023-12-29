export const convertBase64 = file => {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader()
		fileReader.reactAsDataURL(file)
		
		fileReader.onload = () => {
			resolve(fileReader.result)
			}
		fileReader.onerror = error => {
			            reject(error)}
		})
	}
