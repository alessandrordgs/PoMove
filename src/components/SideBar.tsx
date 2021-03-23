import {FiAward, FiHome} from 'react-icons/fi'
import styles from '../styles/components/SiderBar.module.css'
export function SiderBar(){
    return(
        <aside className={styles.siderbar}>
            <header className={styles.logo}>
              <img src="icons/logoSideBar.svg" alt=""/>
            </header>
            <main className={styles.containerIcons}>
                <button className={styles.button}>
                    <FiHome size={40} />
                    </button>
                <button className={styles.button}>
                   <FiAward size={40} /> 
                    </button>
            </main>
        </aside>
    )
}