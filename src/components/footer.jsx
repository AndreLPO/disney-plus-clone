import React from "react";
import logo from "../assets/img/disneyplus.png";

export default function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo disney plus" />
      <section className="politica">
        <p>Política de Privacidade</p>
        <p>Proteção de Dados no Brasil</p>
        <p>Contrato de Assinatura</p>
      </section>
      <section className="ajuda">
        <p>Ajuda</p>
        <p>Dispositivos compatíveis</p>
        <p>Sobre o Disney+</p>
        <p>Anúncios personalizados</p>
      </section>
      <section className="termos">
        <p unselectable="on">
          Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e
          condições. O serviço Disney+ é comercializado por The Walt Disney
          Company (Brasil) Ltda., World Trade Center, Av. Das Nações Unidas,
          12.551, 12.555, 12.559, Piso 10, São Paulo/SP - CEP 04578-903, Brasil
          e CNPJ/M 73.042.962/0004-20
        </p>
      </section>
      <section className="direitos">
        <p>© Disney. Todos os direitos reservados.</p>
      </section>
    </footer>
  );
}
