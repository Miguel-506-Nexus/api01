
app.get('/cliente/categoria/:categoria', (req, res) => {
  const categoria = req.params.categoria;

  const resultado = clientes.filter(p =>
    p.categoria.toLowerCase() === categoria.toLowerCase()
  );

  if (resultado.length === 0) {
    return res.status(404).json({
      mensagem: `Nenhum cliente encontrado na categoria ${categoria}`
    });
  }

  res.status(200).json(resultado);
});
