export default function loadBalancer(chinaDownload, USDownload) {
  const arr = [chinaDownload, USDownload];
  return Promise.race(arr).then((res) => res);
}
