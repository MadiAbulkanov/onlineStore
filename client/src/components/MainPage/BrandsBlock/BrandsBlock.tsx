import anbernicLogo from '../../../assets/anbernic.jpg';
import betafpvLogo from '../../../assets/betafpv.jpg';
import djiLogo from '../../../assets/dji.jpg';
import radiomasterLogo from '../../../assets/radiomaster.jpg';
import toolkitRCLogo from '../../../assets/toolkitRC.png';
import './BrandsBlock.scss'

export const BrandsBlock = () => {
    return (
        <>
        <div className="brands-block">
            <h1 className="brands-block-title">Топовые бренды</h1>
            <div className="brands">
                <img className="brand-logo" src={radiomasterLogo} alt="brand-logo"/>
                <img className="brand-logo" src={anbernicLogo} alt="brand-logo"/>
                <img className="brand-logo" src={betafpvLogo} alt="brand-logo"/>
                <img className="brand-logo" src={djiLogo} alt="brand-logo"/>
                <img className="brand-logo" src={toolkitRCLogo} alt="brand-logo"/>
            </div>
        </div>
        </>
    )
}