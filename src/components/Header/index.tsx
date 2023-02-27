import Image from 'next/image'

export const Header = () => {
    return (
      <header className="flex items-center content-center bg-black w-32 text-white py-8 px-12">
        <div className="flex items-center content-center">
          <Image src="/assets/logo/headphones.svg" width={32} height={32} alt="Logo Image" />
          <p className="pl-2 font-size text-4xl text-center font-bold">FIGGZ</p>  
        </div>  
        <nav>
          <ul>
            <li>Casamentos</li>
          </ul>
        </nav>
      </header>
    );
}
