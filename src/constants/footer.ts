type FooterTitle = 'Terms of Use' | 'Privacy' | 'Contact' | 'Cookie' | 'Preferences'

export type Footer = Array<{ title: FooterTitle; link: string }>

export const footerList: Footer = [
  {
    title: 'Terms of Use',
    link: '/'
  },
  {
    title: 'Privacy',
    link: '/'
  },
  {
    title: 'Contact',
    link: '/'
  },
  {
    title: 'Cookie',
    link: '/'
  },
  {
    title: 'Preferences',
    link: '/'
  }
]
