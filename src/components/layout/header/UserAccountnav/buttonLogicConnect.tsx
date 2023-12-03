"use client"

import { signOut, getSession } from 'next-auth/react';
import ButtonHeader from '../ButtonHeader';
import { AiOutlineLogout} from 'react-icons/ai';
import { useEffect } from 'react';

// Componente do botão de logout
const LogoutButton = () => {

  // Efeito para buscar a sessão
  useEffect(() => {
    const fetchSession = async () => {
      const session = await getSession();
      if (session) {
        
      }
    };

    fetchSession();
  }, []);

  // Função para lidar com o logout
  const handleLogout = async () => {
    await signOut({ redirect: false, callbackUrl: '/' });
  };

// Renderiza o botão de logout
 return (
  <div>
    <ButtonHeader
       icone={<AiOutlineLogout />}
       nome="Sair"
       onClick={() => signOut()} href={''}    />
  </div>
);
};

export default LogoutButton;
