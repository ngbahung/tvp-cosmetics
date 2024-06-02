import axios from 'axios';

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const response = await axios.get('http://localhost:8080/api/BanTin/list');
        res.status(200).json(response.data);
      } catch (error) {
        res.status(500).json({ error: 'Failed to fetch data' });
      }
      break;

    case 'POST':
      try {
        const postData = req.body;
        const response = await axios.post('http://localhost:8080/api/BanTin/add', postData, {
          headers: {
            'Content-Type': 'application/json',
          },
        });
        res.status(200).json(response.data);
      } catch (error) {
        res.status(500).json({ error: 'Failed to post data' });
      }
      break;

    // handle other HTTP methods here (PUT, DELETE)
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}
