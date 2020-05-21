import React from "react"

import Layout from "../components/layout"
import Main from "../components/main"
import Breadcrumb from "../components/breadcrumb"
import Heading from "../components/heading"
import SEO from "../components/seo"
import Info from "../components/info"
import styles from "../styles/about.module.scss"
import image150x150 from "../images/150x150.png"
import image from "../images/gatsby-astronaut.png"

const AboutPage = () => (
    <Layout>
        <SEO title="About" />
        <Breadcrumb
            breadcrumb={
                [
                    {
                        name: `Home`,
                        path: `/`,
                    },
                    {
                        name: `About`,
                    },
                ]
            }
        />
        <Heading text="About" />
        <Main>
            <div className={styles.info}>
                <Info
                    image={image150x150}
                    title="What is Lorem Ipsum ?"
                    text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                />
            </div>
            <div className={styles.info}>
                <Info
                    image={image150x150}
                    title="Why do we use it?"
                    text="It is a long established fact that a reader will be distracted by the readable content 
                    of a page when looking at its layout."
                />
            </div>
            <div className={styles.info}>
                <Info
                    title="Where does it come from?"
                    text="Contrary to popular belief, Lorem Ipsum is not simply random text. 
                    It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. 
                    Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, 
                    looked up one of the more obscure Latin words, consectetur, 
                    from a Lorem Ipsum passage, and going through the cites of the word in classical literature, 
                    discovered the undoubtable source."
                />
            </div>
            <div className={styles.content}>
                <h3>Where can I get some ?</h3>
                <p>There are many variations of passages of Lorem Ipsum available, but
                the majority have suffered alteration in some form, by injected
                humour, or randomised words which don't look even slightly believable.
                If you are going to use a passage of Lorem Ipsum, you need to be sure
                there isn't anything embarrassing hidden in the middle of text.</p>
                <img src={image} alt="" style={{ maxWidth: `300px`, margin: `10px 0` }} />
                <p>All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true generator
                on the Internet. It uses a dictionary of over 200 Latin words,
                combined with a handful of model sentence structures, to generate
                Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
                therefore always free from repetition, injected humour, or
                non-characteristic words etc.</p>
                <img src={image} alt="" style={{ maxWidth: `300px`, margin: `10px 0` }} />

            </div>
        </Main>
    </Layout>
)

export default AboutPage
