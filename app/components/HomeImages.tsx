import minishell from 'public/images/home/42/minishell/minishell.gif'
import inception1 from 'public/images/home/42/inception/inception1.png'
import minitalk from 'public/images/home/42/minitalk/minitalk1.png'
import solong from 'public/images/home/42/so_long/solonggif.gif'
import Image from 'next/image'
import cub3d from 'public/images/home/42/cub3d/cub3d.gif'
import ft_server from 'public/images/home/42/ft_server/ft_server.png'
import libft from 'public/images/home/42/libft/libft2.png'
import piscineCpp from 'public/images/home/42/piscine_cpp/piscine-cpp.png'
import containers from 'public/images/home/42/ft_containers/ft_containers.png'
import gnl from 'public/images/home/42/get_next_line/get_next_line-2.png'
import printf from 'public/images/home/42/printf/printf.png'
import pushSwap from 'public/images/home/42/push_swap/push_swap.gif'
import philosophers from 'public/images/home/42/philosophers/philosophers.png'
import ftIrc from 'public/images/home/42/ft_irc/motd.png'
import transcendence from 'public/images/home/42/transcendence/transcendance.gif'


export default function HomeImages() {
    return (
          <div className="grid grid-cols-3 gap-1">
            <div className="space-y-1">
              <Image src={cub3d} unoptimized alt="cub3d" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg" />
              <Image src={libft} alt="libft" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src={piscineCpp} alt="Piscine CPP" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src={pushSwap} unoptimized alt="push_swap" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
            </div>
            <div className="space-y-1">
              <Image src={ft_server} alt="ft_server" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src={minishell} unoptimized alt="minishell" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src={philosophers} alt="philosophers" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src={containers} alt="ft_containers" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src={printf} alt="printf" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
            </div>
            <div className="space-y-1">
              <Image src={inception1} alt="inception" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg" />
              <Image src={minitalk} alt="minitalk" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src={solong} alt="so_long" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src={gnl} alt="get_next_line" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src={ftIrc} unoptimized alt="ft_irc" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
              <Image src={transcendence} unoptimized alt="transcendence" className="transition-transform duration-300 ease-out hover:scale-90 rounded-lg"  />
            </div>
          </div>
    );
  }
  