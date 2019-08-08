window.addEventListener('load', randBgPic);

const bgPic = ['https://images.pexels.com/photos/88917/pexels-photo-88917.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1268551/pexels-photo-1268551.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1031780/pexels-photo-1031780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', 'https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'];

function randBgPic(){
  const randPic = bgPic[Math.floor(Math.random() * bgPic.length)];
  document.body.style.background = `url(${randPic}) repeat center / cover`;
  document.body.style.backgroundAttachment = 'fixed';
}