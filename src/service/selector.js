/* eslint-disable no-magic-numbers */
export function generateChatId(companyId) {
  const timestamp = Date.now().toString();
  const randomId = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
  return `${companyId}-${timestamp}-yy${randomId}`;
}

export const writeFile = (items) => {
  const jsonData = JSON.stringify(items);
  localStorage.setItem('myData', jsonData);
};
