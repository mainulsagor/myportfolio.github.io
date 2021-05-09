window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            console.log(invoice);
            console.log(window);
            var opt = {
                margin: 1,
                filename: 'mainul_cv.pdf',
                image: { type: 'jpeg', quality: 4 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: 'letter',  orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}