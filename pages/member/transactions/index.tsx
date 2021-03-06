import SideBar from '../../../components/organisms/SideBar';
import TransactionContent from '../../../components/organisms/TransactionContent';
import jwtDecode from 'jwt-decode'
import { JWTPayloadTypes } from '../../../services/data-types';

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}

interface GetServerSideProps{
  req: {
    cookies: {
      token: string
    }
  }
}

export async function getServerSideProps( {req}: GetServerSideProps ) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      }
    }
  }
  const jwtToken = Buffer.from(token, 'base64').toString('ascii')
  const payload: JWTPayloadTypes = jwtDecode(jwtToken)
  const userFromPayload: any = payload.pelanggan;
  const IMG = process.env.NEXT_PUBLIC_IMG;
  userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;

  return {
    props: {
      user: userFromPayload,
    }
  }
}
