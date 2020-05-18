import React from "react"

import Layout from "../components/layout"
import Main from "../components/main"
import Breadcrumb from "../components/breadcrumb"
import Heading from "../components/heading"
import SEO from "../components/seo"
import styles from "../styles/contact.module.scss"

const ContactPage = () => (
    <Layout>
        <SEO title="Contact" />
        <Breadcrumb
            breadcrumb={
                [
                    {
                        name: `Home`,
                        path: `/`,
                    },
                    {
                        name: `Contact`,
                    },
                ]
            }
        />
        <Heading text="Contact" />
        <Main page="contact">
            <section className={styles.contact}>
                <div className={styles.contact__info}>
                    <dl>
                        <dt>Address</dt>
                        <dd>address</dd>
                    </dl>
                    <dl>
                        <dt>Email</dt>
                        <dd>test@test.com</dd>
                    </dl>
                    <dl>
                        <dt>Phone</dt>
                        <dd>0000000000</dd>
                    </dl>
                    <dl>
                        <dt>Fax</dt>
                        <dd>0000000000</dd>
                    </dl>
                </div>
                <div className={styles.contact__map}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d501808.1251664363!2d106.4538493!3d10.7054561!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292e8d3dd1%3A0xf15f5aad773c112b!2zSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1589770351011!5m2!1svi!2s"></iframe>
                </div>
            </section>
        </Main>
    </Layout>
)

export default ContactPage
