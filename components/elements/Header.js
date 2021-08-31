import Link from 'next/link'
import Login from "../Modal/Login";
import { useEffect, useState } from 'react';
import Register from '../Modal/Register';


const Header = ({ isOpen, toggle }) => {

  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  const logout = () => {
    localStorage.removeItem('token')
    setIsLogin(!isLogin)
    notificationLogout()
  }



  useEffect(() => {
   const token = localStorage.getItem('token')
   if(token){
     setIsLogin(true)
   }
  }, [isLogin])
  console.log(isLogin,"isLogin")
  return (
    <div>

      <Login modal={modalLogin} setModal={setModalLogin} isLogin={isLogin} setIsLogin={setIsLogin}  />
      <Register modal={modalRegister} setModal={setModalRegister} isLogin={isLogin} setIsLogin={setIsLogin} />
      <div style={{ borderBottom: "2px solid #E5E5E5" }}>
        <nav
          className="h-16 flex justify-between items-center bg-white text-blue-primary relative shadow-sm font-mono container mx-auto 2xl:p-2 px-4"
          role="navigation"
        >
          <Link href="/" >
           <a className="text-blue-dark text-3xl">Staycation</a>
          </Link>
          <div className="cursor-pointer md:hidden" onClick={toggle}>
            {isOpen ? (
              <svg
                className="w-6 h-6 transition ease-in duration-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6 transition ease-in duration-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </div>

          <div className="md:block hidden">
            <Link href="#" >
            <a className='p-4'>Home</a>
            </Link>

            {isLogin ? <> <Link href="/" >
            <a className='p-4' onClick={() => logout()}>Logout</a>
            </Link> </> :
            <> <Link href="/" >
            <a className='p-4' onClick={() => setModalLogin(!modalLogin)}>Login</a>
            </Link>
            </>
            }



            {isLogin === false &&   <Link href="#" >
            <a className='p-4' onClick={() => setModalRegister(!modalRegister)}>Register</a>
            </Link>}

          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
