const defecto = transport => ({
  route: '/',
  fun: (session, args) =>  {
      const ticker = transport.getTicker();
      session.send('El precio de ETH esa en %s CLP', ticker.ask);
    }
});

module.exports = transport => [
  defecto(transport)
];
