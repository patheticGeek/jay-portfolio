import { setup } from 'twind'

setup({
  theme: {
    boxShadow: {
      custom:
        '0px 2px 10px -3px #dddddd, 1px 34px 28px -9px #dddddd, 1px 49px 28px -5px #dddddd36, 0px 40px 25px -6px #dddddd75'
    },
    extend: {
      backgroundImage: () => ({ custom: "url('assets/Group 196.png')" })
    }
  }
})
