import styles from "./home.module.css";

function Home() {
  return (
    <>
      <header className={styles.HeaderHome}>
        <div className={styles.imageCenter}>
          <img src="/src/assets/Wizard Castle.svg" alt="" />
        </div>
      </header>
      <main className={styles.mainHome}>
        <div className={styles.container}>
          <h1>Welcome to Wizard’s Castle, dear adventurer</h1>
          <p>
            We provide all kind of resources to help you play Dungeons & Dragons
            !
          </p>
        </div>
        <div className={styles.container}>
          <h1>Have a peek at our precious resources</h1>
          <p>Browse our magic library by themes and topics</p>
        </div>
      </main>
    </>
  );
}

export default Home;
