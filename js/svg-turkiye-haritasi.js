/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

function svgturkiyeharitasi() {
  const gdg ={"adana":"GDG-Adana","ankara":"GDGAnkara","antalya":"GDGAntalya","bolu":"GDGBolu","burdur":"gdgburdur","bursa":"GDGBursa","denizli":"GDGDenizli","edirne":"GDGEdirne","eskisehir":"gdgeskisehir","hatay":"gdghatay","isparta":"GdgIsparta","mersin":"GDG-Mersin","istanbul":"GDGIstanbul","izmir":"GDG-Izmir","kayseri":"GDG-Kayseri","kocaeli":"GDGKocaeli","konya":"GDGKonya","kutahya":"GDG-Kutahya", "manisa":"GDG-Manisa", "samsun":"GDG-Samsun", "tekirdag":"gdgtekirdag", "trabzon":"GDGTrabzon", "sivas":"meetup-group-KQsayXeh", "sanliurfa":"GDG-Sanliurfa", "duzce":"GDG-Duzce-Meetup" }
  const element = document.querySelector('#svg-turkiye-haritasi');
  const info = document.querySelector('.il-isimleri');
  const imge = document.querySelector('.imge');

  element.addEventListener(
    'mouseover',
    function (event) {
      if (event.target.tagName === 'path' && event.target.parentNode.id !== 'guney-kibris' && event.target.parentNode.className.baseVal === 'gdg') {
        imge.src ='./gdg-logo.png';
        info.innerHTML = [
          '<div>',
          event.target.parentNode.getAttribute('data-iladi'),
          '</div>',
        ].join('');
      }
    }
  );
  element.addEventListener(
    'mousemove',
    function (event) {
      imge.style.top = event.pageY + 15 + 'px';
      imge.style.left = event.pageX + 10 + 'px';
      info.style.top = event.pageY + 25 + 'px';
      info.style.left = event.pageX +20+ 'px';
    }
  );

  element.addEventListener(
    'mouseout',
    function (event) {
      imge.src = '';
      info.innerHTML = '';
    }
  );

  element.addEventListener(
    'click',
    function (event) {
      if (event.target.tagName === 'path' && event.target.parentNode.className.baseVal === 'gdg') {
        const parent = event.target.parentNode;
        const id = parent.getAttribute('id');
        
        console.log(gdg[id])
        window.location.href = (
          'https://www.meetup.com/'
          + gdg[id]
        );
      }
    }
  );
}
