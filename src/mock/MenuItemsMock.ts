interface MenuItem {
  label: string
  path: string
  icon: string
  alt?: string // Opcional
  disabled?: boolean // Nova propriedade opcional
}

export const MenuItemsMock: MenuItem[] = [
  {
    label: 'Visão geral',
    path: '/home',
    icon: '/icon-nav-overview.svg',
    alt: 'Visão geral',
  },
  {
    label: 'Transações',
    path: '/transacoes',
    icon: '/icon-nav-transactions.svg',
    alt: 'Transações',
  },
  {
    label: 'Orçamentos',
    path: '/orcamento',
    icon: '/icon-nav-budgets.svg',
    alt: 'Orçamentos',
  },
  {
    label: 'Potes',
    path: '/carteira',
    icon: '/icon-nav-pots.svg',
    alt: 'Potes',
  },
  {
    label: 'Contas recorrentes',
    path: '/conta-corrente',
    icon: '/icon-nav-recurring-bills.svg',
    alt: 'Contas recorrentes',
  },
]
