const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
        try {
            let baseURL = "";
            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {
                // Make a fileInfo Object
                baseURL = reader.result;
                resolve(baseURL);
            };
        } catch (error) {
            reject(error);
        }
    });
};
export default getBase64;
