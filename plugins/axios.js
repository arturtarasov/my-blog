export default function ({ $axios, redirect, store }) {
    $axios.onRequest(config => {
      console.log('Making request to ' + config.url)
    })
  
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 401) {
        redirect('/admin/login?message=session');
        store.dispatch('auth/logout');
      }

      if (code === 500) {
        console.error('Server 500 error');
      }
    })
  }