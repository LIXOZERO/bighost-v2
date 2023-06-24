import React from 'react'
import styles from './style.module.css'
import Header from '../../components/Header'
import Handshake from './assets/handshake.svg'
import Footer from '../../components/Universal/Footer'
import Copyright from '../../components/Universal/Copyright'
const policies = [
  {
    title: 'Vigência: 1 de Janeiro de 2022',
    subtitle:
      'Toda a informação de caráter pessoal que seja recolhida por qualquer tipo de meio (eletrônico, manual, etc), que constem nas nossas bases de dados ou arquivos, estão protegidas nos seguintes termos:',
    policies: [
      {
        id: 1,
        policie:
          'Qualquer informação que nossos clientes nos passem serão coletadas e guardadas de acordo com padrões rígidos de segurança e confidencialidade. Estas informações coletadas dos usuários trafegam de forma segura, utilizando processo de criptografia padrão da Internet.'
      },
      {
        id: 1,
        policie:
          'Não será permitida a sua venda, partilha, cedência, ou disponibilização por qualquer meio a terceiros, no todo ou em parte, sem o consentimento prévio dos utilizadores respectivos a que os dados dizem respeito. Entende-se por consentimento prévio, que os utilizadores autorizem explicitamente a renúncia à confidencialidade dos dados, tendo sido devidamente informados das consequências que poderão daí surgir. Excetuam-se o caso do registo de domínios, já que é obrigatório que a informação seja armazenada numa base de dados internacional aberta chamada WHOIS.'
      },
      {
        id: 1,
        policie:
          'As informações pessoais que nos forem passadas pelos usuários serão coletadas por meios éticos e legais, podendo ter um ou mais propósitos, sobre os quais nossos usuários serão informados.'
      },
      {
        id: 1,
        policie:
          'Os usuários serão avisados de quais informações suas estaremos coletando antes do instante dessa coleta, ficando a opção de escolha para fornecimento ou não dessas informações sob responsabilidade do usuário, o qual também terá ciência das consequências de sua decisão.'
      },
      {
        id: 1,
        policie:
          ' A menos que tenhamos determinação legal ou judicial, suas informações nunca serão transferidas a terceiros ou usadas para finalidades diferentes daquelas para as quais foram coletadas.'
      },
      {
        id: 1,
        policie:
          'O acesso às informações coletadas está restrito apenas a funcionários autorizados para o uso adequado dessas informações. Os funcionários que se utilizarem indevidamente dessas informações, ferindo nossa Política de Privacidade, estarão sujeitos às penalidades do nosso processo disciplinar.'
      },
      {
        id: 1,
        policie:
          'Manteremos íntegras as informações que nos forem fornecidas.'
      },
      {
        id: 1,
        policie:
          'Sempre que outras organizações forem contratadas para prover serviços de apoio, será exigida a adequação aos nossos padrões de privacidade.'
      },
      {
        id: 1,
        policie:
          ' seu navegador de internet conta com a função interna de armazenar pequenos arquivos de texto – “cookies” – que contêm informações que permitem que um site reconheça a sua conta. Nós utilizamos cookies para armazenar suas preferências e informações de login, e fornecer funcionalidades personalizadas. Você pode rejeitar o uso de cookies alterando as configurações do seu navegador, mas saiba que isso desabilitará parte das funcionalidades do site da MozDomains.'
      },
      {
        id: 1,
        policie:
          'Para fins de operações de processo de crédito e gerenciamento de riscos, nós poderemos trocar informações sobre nossos clientes com fontes respeitáveis de referência e serviços de compensação.'
      }
    ]
  }
]

const Policies = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.hero}>
        <div className={styles.left_hero}>
          <h1>Políticas de Privacidade</h1>
          <p>
            Toda a informação de caráter pessoal que seja recolhida
            por qualquer tipo de meio (eletrônico, manual, etc), que
            constem nas nossas bases de dados ou arquivos, estão
            protegidas nos seguintes termos
          </p>
        </div>
        <div className={styles.rigth_hero}>
          <img src={Handshake} />
        </div>
      </div>

      <div className={styles.wrapper}>
        <h1 className={styles.title}>Politicas de Privacidade</h1>

        {policies.map((item, index) => (
          <div className={styles.policies} key={index}>
            <h4>{item.title}</h4>
            <p>{item.subtitle}</p>

            <ul>
              {item.policies.map((item, index) => (
                <li>
                  <span>
                    <span>{index + 1}.</span>
                    {item.policie}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Footer />
      <Copyright />
    </div>
  )
}

export default Policies
