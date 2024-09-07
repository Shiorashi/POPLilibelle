import Image from 'next/image';
//import TopMenuItem from './TopMenuItem';

export default async function TopMenu() {
  //const session = await getServerSession(authOptions);
  return (
    <div className={`h-16 bg-white flex flex-row fixed top-0 left-0 right-0 border-b-[1px] border-solid z-30 bg-opacity-80`}>
      <div className="absolute right-3 top-3 flex flex-column h-full">
        {/* {session ? (
          <Link
            href="/api/auth/signout"
            style={{ textDecoration: 'none', fontSize: '20px' }}
            className={`flex items-center h-10 border-2 rounded-lg  w-auto shadow-lg p-2
          text-center justify-center ${
            session?.user.role === 'receptionist'
              ? 'border-rose-400 text-rose-400 hover:bg-rose-400'
              : 'border-cyan-500 text-cyan-500 hover:bg-cyan-500'
          } transition hover:text-white`}>
            <div>Sign-Out of {session.user.name}</div>
          </Link>
        ) : (
          <Link
            href="/api/auth/signin"
            style={{ textDecoration: 'none', fontSize: '20px' }}
            className={`flex items-center h-10 border-2 rounded-lg w-28 shadow-lg
          text-center justify-center border-cyan-500 text-cyan-500 hover:bg-cyan-500 transition hover:text-white`}>
            <div>Sign-In</div>
          </Link>
        )} */}
      </div>
    </div>
  );
}
