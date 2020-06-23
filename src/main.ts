
import './main.css';
import popup from './components/popup/popup';


let listItem = document.querySelectorAll('#list li');

for (let i = 0; i < listItem.length; i++) {
  listItem[i].addEventListener('click', function () {
    let url = this.dataset.url;
    let title = this.dataset.title;
    //console.log(url, title);

    popup({
      width: '780px',
      height: '456px',
      title: title,
      pos: 'center',
      mask: true,
      content(elem) {
        console.log(elem);
      }
    });


  })
}

