import { renderPictures } from './picture.js';
import './form.js';

const getData = async (onSuccess, onFail) => {
  try {
    const response = await fetch(
      'https://25.javascript.htmlacademy.pro/kekstagram/data'
    );

    if (!response.ok) {
      throw new Error('Не удалось загрузить фотографии');
    }

    const offers = await response.json();
    onSuccess(offers);
  } catch (error) {
    onFail(error.message);
  }
};

getData().then((data) => {

}).catch((error) => {

});

const onLoadSuccess = (data) => {
  renderPictures(data);
}

const onLoadError = (error) => {
    showAlert('Не удалось загрузить файл. Попробуйте ещё раз');
  };


getData(onLoadSuccess, onLoadError);
