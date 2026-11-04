import type { Metadata } from 'next'
import { DocumentoLegal, Destaque, EMPRESA, Item, Lista, Tabela, type Secao } from '../documento-legal'

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Como a ARXUM trata dados pessoais no site e nos seus produtos, incluindo o ARXUM Crew, em conformidade com a LGPD.',
  alternates: { canonical: '/privacidade' },
}

const link = 'text-white underline underline-offset-2'

const secoes: Secao[] = [
  {
    id: 'introducao',
    titulo: 'Introdução e a quem esta Política se aplica',
    corpo: <>
      <p>
        Esta Política explica como {EMPRESA.razaoSocial}, CNPJ {EMPRESA.cnpj}, titular da marca {EMPRESA.marca}{' '}
        (<Destaque>ARXUM</Destaque>), trata dados pessoais no site arxum.com.br e nos seus produtos de software
        (os <Destaque>Produtos</Destaque>), em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018,
        <Destaque> LGPD</Destaque>) e com o Marco Civil da Internet (Lei nº 12.965/2014).
      </p>
      <p>Ela se aplica a:</p>
      <Lista>
        <Item titulo="Visitantes">do site e das páginas públicas dos Produtos;</Item>
        <Item titulo="Clientes e Usuários">que criam conta e usam o painel dos Produtos;</Item>
        <Item titulo="Profissionais">cadastrados por empresas clientes no ARXUM Crew, ou que se cadastram pelo link dessas empresas;</Item>
        <Item titulo="Destinatários">de e-mails enviados pelos Produtos.</Item>
      </Lista>
      <p>
        Alguns Produtos podem ter avisos de privacidade complementares, que prevalecem naquilo que forem específicos. Termos não
        definidos aqui têm o sentido dado nos <a href="/termos-de-uso" className={link}>Termos de Uso</a>.
      </p>
    </>,
  },
  {
    id: 'papeis',
    titulo: 'Quem decide sobre os seus dados',
    corpo: <>
      <p>A LGPD distingue quem decide sobre o tratamento (controlador) de quem trata dados em nome de outro (operador):</p>
      <Lista>
        <Item titulo="A ARXUM é controladora">dos dados de visitantes do site, de cadastro e uso das contas de Clientes e Usuários, de cobrança e de atendimento.</Item>
        <Item titulo="A ARXUM é operadora">dos dados que os Clientes inserem nos Produtos sobre terceiros, como os dados dos Profissionais no ARXUM Crew. Nesses casos, <Destaque>a empresa cliente é a controladora</Destaque>: é ela quem decide quais dados coletar e para quê, e é a ela que o titular deve se dirigir em primeiro lugar.</Item>
      </Lista>
      <p>
        Se você é Profissional e quer saber o que uma empresa faz com seus dados, fale com ela. Se não conseguir resposta,
        escreva para {EMPRESA.email}: nós encaminharemos o pedido à empresa e a apoiaremos no atendimento.
      </p>
    </>,
  },
  {
    id: 'dados',
    titulo: 'Quais dados tratamos, para quê e com qual base legal',
    corpo: <>
      <p>Tratamos apenas os dados necessários a cada finalidade:</p>
      <Tabela
        cabecalho={['Dados', 'Finalidade', 'Base legal (LGPD)']}
        linhas={[
          [
            'Conta: nome, e-mail, senha (guardada de forma irreversível, com hash), nome e link da empresa, segmento, WhatsApp de contato, perfil de acesso.',
            'Criar e manter a conta, autenticar o acesso, controlar permissões e prestar o serviço.',
            'Execução de contrato (art. 7º, V).',
          ],
          [
            'Cobrança: plano, faturas, valores, vencimentos, situação do pagamento, identificador e forma do pagamento no Mercado Pago.',
            'Cobrar, confirmar pagamentos, emitir documentos fiscais e enviar avisos de cobrança.',
            'Execução de contrato (art. 7º, V) e cumprimento de obrigação legal (art. 7º, II).',
          ],
          [
            'Atendimento: mensagens trocadas no suporte e por e-mail.',
            'Resolver dúvidas e problemas e melhorar os Produtos.',
            'Execução de contrato (art. 7º, V) e legítimo interesse (art. 7º, IX).',
          ],
          [
            'Registros de acesso: endereço IP, data e hora de acesso, e registros técnicos de erros e segurança.',
            'Guardar os registros exigidos por lei, prevenir fraudes e proteger a segurança dos Produtos.',
            'Obrigação legal (Marco Civil, art. 15) e legítimo interesse (art. 7º, IX).',
          ],
          [
            'Histórico de e-mails: destinatário, assunto, data e situação do envio.',
            'Comprovar comunicações e evitar envios repetidos.',
            'Execução de contrato e legítimo interesse.',
          ],
          [
            'Contatos comerciais: nome, e-mail e mensagem enviados à ARXUM.',
            'Responder ao contato e apresentar os Produtos.',
            'Procedimentos preliminares a contrato (art. 7º, V) e legítimo interesse.',
          ],
        ]}
      />
      <p>
        Não vendemos dados pessoais, não os usamos para publicidade de terceiros e não fazemos decisões automatizadas que
        produzam efeitos jurídicos sobre os titulares.
      </p>
    </>,
  },
  {
    id: 'crew',
    titulo: 'Dados de Profissionais no ARXUM Crew',
    corpo: <>
      <p>No ARXUM Crew, a ARXUM trata, como operadora e em nome da empresa cliente, os seguintes dados dos Profissionais:</p>
      <Lista>
        <Item titulo="Identificação e contato:">nome, CPF, telefone (WhatsApp) e e-mail.</Item>
        <Item titulo="Dados profissionais:">função ou especialidade, valor de diária, avaliação de desempenho atribuída pela empresa e informações sobre documentos profissionais pedidos pelo segmento (por exemplo, registro profissional, certificados de treinamento, CNPJ MEI e datas de validade).</Item>
        <Item titulo="Pagamento:">chave PIX, para que a empresa possa pagar o Profissional pelo próprio banco, e a situação desses pagamentos registrada pela empresa.</Item>
        <Item titulo="Escalas:">trabalhos para os quais foi convidado, respostas (aceite ou recusa, com motivo opcional) e datas.</Item>
        <Item titulo="Aceite de termo:">data, hora e endereço IP do aceite do termo de prestação de serviço apresentado pela empresa.</Item>
        <Item titulo="Presença:">data, hora e localização geográfica (latitude e longitude) registradas <Destaque>apenas no momento</Destaque> em que o Profissional faz check-in ou check-out, para comprovar a presença no local do trabalho. Não há rastreamento contínuo.</Item>
        <Item titulo="Consentimento:">data em que o Profissional concordou com o tratamento ao se cadastrar pelo link da empresa.</Item>
      </Lista>
      <p>
        A finalidade é permitir que a empresa organize equipes, convide, confirme, registre presença e pague Profissionais.
        A base legal é definida pela empresa controladora; em geral, procedimentos preliminares e execução do contrato de
        prestação de serviço (art. 7º, V), cumprimento de obrigações legais da empresa (art. 7º, II) e, para o cadastro feito
        pelo próprio Profissional, o seu consentimento (art. 7º, I), que pode ser revogado a qualquer momento junto à empresa.
      </p>
      <p>
        O Profissional acessa os próprios trabalhos e pagamentos por um link individual. Esse link é pessoal: não o compartilhe.
      </p>
    </>,
  },
  {
    id: 'cookies',
    titulo: 'Cookies e armazenamento no navegador',
    corpo: <>
      <p>
        Usamos apenas cookies e armazenamento local <Destaque>estritamente necessários</Destaque>: manter a sessão de quem
        entrou no painel, lembrar preferências de exibição e proteger o acesso. Não usamos cookies de publicidade nem de
        rastreamento entre sites.
      </p>
      <p>
        Você pode apagar ou bloquear cookies nas configurações do navegador, mas, sem os cookies de sessão, não é possível
        permanecer conectado ao painel.
      </p>
    </>,
  },
  {
    id: 'compartilhamento',
    titulo: 'Com quem compartilhamos',
    corpo: <>
      <p>Compartilhamos dados apenas com quem é necessário para prestar o serviço, sob contrato e com obrigações de segurança e sigilo:</p>
      <Tabela
        cabecalho={['Fornecedor', 'Serviço', 'Local de tratamento']}
        linhas={[
          ['Supabase', 'Banco de dados, autenticação e armazenamento de arquivos', 'Estados Unidos ou outra região do provedor'],
          ['Vercel', 'Hospedagem do site e dos Produtos', 'Estados Unidos e rede global do provedor'],
          ['Resend', 'Envio de e-mails transacionais e de cobrança', 'Estados Unidos'],
          ['Mercado Pago', 'Processamento de pagamentos por PIX e cartão', 'Brasil'],
        ]}
      />
      <p>Também podemos compartilhar dados:</p>
      <Lista>
        <Item>com autoridades públicas, quando houver obrigação legal, ordem judicial ou requisição de autoridade competente;</Item>
        <Item>para exercer direitos em processos judiciais, administrativos ou arbitrais;</Item>
        <Item>em caso de reorganização societária, com a empresa sucessora, que ficará obrigada a esta Política.</Item>
      </Lista>
      <p>
        Mensagens de WhatsApp geradas pelo ARXUM Crew são abertas e enviadas pelo aplicativo do próprio Usuário; a ARXUM não
        envia mensagens pelo WhatsApp nem recebe o seu conteúdo.
      </p>
    </>,
  },
  {
    id: 'transferencia',
    titulo: 'Transferência internacional',
    corpo: <p>
      Como alguns fornecedores mantêm servidores fora do Brasil, dados pessoais podem ser transferidos para outros países,
      em especial os Estados Unidos. Essas transferências se baseiam no art. 33 da LGPD, com garantias contratuais de
      proteção adequadas, incluindo cláusulas contratuais nos termos da regulamentação da Autoridade Nacional de Proteção
      de Dados (ANPD), e com fornecedores que adotam padrões reconhecidos de segurança da informação.
    </p>,
  },
  {
    id: 'retencao',
    titulo: 'Por quanto tempo guardamos',
    corpo: <Lista>
      <Item titulo="Conta e Dados do Cliente:">enquanto a conta estiver ativa. Após o encerramento, ficam disponíveis para exportação por 30 dias e são excluídos em até 90 dias.</Item>
      <Item titulo="Dados de Profissionais:">enquanto a empresa cliente os mantiver cadastrados ou enquanto a conta dela existir. A exclusão pode ser feita pela empresa a qualquer momento.</Item>
      <Item titulo="Registros de acesso:">pelo menos 6 meses, conforme o art. 15 do Marco Civil da Internet.</Item>
      <Item titulo="Cobrança e documentos fiscais:">pelo prazo exigido pela legislação tributária e comercial, em regra 5 anos.</Item>
      <Item titulo="Para defesa de direitos:">pelo prazo prescricional aplicável, quando houver disputa ou risco de disputa.</Item>
    </Lista>,
  },
  {
    id: 'seguranca',
    titulo: 'Como protegemos os dados',
    corpo: <>
      <p>Adotamos medidas técnicas e administrativas compatíveis com a natureza dos dados, entre elas:</p>
      <Lista>
        <Item>criptografia de todo o tráfego (HTTPS/TLS) e senhas guardadas com hash;</Item>
        <Item>isolamento dos dados de cada empresa cliente por regras de acesso no próprio banco de dados, de forma que uma empresa não consegue acessar dados de outra;</Item>
        <Item>perfis de acesso por Usuário e princípio do menor privilégio na equipe ARXUM;</Item>
        <Item>chaves de acesso e segredos guardados separadamente do código, e cópias de segurança mantidas pelo provedor de banco de dados.</Item>
      </Lista>
      <p>
        Nenhum sistema é totalmente imune a incidentes. Se ocorrer um incidente de segurança que possa gerar risco ou dano
        relevante aos titulares, comunicaremos a ANPD e os titulares afetados (ou, quando formos operadora, a empresa
        controladora) nos prazos da regulamentação da ANPD.
      </p>
    </>,
  },
  {
    id: 'direitos',
    titulo: 'Seus direitos e como exercê-los',
    corpo: <>
      <p>Nos termos do art. 18 da LGPD, você pode pedir:</p>
      <Lista>
        <Item>confirmação de que tratamos seus dados e acesso a eles;</Item>
        <Item>correção de dados incompletos, inexatos ou desatualizados;</Item>
        <Item>anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei;</Item>
        <Item>portabilidade dos dados a outro fornecedor;</Item>
        <Item>eliminação dos dados tratados com base no consentimento, e informação sobre a possibilidade de não consentir e suas consequências;</Item>
        <Item>informação sobre com quem compartilhamos seus dados;</Item>
        <Item>revogação do consentimento;</Item>
        <Item>revisão de decisões tomadas exclusivamente com base em tratamento automatizado.</Item>
      </Lista>
      <p>
        Envie o pedido para <a href={`mailto:${EMPRESA.email}`} className={link}>{EMPRESA.email}</a>. Poderemos pedir
        informações para confirmar a sua identidade. Responderemos em até 15 dias. Alguns dados podem ser mantidos mesmo após
        o pedido, quando a lei exigir (por exemplo, registros de acesso e documentos fiscais).
      </p>
      <p>
        Se o pedido envolver dados inseridos por uma empresa cliente (como os dados de Profissionais), ele será encaminhado à
        empresa controladora, que é a responsável por decidir, e nós a apoiaremos no atendimento.
      </p>
      <p>
        Você também pode apresentar reclamação à Autoridade Nacional de Proteção de Dados (ANPD), pelo site
        {' '}<a href="https://www.gov.br/anpd" className={link} target="_blank" rel="noopener noreferrer">gov.br/anpd</a>.
      </p>
    </>,
  },
  {
    id: 'menores',
    titulo: 'Crianças e adolescentes',
    corpo: <p>
      Os Produtos não se destinam a menores de 18 anos e não coletamos conscientemente dados de crianças. Se uma empresa
      cliente cadastrar adolescentes como Profissionais, como em programas de aprendizagem, ela deve observar o art. 14 da
      LGPD e a legislação trabalhista, inclusive obtendo o consentimento de um dos pais ou responsável quando necessário.
    </p>,
  },
  {
    id: 'encarregado',
    titulo: 'Encarregado e contato',
    corpo: <p>
      Para assuntos de privacidade e proteção de dados, fale com o nosso canal de atendimento ao titular, conduzido pelo
      encarregado pelo tratamento de dados pessoais, pelo e-mail{' '}
      <a href={`mailto:${EMPRESA.email}`} className={link}>{EMPRESA.email}</a>, com o assunto “Privacidade”.
    </p>,
  },
  {
    id: 'alteracoes',
    titulo: 'Alterações desta Política',
    corpo: <p>
      Esta Política pode ser atualizada para refletir mudanças nos Produtos, na lei ou em orientações da ANPD. Mudanças
      relevantes serão avisadas por e-mail ou no painel antes de entrarem em vigor. A versão em vigor e a data da última
      alteração ficam sempre nesta página.
    </p>,
  },
]

export default function Privacidade() {
  return (
    <DocumentoLegal
      titulo="Política de Privacidade"
      versao="1.0"
      vigencia="4 de novembro de 2026"
      resumo={<>
        <p className="font-semibold text-white">Resumo em linguagem simples</p>
        <p className="mt-2">
          Coletamos só o necessário para o produto funcionar e para cobrar. Não vendemos dados nem usamos para publicidade.
          No ARXUM Crew, quem decide sobre os dados dos profissionais é a empresa que os cadastrou; nós guardamos e protegemos
          esses dados em nome dela. A localização só é registrada no momento do check-in e do check-out. Você pode pedir acesso,
          correção ou exclusão dos seus dados pelo e-mail {EMPRESA.email}.
        </p>
      </>}
      secoes={secoes}
    />
  )
}
