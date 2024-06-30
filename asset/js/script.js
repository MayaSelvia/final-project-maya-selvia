let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('body nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(linkks => {
                linkks.classList.remove('active');
                document.querySelector('body nav a [href*='+ id +']').classList.add('active');
            })
        };
    });
};