export const fileToBase64 = (file: File): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

export const remoteUrlToBase64 = (url: string): Promise<string | ArrayBuffer | null> => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = () => {
      const reader = new FileReader();
      reader.readAsDataURL(xhr.response);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    };
    xhr.onerror = error => reject(error);
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  });
}
