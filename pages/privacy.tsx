import Link from 'next/link';
import { Footer, Header } from '../components';

export default function Privacy() {
    return (
        <div>
            <main>
                <h1>Política de privacidade</h1>
                <h4>Essa política de privacidade é efetiva a partir de 02 de Abril de 2022.</h4>
                <p>
                    Nós do HackoonSpace nos importamos muito com a segurança e privacidade dos usuários. Por isso, temos o objetivo de entregar o melhor serviço possível para todos, sem sacrificar a preservação dos dados dos usuários. Nesta política de privacidade, detalhamos quais dados que coletamos, bem como o como e o porquê disso.
                </p>
                <p>
                    Ao utilizar este site e o nosso sistema de newsletter, você entende que coletaremos e usaremos seu endereço de e-mail nas formas descritas nesta Política, sob as normas de Proteção de Dados (LGPD, Lei Federal 13.709/2018), das disposições consumeristas da Lei Federal 8078/1990 e as demais normas do ordenamento jurídico brasileiro aplicáveis.
                </p>
                <p> 
                    Todos os dados coletados aqui são coletados a partir do consentimento expresso do usuário. O devido cadastro e atualização deles, bem como o uso contínuo dos serviços providos por este site, pelo usuário será interpretado como consentimento expresso para o seu uso, até que o usuário se manifeste do contrário. Você tem o direito de revogar o acesso e utilização destes dados a qualquer momento.
                </p>
                <p>
                    A revogação do consentimento sobre o uso dos dados pode causar impacto na sua experiência e utilização de nossa newsletter.
                </p>
                <p>
                    Os usuários podem solicitar a alteração ou exclusão dos dados da conta a qualquer momento a partir da própria interface contida neste site. Também é possível solicitar estes procedimentos nos contactando diretamente, como enviando uma mensagem no nosso e-mail de contato <a className='dark-link' href='mailto:hackoonspace@gmail.com'>hackoonspace@gmail.com</a>.
                </p>
                <p>
                    Nossa newsletter coleta e utiliza apenas o seu endereço de e-mail, para fins de realizar o envio de novidades proporcionadas por nossa comunidade (como futuros eventos, palestras e semelhantes). 
                </p>
                <p>
                    Os e-mails aqui coletados são armazenados sem uma data final específica, considerando o envio continuo de mensagens com novidades para os inscritos na mesma.
                </p>
                <p>
                    O armazenamento deles é feito a partir dos serviços da plataforma <a className='dark-link' href='https://mailchimp.com/pt-br/'>Mailchimp</a>, não persistindo em quaisquer outras máquinas e/ou sistemas externos ao mesmo, exceto no envio e recebimento de e-mails por provedores de e-mail.
                </p>
                <p>
                    Nos responsabilizamos principalmente pela manipulação destes endereços de e-mails, ao enviarmos conteúdo em nossa newsletter, e pela gerência e segurança de nossas contas na plataforma Mailchimp. Todos os dados são utilizados em sistemas e contas protegidos com senha e com o acesso apenas de pessoas diretamente responsáveis para o funcionamento correto dos mesmos.
                </p>
                <h4>Quer se inscrever? <Link className='dark-link' href='/'>Clique aqui!</Link></h4>
            </main>
            <Footer />
        </div>
    );
}