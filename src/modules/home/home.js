export default function home(req, res) {
  res.status(200).json({
    name: 'PASV',
    components: ['abc', 'tyu', 'qwe'],
    q: true,
  });
}