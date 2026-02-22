import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center">
          Sobre <span className="text-primary">Mim</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Desenvolvedor Web em Formação & Entusiasta de Tecnologia
            </h3>

            <p className="text-muted-foreground">
              Tenho desenvolvido minha experiência em desenvolvimento web por
              meio de estudos contínuos, projetos práticos e aprofundamento nas
              principais tecnologias do mercado. Meu foco está na criação de
              aplicações web responsivas, acessíveis e bem estruturadas,
              utilizando HTML, CSS, JavaScript e frameworks modernos.
            </p>

            <p className="text-muted-foreground">
              Busco sempre aplicar boas práticas de desenvolvimento, prezando
              por organização de código, performance e uma experiência de
              usuário clara e intuitiva. Além do conhecimento em front-end,
              minha formação técnica em Redes de Computadores me proporciona uma
              visão mais ampla sobre infraestrutura e funcionamento da web,
              permitindo desenvolver soluções mais completas e eficientes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Entre em Contato
              </a>

              <a
                href="https://docs.google.com/document/d/1hxPWz9iKvn2_UtFI1D4cYZN2jcg_hqvs/edit?usp=sharing&ouid=115608124066890573277&rtpof=true&sd=true"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Baixar Currículo
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Desenvolvimento Web</h4>
                  <p className="text-muted-foreground">
                    Criação de sites e aplicações web responsivas utilizando
                    tecnologias modernas e boas práticas de desenvolvimento.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Estruturação de Projetos
                  </h4>
                  <p className="text-muted-foreground">
                    Organização de código, componentização e boas práticas no
                    desenvolvimento de aplicações web.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Base em Redes e Infraestrutura
                  </h4>
                  <p className="text-muted-foreground">
                    Conhecimento em fundamentos de redes, funcionamento da web,
                    servidores e comunicação entre sistemas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
