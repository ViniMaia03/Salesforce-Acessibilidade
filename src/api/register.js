// pages/api/register.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { nome, email, senha } = req.body;
      // Aqui você pode adicionar lógica para salvar os dados no banco de dados
      res.status(200).json({ message: 'Cadastro realizado com sucesso!' });
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  }  