
const block = document.querySelector('.block')
const button = document.querySelector('.button')
const fileNames = ['f2.jpg', 'f3.jpg', 'f4.jpg', 'f5.jpg', 'f6.jpg', ];

function addPhoto() {
  if (fileNames.length === 0) {
    alert('End')
    return
  }
  const fileName = fileNames.shift();
  //беремо назву фото з масиву 
  const img = document.createElement('img');
  // створюємо новий тег img
  img.src = "img/" + fileName;
  // додаємо атрибут src(зі значенням шляху до картинки)
  img.className = "photo";
  // додаю атрибут className
  block.append(img)
  //додаємо зображення до блоку
}

button.onclick = addPhoto;