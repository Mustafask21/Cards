import "./App.css";
import Card from "./component/Card";
import Container from "./component/Container";
import images1 from "../src/assets/img/images1.jpg";
import images2 from "../src/assets/img/images2.jpg";
import images3 from "../src/assets/img/images3.jpg";
import images4 from "../src/assets/img/images4.jpg";
function App() {
  return (
    <>
      {/*Cartları container içinde bir araya getirdik
      Kartların başlığını , açıklamasını  ve fotoğrafını props kullanarak Card componentine gönderdik
    */}
      <Container>
        <Card
          productHead="Manzara Çekimi"
          productDesc="Sizin için özenle seçilmiş doğa manzaralı yerlerde harika anılar biriktirin"
          productImg={images1}
        />
        <Card
          productHead="Manzara Çekimi"
          productDesc="Sizin için özenle seçilmiş doğa manzaralı yerlerde harika anılar biriktirin"
          productImg={images2}
        />
        <Card
          productHead="Manzara Çekimi"
          productDesc="Sizin için özenle seçilmiş doğa manzaralı yerlerde harika anılar biriktirin"
          productImg={images3}
        />
        <Card
          productHead="Manzara Çekimi"
          productDesc="Sizin için özenle seçilmiş doğa manzaralı yerlerde harika anılar biriktirin"
          productImg={images4}
        />
      </Container>
    </>
  );
}

export default App;
