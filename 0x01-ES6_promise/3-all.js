import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const p1 = uploadPhoto();
  const p2 = createUser();
  return Promise.all([p1, p2]).then((values) => {
    console.log(values[0].body, values[1].firstName, values[1].lastName);
  });
}
export default handleProfileSignup;
