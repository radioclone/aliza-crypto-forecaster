import btcIcon from "cryptocurrency-icons/svg/color/btc.svg";
import ethIcon from "cryptocurrency-icons/svg/color/eth.svg";
import adaIcon from "cryptocurrency-icons/svg/color/ada.svg";
import dotIcon from "cryptocurrency-icons/svg/color/dot.svg";
import avaxIcon from "cryptocurrency-icons/svg/color/avax.svg";
import maticIcon from "cryptocurrency-icons/svg/color/matic.svg";
import linkIcon from "cryptocurrency-icons/svg/color/link.svg";
import dogeIcon from "cryptocurrency-icons/svg/color/doge.svg";
import uniIcon from "cryptocurrency-icons/svg/color/uni.svg";
import xrpIcon from "cryptocurrency-icons/svg/color/xrp.svg";
import atomIcon from "cryptocurrency-icons/svg/color/atom.svg";
import modeIcon from "/lovable-uploads/eec3796c-9458-4edb-a83c-5ff4ae7fd72d.png";

export const icons = {
  BTC: <img src={btcIcon} alt="BTC" className="h-6 w-6" />,
  ETH: <img src={ethIcon} alt="ETH" className="h-6 w-6" />,
  MODE: (
    <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gradient-to-br from-[#9b87f5] to-[#7E69AB] p-0.5 -ml-0.5 transition-transform duration-300 hover:scale-110">
      <img 
        src={modeIcon} 
        alt="MODE" 
        className="w-full h-full object-contain rounded-full transform transition-all duration-300 hover:brightness-110" 
      />
    </div>
  ),
  SOL: (
    <div className="relative w-6 h-6 rounded-full overflow-hidden bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 transition-transform duration-300 hover:scale-110">
      <img 
        src="https://cryptologos.cc/logos/solana-sol-logo.png"
        alt="SOL"
        className="w-full h-full object-contain rounded-full"
      />
    </div>
  ),
  XRP: <img src={xrpIcon} alt="XRP" className="h-6 w-6" />,
  ADA: <img src={adaIcon} alt="ADA" className="h-6 w-6" />,
  DOGE: <img src={dogeIcon} alt="DOGE" className="h-6 w-6" />,
  DOT: <img src={dotIcon} alt="DOT" className="h-6 w-6" />,
  UNI: <img src={uniIcon} alt="UNI" className="h-6 w-6" />,
  AVAX: <img src={avaxIcon} alt="AVAX" className="h-6 w-6" />,
  MATIC: <img src={maticIcon} alt="MATIC" className="h-6 w-6" />,
  ATOM: <img src={atomIcon} alt="ATOM" className="h-6 w-6" />,
  LINK: <img src={linkIcon} alt="LINK" className="h-6 w-6" />,
};