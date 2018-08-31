fetch('/graphql', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({ query: '{ hello }' }),
})
  .then(r => r.json())
  .then(data => {
    const render = document.getElementById('render');
    render.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    console.log('HMR')
  });
