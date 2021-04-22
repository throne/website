import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./index.module.css";
import Typewriter from 'typewriter-effect';

function Home() {
  return (
    <Layout
      description="throne a spot to watch the internet from above."
      keywords={[
        "throne",
        "documentation",
        "docs",
      ]}
    >
      <header className={classnames("hero", styles.heroBanner)}>
        <div className="container">
          <h1 className={classnames("hero__title", styles.title)}>
            throne
          </h1>
          <h2 className={classnames("hero__subtitle", styles.subTitle)}>
          <Typewriter
              onInit={(typewriter) => {
                typewriter.typeString('watch the internet from up on your throne.')
                .pauseFor(700)
                .deleteChars(7)
                typewriter.typeString('<span style="color: #d4aa00;">throne.</span>')
                .start();
              }}
            />
          </h2>
          <div className={styles.buttons}>
              <Link
                className={classnames(
                  "button button--outline button--primary button--gs",
                  styles.homeBtn,
                  styles.btnPrimary
                )}
                to={useBaseUrl("docs/introduction")}
              >
                What's throne?
              </Link>
          </div>
        </div>
      </header>
      <main>
      </main>
    </Layout>
  );
}

export default Home;