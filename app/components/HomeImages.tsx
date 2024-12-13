import inception1 from 'public/images/home/42/inception/inception1.png'
import minitalk from 'public/images/home/42/minitalk/minitalk1.png'
import Image from 'next/image'
import ft_server from 'public/images/home/42/ft_server/ft_server.png'
import libft from 'public/images/home/42/libft/libft2.png'
import piscineCpp from 'public/images/home/42/piscine_cpp/piscine-cpp.png'
import containers from 'public/images/home/42/ft_containers/ft_containers.png'
import gnl from 'public/images/home/42/get_next_line/get_next_line-2.png'
import printf from 'public/images/home/42/printf/printf.png'
import philosophers from 'public/images/home/42/philosophers/philosophers.png'
import ftIrc from 'public/images/home/42/ft_irc/motd.png'

/*
TODO: à améliorer 
*/

export default function HomeImages() {
    return (
          <div className="grid grid-cols-3 gap-1">
            <div className="space-y-1">
              {/* <Image src="" unoptimized alt="cub3d" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg" /> */}
              <Image src={libft} alt="libft" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src={piscineCpp} alt="Piscine CPP" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
            {/*   <Image src="" unoptimized alt="push_swap" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  /> */}
            </div>
            <div className="space-y-1">
              <Image src={ft_server} alt="ft_server" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              {/* <Image src="" unoptimized alt="minishell" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  /> */}
              <Image src={philosophers} alt="philosophers" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src={containers} alt="ft_containers" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src={printf} alt="printf" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
            </div>
            <div className="space-y-1">
              <Image src={inception1} alt="inception" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg" />
              <Image src={minitalk} alt="minitalk" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              {/* <Image src="" alt="so_long" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  /> */}
              <Image src={gnl} alt="get_next_line" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src={ftIrc} unoptimized alt="ft_irc" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              {/* <Image src="" unoptimized alt="transcendence" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  /> */}
            </div>
          </div>
    );
  }
  