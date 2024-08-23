import img from "../../../public/img/image.png";
import { Footer } from "../../components/Footer";
import "./styles.css";

export function Home() {
  return (
    <>
      <img src={img} alt="Descrição da Imagem" />

      <h1>
        <span className="sombra">Transformando </span>
        <span className="coloridoazul">espaço</span>, <br />
        criando <span className="coloridoazul">história</span>
      </h1>
      <p>
        Nós criamos ambientes <b> exclusívos </b> e <b> únicos </b>, com muito
        bom gosto e profissionalismo, <br /> investimos tempo e
        <span className="coloridoazul"> dedicação no seu projeto</span>. Nosso
        compromisso vai além de simplesmente decorar.
      </p>
      <br />
      <p>
        Tenha <span className="coloridoazul">ambientes limpos</span> e bem
        decorados, transmitindo <b>elegância</b> e <b> finesse </b>para todo
        <br /> aquele que estiver ali. Sua história visual começa aqui!
      </p>

      <Footer />
      
    </>
  );
}