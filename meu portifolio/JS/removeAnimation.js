export default function removeAnimation() {
  const divsWithAnim = document.querySelectorAll('#anime')
  
    function windowAnimation() {
      divsWithAnim.forEach((elemento) => {
        if(window.innerWidth < 800) {
          elemento.removeAttribute('data-aos')
        }
      })
    }
      window.addEventListener('load', windowAnimation);
      window.addEventListener('resize', windowAnimation);
    }
   
 

