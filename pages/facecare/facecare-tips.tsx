import type { NextPage } from "next"
import { useEffect } from "react"
import AOS from 'aos'
import Head from 'next/head'
import NavBar from "../../components/organisms/Navbar"
import FaceCareTipsStep from "../../components/organisms/FaceCareTipsStep"
import FaceCareSolusiTips from "../../components/organisms/FaceCareTipsStep/face-care-solusi-tips"
import Footer from "../../components/organisms/Footer"
const FaceCareTips: NextPage = () => {
  useEffect(() => {
    AOS.init()
  });
  return (
    <>
      <Head>
        <title>Face Care Tips & Trick</title>
        <meta property="0g:title" content="Face Care Tips & Trick" key="title" />
      </Head>
      <NavBar activeMenu="facecare" />
      <FaceCareTipsStep />
      <FaceCareSolusiTips title="Gunakan sabun pembersih muka sesuai jenis kulit" desc1="Tidak semua orang memiliki jenis kulit wajah yang sama. Ada yang memiliki jenis kulit normal, kering, berminyak, sensitif, atau kombinasi dari beberapa jenis kulit tersebut. Berbeda jenis kulit, berbeda pula jenis produk perawatan yang cocok digunakan." desc2="Misalnya, bagi orang yang memiliki kulit kering dan sensitif, disarankan memilih produk sabun pembersih muka berbahan kimia lembut dengan kandungan yang dapat melembapkan kulit, serta tidak mengandung alkohol dan wewangian." desc3="Sementara itu, pemilik kulit berminyak disarankan untuk menggunakan pembersih muka berbahan dasar lembut yang dapat melembapkan wajah tanpa membuat kulit wajah berminyak, misalnya pembersih wajah yang mengandung gliserin." desc4="Karena rentan mengalami komedo dan jerawat, orang yang memiliki tipe kulit berminyak juga disarankan untuk memilih produk perawatan kulit atau make up yang berlabel noncomedogenic agar tidak menyebabkan penyumbatan pada pori-pori." />
      <FaceCareSolusiTips title="Bersihkan wajah secara rutin" desc1="Salah satu cara merawat kulit wajah yang paling sederhana adalah rutin membersihkan wajah. Agar wajah tetap bersih, Anda perlu mencuci wajah 2 kali sehari, yaitu pada pagi hari dan malam hari sebelum tidur." desc2="Membersihkan wajah pada pagi hari bertujuan untuk menghilangkan kotoran dan bakteri yang mungkin menempel di wajah saat tidur. Menjelang tidur, wajah juga perlu dibersihkan dari make up, debu, dan polusi yang menempel di wajah selama Anda beraktivitas di luar rumah." desc3="Bila perlu, bersihkan wajah setiap kali selesai melakukan aktivitas yang menyebabkan Anda banyak berkeringat, misalnya setelah berolahraga. Hal ini karena keringat dan minyak berlebih pada wajah dapat menyumbat pori-pori kulit wajah, sehingga memicu munculnya komedo dan jerawat." />
      <FaceCareSolusiTips title="Bersihkan wajah dengan cara yang benar" desc1="Selain dilakukan secara rutin, cara membersihkan wajah juga perlu dilakukan dengan benar. Untuk membersihkan wajah, awali dengan membasuh wajah menggunakan air hangat." desc2="Selanjutnya, gunakan sabun cuci muka dan mulailah membersihkan wajah dengan melakukan pijatan lembut secara melingkar menggunakan ujung jari. Setelah itu, bilas wajah dengan air, lalu keringkan dengan cara menepuk wajah secara perlahan menggunakan handuk bersih." desc3="Jika perlu, Anda juga bisa mencoba memebersihkan wajah dengan teknik double cleansing." />
      <FaceCareSolusiTips title="Gunakan pelembap" desc1="Memakai pelembab juga menjadi bagian penting dari cara merawat kulit wajah. Pelembap wajah sebaiknya digunakan setelah mencuci muka. Hal ini dilakukan untuk menjaga kelembapan alami kulit wajah." desc2="Namun, Anda perlu memilih pelembab sesuai dengan jenis kulit. Jika Anda memiliki kulit berjerawat dan berminyak, pilihlah pelembap berbahan dasar air dan bebas kandungan minyak." desc3="Pelembab wajah yang baik biasanya mengandung bahan-bahan yang berfungsi untuk mengembalikan struktur dan kelembapan alami kulit wajah, menjaga keseimbangan pH kulit, mengurangi efek radikal bebas, dan memperbaiki kerusakan sel-sel dan jaringan kulit." desc4="Beberapa bahan yang efektif untuk melembapkan kulit antara lain gliserol, ceramide, dan niacinamide. Anda juga menggunakan pelembab dari bahan alami, seperti alpukat, minyak kelapa, atau minyak zaitun, sebagai pelembap alami kulit wajah." />
      <FaceCareSolusiTips title="Gunakan tabir surya" desc1="Penggunaan tabir surya bermanfaat untuk melindungi kulit dari paparan sinar UV yang mampu menyebabkan perubahan warna kulit dan kanker kulit, serta memicu munculnya bintik atau flek pada wajah dan keriput." desc2="Saat menggunakan tabir surya, Anda disarankan memilih tabir surya khusus untuk wajah dengan SPF 30 dan gunakan setiap hari meski cuaca sedang tidak panas sekalipun. Penggunaan tabir surya perlu diulang setiap 2 jam sekali atau lebih sering ketika Anda sedang beraktivitas di bawah terik matahari." desc3="Tak hanya menggunakan tabir surya, Anda juga perlu mengenakan pakaian lengan panjang, celana panjang, kacamata hitam, dan topi lebar, saat beraktivitas di luar ruangan. Selain itu, hindari pula paparan sinar matahari langsung pada pukul 10 pagi hingga 4 sore." />
      <Footer />
    </>
  )
}

export default FaceCareTips;
