function copyURI(evt) {
    evt.preventDefault();
    navigator.clipboard.writeText($(this).attr("href")).then(() => {
      alert('COPIED!')
    }, () => {
      alert('FAILED!')
    });
}