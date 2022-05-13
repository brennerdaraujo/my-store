import { existsSync, mkdirSync } from 'fs';

import { productImg } from '../consts';

export const handlePublicDir = () => {
  if (!existsSync(productImg.path.local)) {
    mkdirSync(productImg.path.local, { recursive: true });
  }
};
