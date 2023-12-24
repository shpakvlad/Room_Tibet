const mapDialog = document.querySelector("#map-dialog");

document.addEventListener("click", (event) => {
    if (event.target.className == "btn") {
        switch (event.target.id) {
            case "map-btn-1":
                mapDialog.innerHTML = "";
                mapDialog.insertAdjacentHTML(
                    "afterbegin",
                    '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2658.944544796868!2d25.79776827630168!3d48.20768407125136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2slt!4v1703443410047!5m2!1sru!2slt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                );
                mapDialog.insertAdjacentHTML(
                    "beforeend",
                    '<button id="closeDlg" class="btn" type="button">Close</button>'
                );

                mapDialog.showModal();
                break;
            case "map-btn-2":
                mapDialog.innerHTML = "";
                mapDialog.insertAdjacentHTML(
                    "afterbegin",
                    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2603.2388615395935!2d23.51192707636547!3d49.27187097139123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a48492f8339f1%3A0xf83f59ce8945426f!2z0JrQsNGA0L_QsNGC0Ys!5e0!3m2!1sru!2slt!4v1703445274297!5m2!1sru!2slt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                );
                mapDialog.insertAdjacentHTML(
                    "beforeend",
                    '<button id="closeDlg" class="btn" type="button">Close</button>'
                );
                mapDialog.showModal();
                break;
            case "map-btn-3":
                mapDialog.innerHTML = "";
                mapDialog.insertAdjacentHTML(
                    "afterbegin",
                    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.997425603653!2d23.504200396789543!3d49.27644599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473a484d249f057b%3A0xf7696c7399387224!2sHotel%20Raymond!5e0!3m2!1sru!2slt!4v1703445385822!5m2!1sru!2slt" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
                );
                mapDialog.insertAdjacentHTML(
                    "beforeend",
                    '<button id="closeDlg" class="btn" type="button">Close</button>'
                );
                mapDialog.showModal();
                break;
            case "closeDlg":
                mapDialog.close();
                break;

            default:
                break;
        }
    }
});
