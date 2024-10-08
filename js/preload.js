const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const fileChooser = document.querySelector('#upload-file');
const preview = document.querySelector('.img-upload__preview img');
const previewEffects = document.querySelectorAll('.effects__preview');

  fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = FILE_TYPES.some((it) => {
      return fileName.endsWith(it);
    });

    if (matches) {
      preview.src = URL.createObjectURL(file);


    previewEffects.forEach((picture) => picture.style.backgroundImage = `url('${preview.src}')`);
    }
  });


