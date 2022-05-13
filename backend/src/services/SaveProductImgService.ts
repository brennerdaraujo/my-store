import { writeFile } from 'fs/promises';
import { v4 as uuid } from 'uuid';

import { productImg } from '../consts';

class SaveProductImgService {
  async execute(base64Img: string): Promise<string> {
    const imgName = `${uuid()}.jpg`;
    const imgPath = `${productImg.path.local}/${imgName}`;

    await writeFile(imgPath, base64Img, {
      encoding: 'base64'
    });

    return `${productImg.path.remote}/${imgName}`;
  }
}

export { SaveProductImgService };
