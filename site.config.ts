import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://blog.wtp016.top/',
  lang: 'zh-CN',
  title: 'WTP016\'s Blog',
  favicon: 'https://oss.wtp016.top/aboutme/avatar.jpg',
  author: {
    name: 'WTP016-CN',
    avatar: 'https://oss.wtp016.top/aboutme/avatar.jpg',
  },
  description: 'WTP016\'s Blog',
  subtitle: '一个每天闲着无事发牢骚的初三学生的博客',
  social: [
    {
      name: 'GitHub',
      link: 'https://github.com/WTP016-CN',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/1360343229',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'E-Mail',
      link: 'mailto:wtp016-cn@outlook.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Discord',
      link: 'https://discord.com/users/724937456453156884',
      icon: 'i-ri-discord-fill',
      color: '#5865f2',
    }
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: true,
    title: '资助一下这个一无所有的学生吧qwq',
    methods: [
      {
        name: '支付宝',
        url: 'https://oss.wtp016.top/donate/Alipay.png',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
      {
        name: 'QQ 支付',
        url: 'https://oss.wtp016.top/donate/QQ_Pay.png',
        color: '#12B7F5',
        icon: 'i-ri-qq-line',
      },
      {
        name: '微信支付',
        url: 'https://oss.wtp016.top/donate/Wechat_Pay.png',
        color: '#2DC100',
        icon: 'i-ri-wechat-pay-line',
      },
    ],
  },
})
