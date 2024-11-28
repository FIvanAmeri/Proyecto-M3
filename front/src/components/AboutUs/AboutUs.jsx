import { Container } from './styled';

const AboutUs = () => {
  return (
    <Container style={{ color: "black", width: "50%", margin: "auto", marginTop: "2%" }}>
      <h1>Sobre Nosotros</h1>
      <p>
        Bienvenido a Clínica Salud y Bienestar. En nuestro consultorio clínico, nos comprometemos a ofrecer una atención médica de la más alta calidad, adaptada a las necesidades individuales de cada paciente. Nuestro equipo de profesionales está dedicado a proporcionar un cuidado integral y personalizado para asegurar su bienestar.
      </p>
      <p>
        Contamos con un equipo de médicos especializados y experimentados en diversas áreas de la salud, utilizando tecnología de vanguardia para diagnósticos precisos y tratamientos efectivos. Nos enorgullecemos de ofrecer un ambiente cálido y acogedor, donde cada paciente recibe una atención completa y profesional.
      </p>
      <p>
        En Clínica Salud y Bienestar, su salud es nuestra prioridad. Lo invitamos a conocernos y experimentar el cuidado excepcional que ofrecemos. Estamos aquí para apoyarle en cada paso de su camino hacia una vida más saludable y equilibrada.
      </p>

      <img 
        src='https://rebagliatisalud.edu.pe/wp-content/uploads/2023/01/consultorio.jpg' 
        alt='Imagen de la Clínica'
        style={{ width: "100%" }}
      />
    </Container>
  );
};

export default AboutUs;
