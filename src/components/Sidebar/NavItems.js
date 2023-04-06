import { FiHome } from 'react-icons/fi'

export const MainNavItems = [
  {
    id: 'main-dashboard',
    label: 'Dashboard',
    icon: FiHome,
    path: '/'
  },
  {
    id: 'Blogs',
    label: 'Blogs',
    // icon: BlogsIcon,
    path: '/blogs '
  },
  {
    id: 'orders',
    label: 'Orders',
    // icon: OrderIcon,
    path: '/orders',
    children: [
      {
        path: '/',
        label: 'or'
      }
    ]
  }
]
