/*! SVG Türkiye Haritası | MIT Lisans | dnomak.com */

function svgturkiyeharitasi() {
  const gdg = {
    adana: "GDG-Adana",
    ankara: "GDG-Ankara",
    antalya: "GDG-Antalya",
    bolu: "GDG-Bolu",
    burdur: "gdg-burdur",
    bursa: "GDG-Bursa",
    denizli: "GDG-Denizli",
    edirne: "GDG-Edirne",
    eskisehir: "gdg-eskisehir",
    hatay: "gdg-hatay",
    isparta: "Gdg-Isparta",
    mersin: "GDG-Mersin",
    istanbul: "GDG-Istanbul",
    izmir: "GDG-Izmir",
    kayseri: "GDG-Kayseri",
    kocaeli: "GDG-Kocaeli",
    konya: "GDG-Konya",
    kutahya: "GDG-Kutahya",
    manisa: "GDG-Manisa",
    samsun: "GDG-Samsun",
    tekirdag: "gdg-tekirdag",
    trabzon: "GDG-Trabzon",
    sivas: "GDG-Sivas",
    sanliurfa: "GDG-Sanliurfa",
    duzce: "GDG-Duzce",
  };
  const element = document.querySelector("#svg-turkiye-haritasi");
  const info = document.querySelector(".il-isimleri");
  const imge = document.querySelector(".imge");

  element.addEventListener("mouseover", function (event) {
    if (
      event.target.tagName === "path" &&
      event.target.parentNode.id !== "guney-kibris" &&
      event.target.parentNode.className.baseVal === "gdg"
    ) {
      imge.src = "./gdg-logo.png";
      info.innerHTML = [
        "<div>",
        event.target.parentNode.getAttribute("data-iladi"),
        "</div>",
      ].join("");
    }
  });
  element.addEventListener("mousemove", function (event) {
    imge.style.top = event.pageY + 15 + "px";
    imge.style.left = event.pageX + 10 + "px";
    info.style.top = event.pageY + 25 + "px";
    info.style.left = event.pageX + 20 + "px";
  });

  element.addEventListener("mouseout", function (event) {
    imge.src = "";
    info.innerHTML = "";
  });

  element.addEventListener("click", function (event) {
    if (
      event.target.tagName === "path" &&
      event.target.parentNode.className.baseVal === "gdg"
    ) {
      const parent = event.target.parentNode;
      const id = parent.getAttribute("id");
      window.location.href = "https://gdg.community.dev/" + gdg[id];
    }
  });
}
