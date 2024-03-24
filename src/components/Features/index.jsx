import AdFreeImage from '../../assets/images/ad-free.svg';
import Offlinemusic from '../../assets/images/offline-music.svg';
import PlayEverywhere from '../../assets/images/play-everywhere.svg';
import PayYourWay from '../../assets/images/pay-your-way.svg';
import styles from './styles.module.css';


export const Features = () => {
    const Features = [{
        title: 'Ad-free music listening',
        Image: AdFreeImage,
        description: 'Enjoy uninterrupted music'
    },
    {
        title: 'Offline playback',
        Image: Offlinemusic,
        description: 'Save your data by listening offline.'
    },
    {
        title: 'Play everywhere',
        Image: PlayEverywhere,
        description: 'Listen on your speakers, TV, and other favorite devices.'
    },
    {
        title: 'Pay your way',
        Image: PayYourWay,
        description: 'Prepay with Paytm, UPI, and more.'
    },

    ]

    // const funct = (value) => {
    //     return (
    //         <div>
    //             <img src={AdFreeImage} alt='adfree'/>
    //             <h5>Ad-free music listening</h5>
    //              <p>Enjoy uninterrupted music</p>

    //         </div>
    //     )
    // }
    
    
  return <section className={styles.features}>
    <h3 className={styles.title}>The power of Premium</h3>

    <div className={styles.list}>   
             {Features.map((feature) => (
        <div className={styles.items}>
            <img src={feature.Image} alt='adfree'/>
            <h5 className={styles.label}>{feature.title}</h5>
            <p>{feature.description}</p>
        </div>
    ))}
    </div>
    </section>
    

      
  
}