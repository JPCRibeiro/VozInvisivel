import qrCodeUrl from "../assets/frame.svg" 
import devUrl from "../assets/jpcr.svg" 

export default function Footer() {
  return(
    <footer className="bg-[linear-gradient(275.45deg,_#212121_-6.3%,_#333333_86.31%)] text-white py-4">
      <hr className="mt-6 mb-4 text-[#474545]"></hr>
      <section> 
        <div className="flex items-center py-6 px-4 justify-center">
          <div className="flex flex-col gap-3 items-center">
            <p className="font-[500] text-[18px]">Você também pode realizar sua denúncia pelo nosso aplicativo</p>
            <img src={qrCodeUrl} className="w-[120px] bg-white rounded-[10px] mt-4" width="120"/>
            <p>Disponível apenas para Android</p>
          </div>
        </div>
        <hr></hr>
        <div className="flex justify-between items-center pt-4 px-4">
          <div>
            Copyright © 2024. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-2">
            Desenvolvido por
            <a href="https://jpcribeiro.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src={devUrl} width="30"/>
            </a>
          </div>
        </div>
      </section>
    </footer>
  )
}