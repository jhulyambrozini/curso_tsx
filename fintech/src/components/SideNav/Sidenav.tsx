import resumeIcon from '../../assets/icons/resumo.svg'
import salesIcon from '../../assets/icons/vendas.svg'
import webhooksIcon from '../../assets/icons/webhooks.svg'
import configIcon from '../../assets/icons/configuracoes.svg'
import outIcon from '../../assets/icons/sair.svg'
import contactIcon from '../../assets/icons/contato.svg'
import FintechSVG from '../../assets/FintechSVG'
import { SidenavContainer } from './style'
import { NavLink } from 'react-router-dom'


const Sidenav = () => {
  return <SidenavContainer className='box bg-3'>
    <FintechSVG title='Fintech Logo' />
    <ul>
      <li>
        <span>
          <img src={resumeIcon} alt="Icone de casa" />
        </span>
        <NavLink to='/' title='Cique aqui para ir para página de resumo'>Resumo</NavLink>
      </li>

      <li>
        <span>
          <img src={salesIcon} alt="Icone de loja" />
        </span>
        <NavLink to='/sales'  title='Cique aqui para ir para página de vendas'>Vendas</NavLink>
      </li>

      <li>
        <span>
          <img src={webhooksIcon} alt="Icone de webhooks" />
        </span>
        <a>Webhooks</a>
      </li>

      <li>
        <span>
          <img src={configIcon} alt="Icone de configuração" />
        </span>
        <a>Configurações</a>
      </li>

      <li>
        <span>
          <img src={contactIcon} alt="Icone de contato" />
        </span>
        <a>Contato</a>
      </li>

      <li>
        <span>
          <img src={outIcon} alt="Icone de sair" />
        </span>
        <a>Sair</a>
      </li>
    </ul>
  </SidenavContainer>
}

export default Sidenav
