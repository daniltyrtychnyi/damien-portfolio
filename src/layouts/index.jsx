import '@/styles'
import {Head} from 'minista/head'
import Header from './Header'
import Content from './Content'
import Brand from '@/sections/Brand'
import Footer from './Footer'

export default (props) => {
    const {
        title,
        url,
        children,
    } = props

    return (
        <>
            <Head htmlAttributes={{lang: "en"}}>
                <title>{`Damien | ${title}`}</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <script src="/src/main.js" type="module"/>
            </Head>
            <Header url={url} />
            <Content>
                {children}
                <Brand />
            </Content>
            <Footer />
        </>
    )
}