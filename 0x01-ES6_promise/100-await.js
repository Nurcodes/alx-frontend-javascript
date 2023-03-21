import { createUser, uploadPhoto } from './utils';

async function asyncUploadUser() {
  try {
    const p1 = uploadPhoto();
    const p2 = createUser();
    const obj = {
      photo: p1,
      user: p2,
    };
    return obj;
  } catch (error) {
    const obj = {
      photo: null,
      user: null,
    };
    return obj;
  }
}
export default asyncUploadUser;
