import "../styles/Banner.css";
// import Recommendation from './Recommendation'

// on peut accéder aux nœuds enfants de Banner dans ses paramètres, comme des props (ici children = img et h1)
// function Banner({ children }) {

//     return (
//             <div className='lmj-banner'>
//                 <div className='lmj-banner-row'>
//                 {children}
//                 </div>
//                 <Recommendation />

//            </div>
//     )
// }

function Banner({ children }) {
  return <div className="lmj-banner">{children}</div>;
}

export default Banner;
