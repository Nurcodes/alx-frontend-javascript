import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const p1 = signUpUser(firstName, lastName);
  const p2 = uploadPhoto(fileName);
  return Promise.allSettled([p1, p2]).then((res) => {
    const arr = [];
    for (const p of res) {
      arr.push({
        status: p.status,
        value: p.value || p.reason,
      });
    }
    return arr;
  });
}

console.log(handleProfileSignup('john', 'stockton', 'js.jpeg'));
