function displayImage(imageFile) {
    let mainImage = document.getElementById('mainImage');
    if (!mainImage) {
        mainImage = document.createElement('img');
        mainImage.id = 'mainImage';
        document.body.appendChild(mainImage);
    }
    mainImage.src = imageFile;
    mainImage.alt = 'Main Image';
    mainImage.style.width = '300px';
    mainImage.style.height = '200px';
}
