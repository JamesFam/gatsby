import React from "react"

import Layout from "../components/layout"
import Main from "../components/main"
import SEO from "../components/seo"
import MainVisual from "../components/mainvisual"
import Info from "../components/info"
import Button from "../components/button"
import Title from "../components/title"
import List from "../components/list"
import styles from "../styles/top.module.scss"
import image150x150 from "../images/150x150.png"
import image250x250 from "../images/250x250.png"

const IndexPage = () => {
    return (
        <Layout>
            <SEO title="Home" />
            <MainVisual />
            <section className={styles.title}>
                <h2>Welcome to new Gatsby site.</h2>
            </section>
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
                <Button text="More" url="/about/" />

                <section className={styles.section}>
                    <div className={styles.section__title}>
                        <Title text="Information" />
                    </div>
                    <List
                        listData={
                            [
                                {
                                    image: image250x250,
                                    title: `What is Lorem Ipsum ?`,
                                    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
                                },
                                {
                                    image: image250x250,
                                    title: `Why do we use it ?`,
                                    text: `It is a long established fact that a reader will be distracted by the readable content 
                                    of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less 
                                    normal distribution of letters, 
                                    as opposed to using 'Content here, content here', making it look like readable English.`,
                                },
                                {
                                    image: image250x250,
                                    title: `Where does it come from ?`,
                                    text: `Contrary to popular belief, Lorem Ipsum is not simply random text. 
                                    It has roots in a piece of classical Latin literature from 45 BC, 
                                    making it over 2000 years old. Richard McClintock, 
                                    a Latin professor at Hampden-Sydney College in Virginia, 
                                    looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage.`,
                                },
                                {
                                    image: image250x250,
                                    title: `Where can I get some ?`,
                                    text: `There are many variations of passages of Lorem Ipsum available, 
                                    but the majority have suffered alteration in some form, by injected humour, 
                                    or randomised words which don't look even slightly believable. `,
                                },
                                {
                                    image: image250x250,
                                    title: `The standard Lorem Ipsum passage`,
                                    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                                }
                            ]
                        }
                    />
                </section>
            </Main>
        </Layout>
    )
}

export default IndexPage
