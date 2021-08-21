export default {
  loadUsers ({ commit }) {
    // later async request
    const users = [
      {
        id: 1,
        name: 'John',
        status: 'new',
        image: 'John.png',
        desc:
          'John is a new customer for littledata. We want him to go through the full survey so that we can properly setup his account.',
        storeName: '',
        storeUrl: '',
        email: '',
        subscription: false,
        from: '',
        agency: false,
        destination: ''
      },
      {
        id: 2,
        name: 'Claire',
        status: 'invited',
        image: 'Claire.png',
        desc:
          'Claire was invited by John to her account. We only want her to answer a few quick questions and that’s it.',
        storeName: 'ClaireShop',
        storeUrl: 'https://claire.myshopify.com/',
        email: 'claire@email.com',
        subscription: true,
        from: '',
        agency: false,
        destination: ''
      },
      {
        id: 3,
        name: 'Paul',
        status: 'registered',
        image: 'Paul.png',
        desc:
          'Paul is a returning customer. Since he has already answered all the questions before, we can take him directly to the app.',
        storeName: 'PaulShop',
        storeUrl: 'https://paul.myshopify.com/',
        email: 'paul@email.com',
        subscription: true,
        from: 'Friend',
        agency: true,
        destination: 'Google Analytics'
      }
    ]
    commit('loadUsers', users)
  }
}
