import { useState } from 'react'
import {FiAward, FiHome, } from 'react-icons/fi'
import {FaBars} from 'react-icons/fa'
import { AiOutlineClose } from 'react-icons/ai'
import styles from '../styles/components/SiderBar.module.css'
export function SideBar(){
    const [sidebar, setSidebar] = useState(true);
    const showsidebar = () => setSidebar(!sidebar)
    return(
         <div>
             
          {
              sidebar ?(
                  <>
                
                <button className={styles.buttonSideBarDisable} onClick={showsidebar}>
                  <FaBars/>
               </button>
                <aside className={styles.sidebarDisable}>
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
                
            </>
              ) : (
                <>
                <div className={styles.container}>
                  <button className={styles.buttonSideBar} onClick={showsidebar}>
                  <AiOutlineClose/>
                  </button>
                <aside className={styles.sidebar}>
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
            </div>
            </>
              )
          }
        </div>
    )
}