import KartuProfil from './components/kartuprofil.jsx';

export default function App() {
  return (
    <main>
      <h1>Judul Halaman</h1>
      <KartuProfil nama="Emi" peran="Mahasiswa" tahun={2024} aktif={true} />
      <KartuProfil nama="Dewi" peran="Mahasiswa" tahun={2025} aktif={true} />
      <KartuProfil nama="Budi" peran="Mahasiswa" tahun={2021} aktif={false} />
    </main>
  );
}