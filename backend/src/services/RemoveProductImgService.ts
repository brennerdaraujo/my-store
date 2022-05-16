import fs from 'fs';

import { productImg } from '../consts';

class RemoveProductImgService {
  async execute(remoteImgPath: string): Promise<void> {
    const imgPathParts = remoteImgPath.split('/');
    const imgName = imgPathParts[imgPathParts.length - 1];
    const localImgPath = `${productImg.path.local}/${imgName}`;

    try {
      await fs.promises.unlink(localImgPath);
    } catch (error) {
      console.log('RemoveProductImgService', error);
    }
  }
}

export { RemoveProductImgService };
