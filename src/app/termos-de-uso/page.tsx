import type { Metadata } from 'next'
import { DocumentoLegal, Destaque, EMPRESA, Item, Lista, type Secao } from '../documento-legal'

export const metadata: Metadata = {
  title: 'Termos de Uso',
  description: 'Condições de uso do site e dos produtos ARXUM, incluindo planos, pagamentos, cancelamento e regras específicas do ARXUM Crew.',
  alternates: { canonical: '/termos-de-uso' },
}

const secoes: Secao[] = [
  {
    id: 'quem-somos',
    titulo: 'Quem somos e aceitação destes Termos',
    corpo: <>
      <p>
        Estes Termos de Uso regulam o acesso ao site <Destaque>arxum.com.br</Destaque> e o uso dos produtos de software
        oferecidos sob a marca {EMPRESA.marca} (os <Destaque>Produtos</Destaque>), entre eles o ARXUM Crew. Os Produtos são
        fornecidos por {EMPRESA.razaoSocial}, inscrita no CNPJ sob o nº {EMPRESA.cnpj}, com sede em {EMPRESA.cidade}{' '}
        (<Destaque>ARXUM</Destaque>, <Destaque>nós</Destaque>).
      </p>
      <p>
        Ao criar uma conta, contratar um plano ou usar qualquer Produto, você declara que leu, entendeu e concorda com estes
        Termos e com a <a href="/privacidade" className="text-white underline underline-offset-2">Política de Privacidade</a>,
        que faz parte deles. Se não concordar, não utilize os Produtos.
      </p>
      <p>
        Quem cria a conta em nome de uma empresa ou organização declara ter poderes para representá-la e aceitar estes Termos
        em seu nome. Nesse caso, “Cliente” e “você” se referem à empresa ou organização.
      </p>
    </>,
  },
  {
    id: 'definicoes',
    titulo: 'Definições',
    corpo: <Lista>
      <Item titulo="Cliente:">a pessoa jurídica ou física que cria uma conta e contrata um plano, gratuito ou pago.</Item>
      <Item titulo="Usuário:">cada pessoa autorizada pelo Cliente a acessar o painel do Produto, com o perfil de acesso definido pelo Cliente (por exemplo, administrador, financeiro ou operacional).</Item>
      <Item titulo="Profissional:">no ARXUM Crew, a pessoa (freelancer, prestador de serviço, colaborador eventual) cadastrada pelo Cliente ou que se cadastra pelo link do Cliente para ser escalada em trabalhos.</Item>
      <Item titulo="Dados do Cliente:">todas as informações inseridas nos Produtos pelo Cliente, pelos Usuários ou pelos Profissionais, incluindo dados pessoais de terceiros.</Item>
      <Item titulo="Plano:">a modalidade contratada, com preço, limites e recursos descritos na página do Produto no momento da contratação.</Item>
    </Lista>,
  },
  {
    id: 'conta',
    titulo: 'Cadastro, conta e acesso',
    corpo: <>
      <p>Para usar os Produtos é preciso criar uma conta com informações verdadeiras, completas e atualizadas. O Cliente se compromete a:</p>
      <Lista>
        <Item>ter capacidade civil plena e, quando agir em nome de empresa, poderes para isso;</Item>
        <Item>manter sigilo das senhas e não compartilhar o acesso de um Usuário com outras pessoas;</Item>
        <Item>cadastrar como Usuários apenas pessoas autorizadas e revogar o acesso de quem deixar de ter vínculo com o Cliente;</Item>
        <Item>avisar a ARXUM imediatamente, pelo suporte ou por {EMPRESA.email}, se suspeitar de uso indevido da conta.</Item>
      </Lista>
      <p>
        O Cliente responde pelos atos praticados pelos Usuários que cadastrar. A ARXUM pode recusar ou cancelar cadastros com
        informações falsas, de terceiros sem autorização ou criados para fraude.
      </p>
    </>,
  },
  {
    id: 'licenca',
    titulo: 'Licença de uso e condutas proibidas',
    corpo: <>
      <p>
        Enquanto a conta estiver ativa, a ARXUM concede ao Cliente uma licença limitada, não exclusiva, intransferível e
        revogável para usar os Produtos pela internet, na modalidade de software como serviço, para as atividades da sua
        própria organização. Nenhum código-fonte é cedido.
      </p>
      <p>É proibido:</p>
      <Lista>
        <Item>usar os Produtos para fins ilícitos, fraudulentos ou que violem direitos de terceiros;</Item>
        <Item>inserir dados pessoais sem base legal, ou conteúdo ofensivo, discriminatório ou que viole a lei;</Item>
        <Item>enviar mensagens em massa não solicitadas (spam) a partir das funções de comunicação dos Produtos;</Item>
        <Item>copiar, revender, sublicenciar ou disponibilizar os Produtos a terceiros sem autorização por escrito;</Item>
        <Item>fazer engenharia reversa, extrair dados de forma automatizada (scraping), testar vulnerabilidades sem autorização ou contornar limites técnicos e de plano;</Item>
        <Item>sobrecarregar intencionalmente a infraestrutura ou prejudicar o uso por outros clientes.</Item>
      </Lista>
    </>,
  },
  {
    id: 'planos',
    titulo: 'Planos, preços e pagamento',
    corpo: <>
      <p>
        Os Planos, preços, limites e recursos de cada Produto estão publicados na página do Produto. O preço válido é o
        vigente no momento da contratação ou da renovação.
      </p>
      <Lista>
        <Item titulo="Plano gratuito:">pode ser usado por prazo indeterminado, dentro dos limites publicados. A ARXUM pode alterar esses limites ou encerrar o plano gratuito, avisando com pelo menos 30 dias de antecedência.</Item>
        <Item titulo="Planos pagos:">são cobrados por mensalidade, por meio de fatura com vencimento no dia definido na conta. O plano anual, quando oferecido, é cobrado de uma vez, com o desconto informado na contratação.</Item>
        <Item titulo="Meios de pagamento:">PIX e cartão, processados pelo Mercado Pago. A ARXUM não armazena dados completos de cartão. O pagamento é confirmado automaticamente.</Item>
        <Item titulo="Mudança de plano:">a passagem para um plano superior vale a partir da confirmação, com os novos limites liberados na hora. A passagem para um plano inferior vale a partir da fatura seguinte; dados acima dos novos limites não são apagados, mas novos cadastros ficam bloqueados até o uso voltar ao limite.</Item>
        <Item titulo="Reajuste:">os preços podem ser reajustados uma vez a cada 12 meses, com aviso por e-mail de pelo menos 30 dias. Se não concordar, o Cliente pode cancelar sem qualquer ônus antes de o novo preço valer.</Item>
        <Item titulo="Tributos:">os preços incluem os tributos incidentes sobre o serviço, salvo indicação em contrário. A nota fiscal é emitida conforme a legislação.</Item>
      </Lista>
    </>,
  },
  {
    id: 'inadimplencia',
    titulo: 'Atraso e suspensão por falta de pagamento',
    corpo: <>
      <p>
        Faturas em atraso são lembradas por e-mail. Se a fatura continuar em aberto após o prazo informado na cobrança, a
        ARXUM pode suspender o acesso ao painel. Durante a suspensão:
      </p>
      <Lista>
        <Item>os dados do Cliente <Destaque>não são apagados</Destaque>;</Item>
        <Item>os Usuários continuam podendo acessar a área de assinatura, pagar as faturas em aberto e falar com o suporte;</Item>
        <Item>links públicos do Cliente (por exemplo, o link de cadastro de Profissionais) ficam fora do ar.</Item>
      </Lista>
      <p>O acesso é restabelecido automaticamente quando o pagamento é confirmado.</p>
    </>,
  },
  {
    id: 'cancelamento',
    titulo: 'Cancelamento, arrependimento e devolução dos dados',
    corpo: <>
      <Lista>
        <Item titulo="Cancelamento pelo Cliente:">pode ser feito a qualquer momento, sem multa, pelo suporte do painel ou por {EMPRESA.email}. O acesso permanece até o fim do período já pago. Não há cobrança de novas faturas após o pedido.</Item>
        <Item titulo="Direito de arrependimento:">quando a contratação for feita por pessoa que se enquadre como consumidora, nos termos do art. 49 do Código de Defesa do Consumidor, ela pode desistir em até 7 dias da primeira contratação paga, com devolução integral do valor pago. Por liberalidade, a ARXUM estende esse direito a todos os Clientes na primeira contratação de um plano pago.</Item>
        <Item titulo="Valores já pagos:">fora da hipótese de arrependimento, não há devolução proporcional de períodos já iniciados, exceto quando a lei exigir ou quando a interrupção for causada pela ARXUM.</Item>
        <Item titulo="Exportação e exclusão:">após o cancelamento, o Cliente pode pedir a exportação dos seus dados em até 30 dias. Passados 90 dias do encerramento, os Dados do Cliente são excluídos, ressalvados os registros que a lei obriga a guardar (veja a Política de Privacidade).</Item>
      </Lista>
    </>,
  },
  {
    id: 'dados',
    titulo: 'Dados do Cliente e proteção de dados pessoais',
    corpo: <>
      <p>
        Os Dados do Cliente pertencem ao Cliente. A ARXUM só os utiliza para prestar o serviço, cumprir obrigações legais e
        proteger a segurança dos Produtos, nunca os vende e não os usa para publicidade.
      </p>
      <p>Em relação à Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018, LGPD):</p>
      <Lista>
        <Item titulo="O Cliente é o controlador">dos dados pessoais de Profissionais, equipes e demais pessoas que cadastra ou que se cadastram pelos seus links. Cabe a ele definir a finalidade, ter base legal para o tratamento, informar os titulares e atender os seus pedidos.</Item>
        <Item titulo="A ARXUM é operadora">desses dados: trata-os somente conforme as instruções do Cliente expressas pelo uso dos Produtos, adota medidas de segurança, mantém sigilo, comunica ao Cliente incidentes de segurança relevantes e o auxilia a atender os direitos dos titulares.</Item>
        <Item titulo="A ARXUM é controladora">dos dados de cadastro e uso dos Usuários, de cobrança e de suporte, conforme a Política de Privacidade.</Item>
        <Item titulo="Suboperadores:">o Cliente autoriza a ARXUM a contratar provedores de infraestrutura (hospedagem, banco de dados, envio de e-mails e pagamentos) listados na Política de Privacidade, que se obrigam a padrões de proteção compatíveis com a LGPD.</Item>
      </Lista>
    </>,
  },
  {
    id: 'crew',
    titulo: 'Regras específicas do ARXUM Crew',
    corpo: <>
      <p>O ARXUM Crew é uma ferramenta de organização de equipes e freelancers. Ao usá-lo, o Cliente reconhece que:</p>
      <Lista>
        <Item titulo="Relação com os Profissionais:">a ARXUM não é parte, intermediária nem agenciadora da relação entre o Cliente e os Profissionais. Contratação, definição de valores, pagamento, emissão de documentos fiscais, recolhimento de tributos e encargos, e a natureza jurídica do vínculo são de responsabilidade exclusiva do Cliente.</Item>
        <Item titulo="Pagamentos aos Profissionais:">o código PIX gerado pelo Crew é apenas uma facilidade para o Cliente pagar pelo próprio banco. A ARXUM não recebe, guarda nem repassa esses valores, e não responde por pagamentos feitos com dados incorretos.</Item>
        <Item titulo="Termos e documentos gerados:">modelos como o termo de prestação de serviço e recibos são oferecidos como apoio e não substituem a análise jurídica do Cliente, que deve adequá-los à sua realidade antes de usar.</Item>
        <Item titulo="Comunicação por WhatsApp:">as mensagens são abertas no aplicativo do próprio Usuário, que as envia. O Cliente deve contatar apenas Profissionais que tenham fornecido o número para esse fim e respeitar as regras do WhatsApp.</Item>
        <Item titulo="Check-in com localização:">a localização é registrada somente no momento em que o Profissional confirma presença e para a finalidade de comprovar a presença no trabalho. O Cliente deve informar isso aos Profissionais e não pode usar esse dado para outros fins.</Item>
        <Item titulo="Documentos e dados sensíveis:">o Cliente deve pedir aos Profissionais apenas os documentos necessários para a contratação e evitar o envio de dados pessoais sensíveis desnecessários.</Item>
      </Lista>
    </>,
  },
  {
    id: 'disponibilidade',
    titulo: 'Disponibilidade, suporte e evolução',
    corpo: <>
      <p>
        A ARXUM emprega esforços razoáveis para manter os Produtos disponíveis 24 horas por dia, mas não garante funcionamento
        ininterrupto ou livre de erros. Podem ocorrer interrupções por manutenção, preferencialmente avisadas com antecedência
        e feitas em horários de menor uso, por falhas de provedores, da internet ou por caso fortuito e força maior.
      </p>
      <p>
        O suporte é prestado pelo canal de suporte do painel e por {EMPRESA.email}, em dias úteis, em horário comercial. Os
        Produtos são atualizados continuamente; funções podem ser melhoradas, substituídas ou descontinuadas, sem redução
        relevante dos recursos essenciais do Plano pago em vigor sem aviso prévio de 30 dias.
      </p>
    </>,
  },
  {
    id: 'propriedade',
    titulo: 'Propriedade intelectual',
    corpo: <p>
      Os Produtos, o site, as marcas ARXUM e seus produtos, logotipos, layouts, textos e código são de titularidade da ARXUM
      ou de seus licenciantes, protegidos pelas Leis nº 9.609/1998, 9.610/1998 e 9.279/1996. Sugestões enviadas pelo Cliente
      podem ser usadas pela ARXUM para melhorar os Produtos, sem que isso gere obrigação ou remuneração.
    </p>,
  },
  {
    id: 'responsabilidade',
    titulo: 'Responsabilidades e limites',
    corpo: <>
      <p>O Cliente é responsável pelo conteúdo que insere, pelas decisões tomadas com base nos Produtos e pelo cumprimento das leis aplicáveis à sua atividade.</p>
      <p>
        Na máxima extensão permitida pela lei, a ARXUM não responde por lucros cessantes, perda de oportunidades ou danos
        indiretos, nem por danos decorrentes de uso indevido da conta, de informações incorretas inseridas pelo Cliente, de
        falhas de terceiros fora do seu controle ou de caso fortuito e força maior. Nos demais casos, a responsabilidade total
        da ARXUM fica limitada ao valor pago pelo Cliente nos 12 meses anteriores ao fato.
      </p>
      <p>
        Esses limites não se aplicam a danos causados por dolo ou culpa grave, nem afastam direitos do consumidor que a lei
        não permite limitar.
      </p>
      <p>O Cliente indenizará a ARXUM por prejuízos e reclamações de terceiros decorrentes de violação destes Termos ou da lei por ele ou por seus Usuários.</p>
    </>,
  },
  {
    id: 'suspensao',
    titulo: 'Suspensão e encerramento pela ARXUM',
    corpo: <p>
      A ARXUM pode suspender ou encerrar contas que violem estes Termos ou a lei, que coloquem em risco a segurança dos
      Produtos ou de terceiros, ou por ordem de autoridade competente. Sempre que possível e quando não houver risco, o
      Cliente será avisado antes e terá prazo para corrigir a situação. Em encerramento sem culpa do Cliente, valores pagos
      por período não usufruído serão devolvidos.
    </p>,
  },
  {
    id: 'alteracoes',
    titulo: 'Alterações destes Termos',
    corpo: <p>
      Estes Termos podem ser atualizados. Mudanças relevantes serão avisadas por e-mail ou no painel com pelo menos 30 dias de
      antecedência. Se o Cliente não concordar, pode cancelar antes de a nova versão valer, sem ônus. O uso continuado depois
      disso significa concordância. A versão em vigor e a data da última alteração ficam sempre nesta página.
    </p>,
  },
  {
    id: 'gerais',
    titulo: 'Disposições gerais, lei e foro',
    corpo: <>
      <Lista>
        <Item>As comunicações oficiais são feitas para o e-mail cadastrado na conta, que o Cliente deve manter atualizado.</Item>
        <Item>A tolerância com o descumprimento de qualquer cláusula não significa renúncia ao direito de exigi-la.</Item>
        <Item>Se alguma cláusula for considerada inválida, as demais continuam valendo.</Item>
        <Item>Estes Termos são regidos pelas leis brasileiras, em especial o Código Civil, o Marco Civil da Internet (Lei nº 12.965/2014), a LGPD e, quando aplicável, o Código de Defesa do Consumidor.</Item>
        <Item>Fica eleito o foro da Comarca da Capital do Estado do Rio de Janeiro para resolver controvérsias, ressalvado o direito do consumidor de propor ação no foro do seu domicílio.</Item>
      </Lista>
      <p>Antes de qualquer medida judicial, as partes se comprometem a buscar uma solução amigável pelo e-mail {EMPRESA.email}.</p>
    </>,
  },
]

export default function TermosDeUso() {
  return (
    <DocumentoLegal
      titulo="Termos de Uso"
      versao="1.0"
      vigencia="4 de novembro de 2026"
      resumo={<>
        <p className="font-semibold text-white">Resumo em linguagem simples</p>
        <p className="mt-2">
          Você pode usar os produtos ARXUM para a sua operação, dentro dos limites do seu plano. Os dados que você coloca são
          seus: nós só os usamos para prestar o serviço. Você pode cancelar quando quiser, sem multa, e levar seus dados. No
          ARXUM Crew, a relação com os profissionais (contratos, pagamentos e tributos) é sua; o sistema organiza o trabalho.
          Este resumo não substitui o texto completo abaixo.
        </p>
      </>}
      secoes={secoes}
    />
  )
}
